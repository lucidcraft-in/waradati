import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'
import { useNavigate,Link  } from "react-router-dom";
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
const Login = ({ location }) => {  
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo])
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <div>
      {' '}
      <NavBar />
      <div className="customer_login">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-6 col-md-6">
              <div className="account_form">
                <h2>login</h2>
                <form onSubmit={submitHandler}>
                  <p>
                    <label>
                      Username or email <span>*</span>
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </p>
                  <p>
                    <label>
                      Passwords <span>*</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </p>
                  <div className="login_submit">
                    <Link to="/signup">
                      <button>Sign up</button>
                    </Link>

                    <label for="remember">
                      <input id="remember" type="checkbox" />
                      Remember me
                    </label>
                    <button type="submit">login</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login