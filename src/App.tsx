import React from 'react'
import ReactDOM from 'react-dom'
import FrontPage from './pages/frontpage/FrontPage'
import '../public/assets/sass/main.scss'

import 'dotenv/config';

ReactDOM.render(
  <React.StrictMode>
    <FrontPage />
  </React.StrictMode>,
  document.getElementById('root')
)