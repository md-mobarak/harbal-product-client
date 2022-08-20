import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageProduct = ({ product }) => {
    const { _id, name, price, img } = product;

    const handleDelete = () => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            fetch(`https://infinite-refuge-87124.herokuapp.com/product/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Your Product is Delete')
                })
        }
    }

    return (

        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='text-xl font-bold'>PRICE{price}</p>
                <div class="card-actions justify-end">
                    <button onClick={handleDelete} class="btn btn-primary text-white bg-red-600">DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;