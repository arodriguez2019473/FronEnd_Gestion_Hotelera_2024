import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
// import './index.css'
import { DashboardPage } from './pages/dashboard/DashboardPage.jsx'
import { AuthPage } from './pages/auth/AuthPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)