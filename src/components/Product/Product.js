import React from 'react';

const Product = ({usr}) => {
    const{image,name,dec,time} = usr;
    return (
        <div>
            <div className=' bg-white p-5 h-[580px] m-3 rounded-lg shadow-lg'>
                <img className=' w-[400px] h-[280px] rounded-lg mb-3' src={image} alt="" />
                <h2 className='mb-2'> <strong>{name}</strong></h2>
                <p className='mb-2 text-gray-400'>{dec}</p>
                <p>Time required : <strong>{time}s</strong></p>
                <button className=' bottom-0 bg-sky-500 py-2 rounded-lg text-white mx-auto w-full mt-4 mb-3 hover:bg-green-500'>Add to List</button>
            </div>
        </div>
    );
};

export default Product;