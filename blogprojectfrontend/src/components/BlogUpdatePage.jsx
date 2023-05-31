import React,{useState,useEffect} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

function BlogUpdatePage() {


    const [blogData, setBlogData] = useState({
        title: '',
        content: ''
      });
    
      useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await fetch('/myblogs');
            const data = await response.json();
            setBlogData({
              title: data.title,
              content: data.content
            });
          } catch (error) {
            console.log('Veri alınamadı:', error);
          }
        };
    
        fetchData();
      }, []);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBlogData((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };



  return (
  
    <div className='mx-auto col-8 col-md-8 col-lg-6 mb-5'>
        <h2 className="text-center mt-5"></h2>

        <form action="">
        <input
          type="text"
          id='title'
          className='mt-3 mb-3 form-control'
          name="title"
          value={blogData.title}
          onChange={handleInputChange}
        />
            <CKEditor 
                    editor={ ClassicEditor }
                    data={blogData.content}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor.getData() );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    
                    } }
                />
        </form>



    </div>
  )
}

export default BlogUpdatePage