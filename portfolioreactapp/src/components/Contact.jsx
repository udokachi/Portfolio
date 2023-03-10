
import React from 'react'

const Contact = () => {
  return (
    <div  name='contact' className='w-full h-screen bg-[#1d2a3c] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/69c5b490-4f56-485b-8abe-4a1412187a4f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send an email - chidinma242@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' class="rounded"/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'  />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' class="rounded"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact