import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'


function Postcard({ $id, title, image }) {


    return (
        <div>
            <Link to={`/post/${$id}`}>
                <div className='w-full bg-gray-100 rounded-xl p-4'>
                    //show image
                    <div className='w-full justify-center mb-4'>
                        <img src={service.getFilePreview(image)}alt={title} />
                    </div>
                    //show title
                    <div  className='text-xl font-bold'>
                        <h2>{title}</h2>
                    </div>


                </div>
            </Link>
        </div>
    )
}

export default Postcard

//here just make card where we show the post as a form of a postcard