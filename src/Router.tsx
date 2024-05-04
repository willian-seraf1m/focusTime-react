import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'
import { useEffect } from 'react'

export function Router() {
  useEffect(() => {
    console.log('hello world')
  })

  return (
    <Routes>
      <Route path="/focusTime-react" element={<DefaultLayout />}>
        <Route path="/focusTime-react" element={<Home />} />
        <Route path="/focusTime-react/history" element={<History />} />
      </Route>
    </Routes>
  )
}
