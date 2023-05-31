import React,{useState} from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BlogCreatePage() {
    // const data = CKEditor.instances.editor1.getData();
    // console.log(data)

    let navigate = useNavigate()

    const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    if (data.length < 50 && data.length > 1000) {
      // Karakter sınırlamasını aşan durumları kontrol edebilirsiniz
      console.log(data.length)
      console.log('Karakter sınırlamasını aştınız!');
      return false;
    }else{
    setEditorData(data);

        return true
    }

  };


    let [baslik,setBaslik] = useState("")



  const handleClick = (e) => {

    if(handleEditorChange === true){
        navigate("/blogs");
    }

    console.log(baslik)




  };





  return (

    <div className='row'>
    <div className='mx-auto col-8 col-md-8 col-lg-6 mb-5'>
        <h2 className="text-center mt-5"></h2>

        <Typography variant='h3' align='center'>Haydi! İnsanların okuyup ilham edinmesi için bir blog oluştur.</Typography>
         <form action="" className='form-group mt-3'>
            <label htmlFor="title" className='mt-3 mb-3'>Başlık giriniz</label>
            <input type="text" value={baslik} onChange={(e)=>setBaslik(e.target.value)} id="title" className="form-control mb-5" />
   
    
        </form> 
            <label className="mb-3">İçeriğinizi giriniz</label>
        <CKEditor 
                    editor={ ClassicEditor }
                    data={editorData}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor.getData() );
                    } }
                    // onChange={ ( event, editor ) => {
                    //     const data = editor.getData();
                    //     console.log( { event, editor, data } );
                    // } }
                    
                    onChange={handleEditorChange}

                  
                />
<p className='d-flex justify-content-end align-items-center'> Toplam karakter sayısı {editorData.length} </p>

            <div className="d-grid mt-4">  
                <button onClick={()=>handleClick()} className="btn btn-success rounded-pill btn-block">Oluştur</button>
            </div>

    </div>
    </div>
    
  )

}

export default BlogCreatePage