import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './context.jsx'
import {Provider} from "react-redux"
import { store } from './store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppContextProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </AppContextProvider> */}
  </React.StrictMode>,
)
