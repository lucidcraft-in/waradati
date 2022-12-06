import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/userActions'
import { useNavigate,Link  } from "react-router-dom";
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
const SignUp = ({ }) => {  
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  
  const userLogin = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(name,email, password))
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
                <h2>Sign up</h2>
                <form onSubmit={submitHandler}>
                  <p>
                    <label>
                      Username <span>*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </p>
                  <p>
                    <label>
                      email <span>*</span>
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
                    <a href="#">Lost your password?</a>
                    <label for="remember">
                      <input id="remember" type="checkbox" />
                      Remember me
                    </label>
                    <button type="submit">Sign up</button>
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

export default SignUp