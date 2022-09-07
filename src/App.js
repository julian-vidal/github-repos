import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path='/' element={<Profile userName="julian-vidal"/>} />
          <Route path='/projects' element={<Projects userName="julian-vidal" />} />
          <Route path='/project/:name' element={<ProjectDetail userName="julian-vidal" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
