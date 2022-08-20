import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password, data.displayName)
        reset()
        console.log(data)
    };
    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-3xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" class="input input-bordered"
                                        {...register("displayName", { required: true })}
                                    />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        placeholder="email"
                                        {...register("email", { required: true })}
                                        class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        placeholder="password"
                                        {...register("password", { required: true })}
                                        class="input input-bordered" />
                                    <label class="label">
                                        <Link to='/login' class="label-text-alt link link-hover">Are Register?Please login</Link>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;