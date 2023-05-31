import { Typography } from '@mui/material'
import React,{useState} from 'react'
import axios from 'axios';

function ResetPasswordPage() {


  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // E-posta gönderme işlemini gerçekleştirmek için HTTP isteği yapabilirsiniz
    axios
      .post('/forgotten-password', { email })
      .then((response) => {
        // E-posta gönderildiğinde yapılacak işlemler
        console.log('E-posta gönderildi');
      })
      .catch((error) => {
        // E-posta gönderme hatası durumunda yapılacak işlemler
        console.error('E-posta gönderme hatası:', error);
      });
  };



  return (
    <div className='mx-auto col-8 col-md-8 col-lg-6 mb-5'>
        <form onSubmit={handleSubmit} action="" className='form-group'>
            <Typography variant='h4' className='mt-5 mb-2'>Şifrenizi sıfırlamak için hesabınıza bağladığınız mail adresini giriniz</Typography>
            <input value={email} onChange={handleEmailChange} type="email" className='form-control mt-3' />
            <div className='d-grid mt-5'>
                     <button type='submit' className='btn btn-success btn-block'>Gönder</button>

            </div>
        </form>
    </div>
  )
}

export default ResetPasswordPage