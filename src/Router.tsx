import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/focusTime-react" element={<DefaultLayout />}>
        <Route path="/focusTime-react" element={<Home />} />
        <Route path="/focusTime-react/history" element={<History />} />
      </Route>
    </Routes>
  )
}
