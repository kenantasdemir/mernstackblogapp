import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap"


function MyBlogs() {


    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        // Silme işlemini burada gerçekleştirin
        // ...
        // Silme işlemi tamamlandıktan sonra modalı kapatmak için setShowModal(false) çağrısını yapabilirsiniz
    };

    let blogId = 4;

    const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

    // Girilen metine göre blogları filtrele
    const filtered = blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setFilteredBlogs(filtered);
  };

  // Burada blogları ve başlıkları örnek olarak kullanıyorum
  const blogs = [
    { id: 1, title: 'Blog 1' },
    { id: 2, title: 'Blog 2' },
    { id: 3, title: 'Sample Blog' },
    // ...
  ];

  const renderedBlogs = searchTerm ? filteredBlogs : blogs;


    return (
        <div className='container mt-5'>
            <form class="form-inline my-lg-0 d-flex justify-content-start">
                <input value={searchTerm} onChange={handleInputChange} className="form-control mr-auto w-25" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success mx-3 my-2 my-sm-0" type="submit">Search</button>
            </form>

            <table className='table table-striped'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>Makale başlık</th>
                        <th scope='col'>Güncelle</th>
                        <th scope='col'>Sil</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>makale ad</td>
                        <td><Link to={`/myblogs/update-blog/${blogId}`} className='btn btn-primary' >Güncelle</Link></td>
                        <td><Link className='btn btn-danger' onClick={() => setShowModal(true)} >Sil</Link></td>
                    </tr>


                    
                </tbody>
            </table>


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
        </div>
    )
}

export default MyBlogs