import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';  // Add this line to import the CSS
// import 'cdbreact/dist/cdbreact.min.css';



import {Provider} from 'react-redux'
import { store } from './redux/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
