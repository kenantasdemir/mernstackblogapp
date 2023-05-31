import logo from './logo.svg';
import RegisterPage from './components/RegisterPage';
import LoginPage from "./components/LoginPage"
import BlogCreatePage from './components/BlogCreatePage';
import HomePage from "./components/HomePage";
import BlogUpdatePage from './components/BlogUpdatePage';
import MyBlogs from './components/MyBlogs';
import PasswordChangePage from './components/PasswordChangePage';
import Navbar from "./components/Navbar"
import './App.css';
import ResetPasswordPage from "./components/ResetPasswordPage"
import { Route, Routes } from "react-router-dom";
import NotFound from './components/NotFound';
import BlogDetail from './components/BlogDetail';
import MyAccount from './components/MyAccount';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';

function App() {
  return (
    <div>
      <Navbar />
  


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/create-blog' element={<BlogCreatePage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:blogId' element={<BlogDetail />} />

        <Route path="/my-account" element={<MyAccount />} />

       

        <Route path='/myblogs/*' element={<MyBlogs />}>
          <Route path='update-blog/:blogId' element={<BlogUpdatePage />} />
        </Route>


        <Route path="/account" element={<MyBlogs />} />

        <Route path='/faq' element={<FAQ/>}/>
        


        <Route path="/change-password" element={<PasswordChangePage />} />
        <Route path='/forgotten-password' element={<ResetPasswordPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logout' element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path='*' element={<NotFound />} />

      </Routes>


    </div>
  );
}

export default App;
