import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (


    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">




      <div className="container-fluid">
        <a className="navbar-brand" href="/">BlogShare</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">




          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Bloglar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-blog">
                Blog oluştur
              </Link>
            </li>

            <li className='nav-item'>
                <Link className='nav-link' to="/faq">SSS</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Username
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/my-account">
                    Hesap bilgileri
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/myblogs">
                    Bloglarım
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/change-password">
                    Şifre değiştir
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Çıkış yap
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar