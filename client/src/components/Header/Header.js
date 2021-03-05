import './Header.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actionCreators/user';

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  console.log(auth);
  const handlerLogout = () => {
    dispatch(logoutUser())
    localStorage.clear();
    console.log(auth);

  };
  return (
    <header className="App-header">
      <div className="logo-wrapper">
        <Link to="/" >
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>

      <div className="project-wrapper">
        <span>НОРМАЛЬНЫЕ ДИСКИ</span>
      </div>
      <nav className="nav-bar">
        {auth ?
          <>
            <div >
              <Link className="nav-bar-link" to="/configurator" >
                <p className="nav-bar-item">configurator</p>
              </Link>
            </div>
            <div >
              <Link className="nav-bar-link" to="/" >
              <p onClick={handlerLogout} className="nav-bar-item">logout</p>
              </Link>
            </div>
          </> :
          <>
            <div >
              <Link className="nav-bar-link" to="/login" >
                <p className="nav-bar-item">login</p>
              </Link>
            </div>
            <div >
              <Link className="nav-bar-link" to="/register" >
                <p className="nav-bar-item">register</p>
              </Link>
            </div>
          </>
        }
      </nav>
    </header>
  )
}

export default Header
