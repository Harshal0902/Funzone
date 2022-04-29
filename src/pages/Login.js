import React from 'react'
import firebase from 'firebase'
import { auth } from '../services/firebase'
import LoginImg from "../assets/login.svg"
import GoogleLogo from "../assets/google_logo.png"

function LogIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div className="relative">

            <div className="z-10 mt-16 bg-[#0F9B8E] md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></div>

            <div className="z-20 p-4 m-8 origin-bottom-right transform border-4 border-[#00022E] lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl bg-[#02066F]">
                <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                    <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                        <img width="600px" height="400px" src={LoginImg} alt="img" />
                    </div>

                    <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                        <h2 className="self-center mb-4 text-5xl font-bold tracking-wider text-white md:text-4xl lg:text-7xl">
                            FunZone
                        </h2>

                        <div className='grid place-items-center'>
                            <div className="w-56 h-56 my-5 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 cursor-pointer shadow-lg">
                                <div className="flex items-center justify-center h-full bg-white hover:bg-gray-100" onClick={signInWithGoogle}>
                                    <img src={GoogleLogo} alt="google" className="w-6" />
                                    <span className="ml-4 text-lg">Sign in with Google</span>
                                </div>
                            </div>
                        </div>

                        {/* <div className="relative mt-4 outline-transparent outline">
                            <input type="email" name="email" placeholder=" " className="block w-full pb-2 pl-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required />
                            <label className="absolute top-0 p-2 text-lg text-gray-200 duration-300 md:text-lg -z-1 origin-0">Email</label>
                        </div>

                        <div className="relative mt-8 outline-transparent outline">
                            <input type="password" name="password" placeholder=" " className="block w-full pb-2 pl-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required />
                            <label className="absolute top-0 p-2 text-lg text-gray-200 duration-300 md:text-lg -z-1 origin-0">Password</label>
                        </div>

                        <div className="grid justify-center grid-cols-1 gap-1 md:gap-4 mx-4 md:grid-cols-2">

                            <button type="button" className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:shadow-lg">Sign In</button>

                            <button type="button" className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:shadow-lg">Sign Up</button>
                        </div>

                        <div className="w-full flex items-center justify-center text-lg mb-4 text-white">
                            <div className="inline-flex h-1 mx-4 bg-indigo-500 rounded-full w-52"></div>
                            or
                            <div className="inline-flex h-1 mx-4 bg-indigo-500 rounded-full w-52"></div>
                        </div> */}



                    </div>
                </div>
            </div>

            <div className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-[#0F9B8E] rounded-3xl md:block hidden"></div>

        </div>
    )
}

export default LogIn
