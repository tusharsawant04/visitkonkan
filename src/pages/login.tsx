import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleOtpLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add OTP login logic here
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              {!isOtpLogin ? (
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="emailOrPhone" className="form-label">Email or Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="emailOrPhone"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <a href="#" className="text-decoration-none" onClick={() => setIsOtpLogin(true)}>Login with OTP</a>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="text-decoration-none">Forgot Password?</a>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleOtpLogin}>
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="otp" className="form-label">OTP</label>
                    <input
                      type="text"
                      className="form-control"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <a href="#" className="text-decoration-none" onClick={() => setIsOtpLogin(false)}>Back to Password Login</a>
                  </div>
                </form>
              )}
              <hr />
              <div className="text-center">
                <button className="btn btn-outline-secondary me-2">Login with Google</button>
                <button className="btn btn-outline-secondary me-2">Login with Facebook</button>
                <button className="btn btn-outline-secondary">Login with Apple</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;