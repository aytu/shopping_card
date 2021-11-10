import { Provider } from 'react-redux';
import './assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/dashboard';
import store from './store';
import Navbar from './components/navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ShoppingCard from './pages/shoppingCard';
function App() {
  return (
  
      <Provider store={store}>   
        <BrowserRouter>    
          <Navbar/>
          <div className="app">  
            <Routes>
                <Route path="/" element={ <Dashboard/>} />                  
                <Route path="/shopping-card" element={ <ShoppingCard/>}/>                
            </Routes>  
               
          </div>
          </BrowserRouter>       
      </Provider>   
   
  );
}

export default App;
