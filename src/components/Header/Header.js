import "./Header.css";
import {Link as RouterLink} from 'react-router-dom';

function Header( {logo}) {
  return (
    <header className="App-header">
        
        <nav className="navbar navbar-expand-lg w-100">
          <div className="container-fluid d-flex justify-content-between flex-wrap">
            <img src={logo} className="App-logo navbar-brand" alt="logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end w-100">
                <li className="nav-item">
                  <RouterLink to="/" className="App-link nav-link link-light">About Me</RouterLink>
                </li>

                <li className="nav-item">
                  <RouterLink to="/projects" className="App-link nav-link link-light">Projects</RouterLink>
                </li>
              </ul>
            </div> {/* #navbarSupportedContent ends */}
          </div>  
        </nav>
    </header>
  )
}

export default Header 