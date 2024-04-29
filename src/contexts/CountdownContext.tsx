import { ReactNode, createContext, useContext, useEffect } from 'react'
import { CyclesContext } from './CyclesContext'
import { differenceInSeconds } from 'date-fns'

interface CountdownContextType {
  currentSeconds: number
  minutesAmount: number
  secondsAmount: number
  minutes: string
  seconds: string
}

export const CountdownContext = createContext({} as CountdownContextType)

interface CountdownContextProviderProps {
  children: ReactNode
}

export function CountdownContextProvider({
  children,
}: CountdownContextProviderProps) {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${activeCycle.task} | ${minutes}:${seconds}`
    } else {
      document.title = `Ignite Time`
    }
  }, [activeCycle, minutes, seconds])

  return (
    <CountdownContext.Provider
      value={{ currentSeconds, minutesAmount, secondsAmount, minutes, seconds }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
