import { Routes, Route, Navigate } from 'react-router-dom'

import { Layout } from './layouts/layout'
import { HomePage } from './pages/HomePage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/user-profile' element={<span>USER PROFILE PAGE</span>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
