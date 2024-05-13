import { useContext } from 'react'
import { CountdownContainer, Separator, Time } from './styles'
import { CountdownContext } from '../../../../contexts/CountdownContext'

export function Countdown() {
  const { minutes, seconds } = useContext(CountdownContext)

  return (
    <CountdownContainer>
      <div className="timeContainer">
        <Time>{minutes[0]}</Time>
        <Time>{minutes[1]}</Time>
      </div>
      <div className="separatorContainer">
        <Separator>:</Separator>
      </div>
      <div className="timeContainer">
        <Time>{seconds[0]}</Time>
        <Time>{seconds[1]}</Time>
      </div>
    </CountdownContainer>
  )
}
