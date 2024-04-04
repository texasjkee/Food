import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <AppRoutes />
  </Router>
)
