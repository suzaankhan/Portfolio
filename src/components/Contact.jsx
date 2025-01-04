import React from 'react';

const Contact = () => {

    return(
        <div name="contact" className='w-full text-gray-300 h-screen  '>
            <div className='max-w-[1000px] mx-auto p-4'>
            <form method='POST' action="https://getform.io/f/allldyva" className='flex flex-col'>
                <div className='pb-2'>
                    <p className='border-b-4 border-pink-600 text-4xl inline-block'>Contact</p>
                    <p className='py-2'>You can contact me through the form below 
                    </p>
                </div>
                <input className='p-2 bg-gray-200 text-gray-800' type="text" placeholder='Name' name="name" />
                <input className='my-4 p-2 bg-gray-200 text-gray-800' type="email" placeholder='Email' name="email" />
                <textarea className='p-2 bg-gray-200 text-gray-800' rows={10} name="textarea" id="" placeholder='Your message' />
                <button type='submit'
                className='my-4 transition duration-300
                hover:bg-pink-600 hover:translate-y-1 p-2 border-2'>Let's connect</button>
            </form>
            </div>
        </div>
    )
};
 export default Contact;