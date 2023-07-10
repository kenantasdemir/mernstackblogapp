import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {

  let [isPasswordVisible, setPasswordVisible] = useState(false)


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 

    const loginData = {
      email,
      password,
    };

 

    // Örnek olarak fetch kullanımı:
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Giriş işlemi başarılı olduğunda yapılacak işlemler
      })
      .catch((error) => {
        // Giriş işlemi hatalı olduğunda yapılacak işlemler
      });
  };



  return (

    <div className='mx-auto col-8 col-md-4 col-lg-4 mb-5'>
      <form onSubmit={handleSubmit} className='form-group justify-content-center align-items-center mb-5' style={{ width: 400 }}>

        <input type="text" value={email} onChange={handleEmailChange} className='form-control mt-3' placeholder="Email adresinizi giriniz." id="email" />


        <label htmlFor="password" className='text-muted' >Şifrenizi giriniz</label>
        <div className='input-group'>
          <input value={password} onChange={handlePasswordChange} type={isPasswordVisible ? "text" : "password"} id='password' className='form-control' placeholder="Şifrenizi giriniz" />
          <button onClick={() => setPasswordVisible(!isPasswordVisible)} className='btn btn-outline-secondary' type='button'>
            <i className={isPasswordVisible ? "bi-eye" : "bi-eye-slash"}></i>
          </button>
        </div>


        <a href="/forgotten-password"><p>Şifremi unuttum.</p></a>

        <div className='d-grid gap-3 mt-5'>

          <button className='btn btn-primary rounded-pill'>Giriş Yap</button>
          <Link to="/signinwithgoogle" className='btn btn-danger rounded-pill'>Google ile giriş yap</Link>
          <Link to="/signinwithfacebook" className='btn btn-primary rounded-pill'>Facebook ile giriş yap</Link>

          <p className='text-center'>Ya da</p>
          <Link to={"/register"} className="btn btn-primary rounded-pill" >Kaydol</Link>
        </div>

      </form>

    </div>


  )
}

export default LoginPage
