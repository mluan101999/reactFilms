import React, {
  useState,
} from "react";
import "./Login.css";
import {FaFacebookF, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const Login = () => {

  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  return (
    <>
      <div className="login-container">
        {/* <h1>LOGIN</h1> */}
        <div className={`container-login ${isActive ? 'active' : ''}`} id="container">
          <div className="form-container sign-up">
            <form action="#">
              <h1>Tạo tài khoản</h1>
              <div className="social-icons">
                <a href="#" className="icon"><FaFacebookF style={{ color: "black" }} /></a>
                <a href="#" className="icon"><FaGoogle style={{ color: "black" }} /></a>
                <a href="#" className="icon"><FaLinkedin style={{ color: "black" }} /></a>
                <a href="#" className="icon"><FaGithub style={{ color: "black" }} /></a>

              </div>
              <samp>hoặc sử dụng Email để đăng ký</samp>
              <input type="text" placeholder="Tên" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Mật khẩu" />
              <button>Đăng ký</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form action="#">
              <h1>Đăng nhập</h1>
              <div className="social-icons">
                <a href="#" className="icon"><FaFacebookF style={{ color: "black" }} /></a>
                <a href="#" className="icon"><FaGoogle style={{ color: "black" }} /></a>
                <a href="#" className="icon"><FaLinkedin style={{ color: "black" }} /></a>
                <a href="#" className="icon"><FaGithub style={{ color: "black" }} /></a>
              </div>
              <samp>hoặc sử dụng email và mật khẩu</samp>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Mật khẩu" />
              <a href="#" className="fp">Quên mật khẩu?</a>
              <button>Đăng nhập</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Chào mừng trở lại!</h1>
                <p>Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng của trang web</p>
                <button className="hidden" id="login" onClick={handleLoginClick}>Đăng nhập</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Chào bạn!</h1>
                <p>Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả các tính năng của trang web</p>
                <button className="hidden" id="register" onClick={handleRegisterClick}>Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
