import './App.css';
import LoginRegisterView from './components/login-register-view/login-register-view';
import Helmet from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet bodyAttributes={{class: 'bg-dark'}}/>
      <LoginRegisterView/>
    </div>
  );
}

export default App;
