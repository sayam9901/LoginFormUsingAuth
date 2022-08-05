
import './App.css';
import Loginbutton from './components/Loginbutton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './components/Logout';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className='App'>
     <Loginbutton/>
     <Logout/>
     <Profile/>
    </div>
  );
}

export default App;
