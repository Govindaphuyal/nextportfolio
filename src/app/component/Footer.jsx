import React from 'react'

const Footer = () => {
  return (
    <div>

<div className="bg-black">
    <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
            <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
            <ul>
                <li className="my-2">
                    <a className="text-white hover:text-indigo-600" href="#">Home</a>
                </li>
                <li className="my-2">
                    <a className="text-white hover:text-indigo-600" href="#">About</a>
                </li>
                <li className="my-2">
                    <a className="text-white hover:text-indigo-600" href="#">Service</a>
                </li>
                <li className="my-2">
                    <a className="text-white hover:text-indigo-600" href="#">Project</a>
                </li>
            </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
            <h3 className="font-bold text-xl text-indigo-600 mb-4">Componentity</h3>
            <p className="text-white  text-sm mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
            <ul>
                <li className="my-2">
                    <a className="text-white hover:text-indigo-600" href="#">Samakhusi,Kathmandu</a>
                </li>
                <li className="my-2">
                    <a className="text-white hover:text-indigo-600" href="#">govindaphuyal40@gmail.com</a>
                </li>
            </ul>
        </div>
    </div>
    
        <div className="mx-[40%]">© Copyright 2023. All Rights Reserved.</div>
    </div>
</div>
    
  )
}

export default Footer