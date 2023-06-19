import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {store} from './app/store.ts'
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import router from './router.tsx'
import Header from './components/Header.tsx'
import Player from './components/Player.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      <Player />
    </Provider>
  </StrictMode>
)
