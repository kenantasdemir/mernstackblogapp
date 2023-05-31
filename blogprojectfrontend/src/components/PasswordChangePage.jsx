import React,{useState} from 'react'

function PasswordChangePage() {

    let [isOldPasswordVisible,setOldPasswordVisible] = useState(true)
    let [isNewPasswordVisible,setNewPasswordVisible] = useState(true)
    let [isNewPasswordConfirmingVisible,setPasswordConfirmingVisible] = useState(true)
    

    return (
        <div className='mx-auto col-8 col-md-4 col-lg-6 mb-5'>
            <form action="">


                <label htmlFor='oldpassword'>Şu anki şifreniz</label>
                <div className="input-group">
                    <input type={isOldPasswordVisible ? "password" : "text"} className="form-control" id="oldpassword" placeholder="Şuanki parolanızı girin" />
                    <button onClick={()=>setOldPasswordVisible(!isOldPasswordVisible)} className="btn btn-outline-secondary" type="button" id="togglePassword">
                        <i id="eyeIcon" class={isOldPasswordVisible ? "bi-eye-slash" : "bi-eye"}></i>
                    </button>
                </div>



                <label className='mt-4' htmlFor="newpassword">Yeni şifreniz</label>
                <div className='input-group'>
                    <input id='newpassword' type={isNewPasswordVisible ? "password":"text"} className='form-control' placeholder='Yeni şifrenizi giriniz' />
                    <button onClick={()=>setNewPasswordVisible(!isNewPasswordVisible)} className='btn btn-outline-secondary' type='button' id='toggleNewPassword'>
                        <i id='eyeIconForNewPassword' className={isNewPasswordVisible ? "bi-eye-slash":"bi-eye"}></i>
                    </button>
                </div>

                <label className='mt-4' htmlFor="confirmnewpassword">Yeni şifrenizi onaylayın</label>
                <div className='input-group'>
                    <input id='confirmnewpassword' type={isNewPasswordConfirmingVisible ? "password":"text"} className='form-control' placeholder='Yeni şifrenizi onaylayın.' />
                    <button onClick={()=>setPasswordConfirmingVisible(!isNewPasswordConfirmingVisible)} className='btn btn-outline-secondary' type='button' id='toggleConfirmNewPassword'>
                        <i id='eyeIconForConfirmingNewPassword' className={isNewPasswordConfirmingVisible ? "bi-eye-slash":"bi-eye"}></i>
                    </button>
                </div>
            </form>

        
        </div >
    )
}

export default PasswordChangePage