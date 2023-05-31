import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {

  const [isPasswordVisible,setPasswordVisible] = useState(false)
  const [isConfirmingPasswordVisible,setConfirmingPasswordVisible] = useState(false)




  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
    password: '',
    repassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form verilerini bir nesne olarak oluştur
    const { name, surname, age, email, password, repassword } = formData;
    const formDataToSend = {
      name,
      surname,
      age,
      email,
      password,
      repassword,
    };


    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Kaydetme hatası: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Kaydetme hatası:', error);
      });
    



  };

  return (
    <div className='row'>
      <div className='mx-auto col-8 col-md-8 col-lg-6 mb-5'>
        <form onSubmit={handleSubmit} className='form-group justify-content-center align-items-center mb-5' style={{ width: 400 }}>
          <label htmlFor="name" className='text-muted'>Adınız</label>
          <input type="text" value={formData.name} onChange={handleChange} className='form-control' name="name" id="name" placeholder='İsminizi giriniz' />
          <label htmlFor="surname" className='text-muted'>Soyadınız</label>
          <input type="text" value={formData.surname} onChange={handleChange} className='form-control' name="surname" id="surname" placeholder='Soyisminizi giriniz' />

          <label htmlFor="age" className='text-muted'>Yaşınız</label>
          <input type="number" value={formData.age} onChange={handleChange} className='form-control' name="age" id="age" placeholder='Yaşınızı giriniz' />

          <label htmlFor="email" className='text-muted'>Email Adresiniz</label>
          <input type="text" value={formData.email} onChange={handleChange} className='form-control' name="email" id="email" placeholder="Email adresinizi giriniz" />

          <label htmlFor="password" className='text-muted'>Şifreniz</label>
          <div className='input-group'>
               <input type={isPasswordVisible ? "text":"password"} value={formData.password} onChange={handleChange} className='form-control' name="password" id="password" placeholder="Şifre giriniz" />
                <button onClick={()=>setPasswordVisible(!isPasswordVisible)} className='btn btn-outline-secondary'>
                  <i className={isPasswordVisible ? "bi-eye" : "bi-eye-slash"}></i>
                </button>
          </div>


          <label htmlFor="repassword" className='text-muted'>Şifrenizi tekrar giriniz</label>
          <div className='input-group'>
                  <input type={isConfirmingPasswordVisible ? "text":"password"} value={formData.repassword} onChange={handleChange} className='form-control' name="repassword" id="repassword" placeholder='Şifreyi tekrar giriniz' />
                  <button onClick={()=>setConfirmingPasswordVisible(!isConfirmingPasswordVisible)} className="btn btn-outline-secondary">
                    <i className={isConfirmingPasswordVisible ? "bi-eye":"bi-eye-slash"}></i>
                  </button>
          </div>


          <div className='btn-group d-grid gap-3 mt-5'>
            <button type="submit" className='btn btn-primary rounded-pill'>Kaydol</button>
            <Link to="/login" className='text-center'>Zaten bir hesabın var mı? Öyleyse giriş yap.</Link>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
