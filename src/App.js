import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile userName="julian-vidal" />
    </div>
  );
}

export default App;
