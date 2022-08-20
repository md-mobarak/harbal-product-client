import React from 'react';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/SUPHERB JPG.jpg'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <div class="navbar bg-[#FFFFFF] py-5">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li className='mt-3'>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                            {user && <li>
                                <NavLink to='/addProduct'>Add Product</NavLink>
                            </li>}
                            {user && <li>
                                <NavLink to='/manageProduct'>Manage Product</NavLink>
                            </li>}


                        </ul>
                    </div>
                    <Link to='/' class="normal-case text-xl">
                        <img className='w-full h-16' src={logo} alt="" />
                    </Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'bg-green-500 text-white font-semibold' : 'font-semibold'
                            } to='/'>HOME</NavLink>
                        </li>
                        <li className='mx-4'>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'bg-green-500 text-white font-semibold' : 'font-semibold'
                                }
                                to='/about'>ABOUT</NavLink>
                        </li>
                        <li >
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'bg-green-500 text-white font-semibold' : ' font-semibold'
                                }
                                to='/contact'>CONTACT</NavLink>
                        </li>
                        <li className='mx-4'>
                            {user && <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'bg-green-500 text-white font-semibold' : 'font-semibold'
                                }
                                to='/addProduct'>ADD PRODUCT</NavLink>}
                        </li>
                        <li>
                            {user && <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'bg-green-500 text-white font-semibold' : 'font-semibold'
                                }
                                to='/manageProduct'>MANAGE PRODUCT</NavLink>}
                        </li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <div className='flex'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-green-500' : ''
                            }
                            to='/cart'><AiOutlineShoppingCart size='25px'></AiOutlineShoppingCart></NavLink>
                        {
                            user ?
                                <NavLink to='/' className=' mx-3 text-green-500 font-semibold' onClick={logout}>Log Out</NavLink> :
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? 'text-green-500' : ''
                                    }
                                    to='/login'>
                                    <AiOutlineUser className='mx-8' size='25px'></AiOutlineUser>
                                </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;