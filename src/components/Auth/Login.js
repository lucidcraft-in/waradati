import React from 'react'

export default function Login() {
  return (
    <div>
      {' '}
      <div class="customer_login">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3"></div>
            <div class="col-lg-6 col-md-6">
              <div class="account_form">
                <h2>login</h2>
                <form action="#">
                  <p>
                    <label>
                      Username or email <span>*</span>
                    </label>
                    <input type="text" />
                  </p>
                  <p>
                    <label>
                      Passwords <span>*</span>
                    </label>
                    <input type="password" />
                  </p>
                  <div class="login_submit">
                    <a href="#">Lost your password?</a>
                    <label for="remember">
                      <input id="remember" type="checkbox" />
                      Remember me
                    </label>
                    <button type="submit">login</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
