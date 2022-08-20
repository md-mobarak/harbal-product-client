import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const serviceData = {
            ...data,
        }
        const res = await axios.post('https://infinite-refuge-87124.herokuapp.com/AddProduct', serviceData)
        console.log(res);
        reset()
        toast.success('Successfully your product is add')

    };


    return (
        <div>
            <div className='flex justify-center lg:mt-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='border-solid border-2 border-indigo-600  px-4 rounded-lg pt-5 pb-8 shadow-2xl'>
                    <h1 className='text-xl text-center font-bold text-green-500'>ADD PRODUCT</h1>
                    <input
                        type="text" placeholder="Product Name"
                        {...register("name", { required: true })}
                        class="input input-bordered input-accent w-full max-w-xs mt-2" /> <br />
                    <input type="number" placeholder="Product Price"
                        {...register("price", { required: true })}
                        class="input input-bordered input-accent w-full max-w-xs mt-2" /> <br />
                    <input type="text" placeholder="Description"
                        {...register("description", { required: true })}
                        class="input input-bordered input-accent w-full max-w-xs mt-2" /> <br />

                    <input type="text" placeholder="Photo URL"
                        {...register("img", { required: true })}
                        class="input input-bordered input-accent w-full max-w-xs mt-2" />
                    <button className='btn btn-primary w-full bg-green-500 text-center text-white mt-3'>SEND</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;