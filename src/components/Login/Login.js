import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
        console.log(data)
    };
    const submitWithGoogle = () => {
        signInWithGoogle()
    }
    if (user || Guser) {
        navigate('/')
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content">
                    <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email"
                                        {...register("email", { required: true })}
                                        class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        {...register("password", { required: true })}
                                        class="input input-bordered" />
                                    <label class="label">
                                        <Link to='/signup' class="label-text-alt link link-hover">New to herbal? please SignUp</Link>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary text-white">Login</button>
                                </div>
                            </form>
                            <div class="form-control mt-6">
                                <button onClick={submitWithGoogle} class="btn btn-primary bg-green-500 text-white">Login with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;