import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap"
import axios from 'axios';

function MyAccount() {

    let [isPasswordVisible, setPasswordVisible] = useState(false)



    const [showModal, setShowModal] = useState(false);

    const handleDelete = async () => {
      

        await axios.post("/delete-user").then((response)=>{
            console.log("hesap silindi ")
        }).catch((error)=>{
            console.log("kullnıcı hesabı silinirken hata.")
        })
        

        setShowModal(false)
    };
    return (
        <div>
            <form className='form-group' action="">
                <div className='d-flex justify-content-center align-content-around mt-5'>
                    <input type="text" className='form-control ml-1 w-25' placeholder='Adınız' />
                    <input type="text" className='form-control w-25' ml-auto placeholder='Soyadınız' />
                </div>

                <div className='d-flex flex-column align-items-center justify-content-center '>
                    <input type="number" className='form-control w-50 mt-3' placeholder='Yaşınız' />
                    <input type="email" className='form-control w-50 mt-3' placeholder='Email adresiniz' />
                </div>

                <div className='d-flex align-items-center justify-content-center mt-3'>
                    <input style={{ width: 640 }} type={isPasswordVisible ? "text" : "password"} id='password' className='form-control' placeholder="Şifrenizi giriniz" />
                    <button onClick={() => setPasswordVisible(!isPasswordVisible)} className='btn btn-outline-secondary' type='button'>
                        <i className={isPasswordVisible ? "bi-eye" : "bi-eye-slash"}></i>
                    </button>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-3">
                    <div className="d-grid gap-3 w-50">
                        <button type='button' onClick={()=>setShowModal(true)} className="btn btn-danger rounded-pill">Hesabı sil</button>
                    </div>
                </div>



                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Onayı</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Yasin kola almak istemediğine emin misin?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>İptal</Button>
                        <Button variant="danger" onClick={handleDelete}>Sil</Button>
                    </Modal.Footer>
                </Modal>

            </form>
        </div>
    )
}

export default MyAccount