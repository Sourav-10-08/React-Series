import React from 'react'

export default function Card({username, btnText}) {


  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
    <img
      src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        Title
      </span>
      <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
    </div>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet
    </p>,<br />

   <button>{btnText}</button> 

  </div>
  )
}
