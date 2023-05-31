import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function BlogDetail() {

  const {blogId} = useParams()
  const navigate = useNavigate()

  function handleClick(){
    navigate("/blogs")
  }

  

  return (

<div>

    <div className='container d-flex justify-content-center align-items-center mt-5'>
            
        <div className="card w-75">
            <div className='card-header text-center'>
                {blogId}. blog
            </div>
            <div className='card-body' style={{ height: 300 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, reiciendis eveniet impedit officiis vitae maiores et quaerat labore possimus vero. Neque, rem. Debitis, tempora! Autem molestiae sed suscipit consequatur ea.
                Sapiente, deserunt blanditiis facilis, consequuntur, minima impedit delectus perferendis quod suscipit ullam voluptates ipsam nisi explicabo. Quo, soluta voluptas dignissimos ad repellat dolor tempore nisi quis quia, laboriosam reiciendis quae?
                Sunt officiis non illum blanditiis id vel tempora praesentium similique minima optio fugiat quia aspernatur quibusdam assumenda veniam accusamus nobis possimus, enim delectus cupiditate officia ullam iste vitae explicabo? Veniam!
                Fugiat quisquam, harum ratione odit nulla voluptate numquam reiciendis. Repudiandae magni quis similique animi ad maiores eveniet laborum deleniti quisquam cum fugiat repellat aliquid illo quam esse, quos accusamus. Provident?
                Tempore, nesciunt voluptatibus. Nisi corporis nam a est itaque suscipit magni aliquam culpa ipsa deserunt? Sit incidunt deserunt deleniti veritatis vitae quidem? Dolore eius rerum debitis, labore voluptate quibusdam nihil.
            </div>

            <div className='card-footer d-flex justify-content-between' style={{ height: 50 }}>
                <p className='text-muted d-flex align-items-center'>@kenant42</p>
            </div>
        </div>



</div>
<div className='position-fixed bottom-0 end-0 p-3' style={{ marginBottom: '50px', marginRight: '50px' }}>
  <button onClick={handleClick} className='btn btn-outline-success'>
    <i className='bi bi-arrow-left'></i>
  </button>
</div>


</div>

  )
}

export default BlogDetail