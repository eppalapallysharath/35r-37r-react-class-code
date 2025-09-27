import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistedStore } from './Redux/store.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  // </StrictMode>,
)
