import React from 'react'
import { Link } from 'react-router-dom';

function Blogs() {

    const MAX_CHARACTERS = 400; // Gösterilecek maksimum karakter sayısı

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };
    return (
        <div className='container d-flex justify-content-center align-items-center mt-5'>
            <div className="card w-75">
                <div className='card-header text-center'>
                    Blog başlık
                </div>
                <div className='card-body' style={{ height: 300 }}>
                {truncateText(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, reiciendis eveniet impedit officiis vitae maiores et quaerat labore possimus vero. Neque, rem. Debitis, tempora! Autem molestiae sed suscipit consequatur ea.
                    Sapiente, deserunt blanditiis facilis, consequuntur, minima impedit delectus perferendis quod suscipit ullam voluptates ipsam nisi explicabo. Quo, soluta voluptas dignissimos ad repellat dolor tempore nisi quis quia, laboriosam reiciendis quae?
                    Sunt officiis non illum blanditiis id vel tempora praesentium similique minima optio fugiat quia aspernatur quibusdam assumenda veniam accusamus nobis possimus, enim delectus cupiditate officia ullam iste vitae explicabo? Veniam!
                    Fugiat quisquam, harum ratione odit nulla voluptate numquam reiciendis. Repudiandae magni quis similique animi ad maiores eveniet laborum deleniti quisquam cum fugiat repellat aliquid illo quam esse, quos accusamus. Provident?
                    Tempore, nesciunt voluptatibus. Nisi corporis nam a est itaque suscipit magni aliquam culpa ipsa deserunt? Sit incidunt deserunt deleniti veritatis vitae quidem? Dolore eius rerum debitis, labore voluptate quibusdam nihil.`, MAX_CHARACTERS)}
                </div>

                <div className='card-footer d-flex justify-content-between' style={{ height: 50 }}>
                    <p className='text-muted d-flex align-items-center'>@kenant42</p>
                    <Link to="/blogs/4" className='btn btn-primary align-self-center'>Devamını oku</Link>
                    {/* align-self-center butonu dikey olarak ortalar. */}
                </div>
            </div>
        </div>
    )
}

export default Blogs