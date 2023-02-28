import './App.css';
import Login from './Components/login';
import axios from 'axios'
import UserContextProvider from './Components/UserContextProvider';
import Routes from './Components/Routes';

function App() {
  axios.defaults.baseURL =`localhost:8080/user/`
  axios.defaults.withCredentials=true;

  return (
      <UserContextProvider>
        <Routes/> 
      </UserContextProvider>
    
  );
}

export default App;
