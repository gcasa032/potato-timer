import './App.css';
import LoginRegisterView from './components/login-register-view/login-register-view';
import Helmet from 'react-helmet';
import HomeView from './components/home-view/home-view';

function App() {

  const user = localStorage.getItem("token");
  var show = false;

  if (user)
      show = <HomeView/>
  else
      show = <LoginRegisterView/>

  return (
    <div class="text-white">
      <Helmet bodyAttributes={{class: 'bg-dark'}}/>
      {show}
    </div>
  );
}

export default App;
