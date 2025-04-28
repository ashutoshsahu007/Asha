import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';

function ContactModal({onClose}){

    const contactModalRef = useRef();
    
    const closeContactModal = (e) => {
        if(contactModalRef.current === e.target){
            onClose();
        }
    }

    // Client Side Form Validation Simple Javascript Code Below - My API —> 85c7ad1b-7f33-401b-b9e8-810e8606e0e7
    
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var phoneError = document.getElementById('phone-error');
    var addressError = document.getElementById('address-error');
    var submitError = document.getElementById('submit-error');

    function validateName(){
        var name = document.getElementById('name').value;
        if(name.length == 0){
            nameError.innerHTML = "Name is Required"
        }
    }



    return(
        <div ref={contactModalRef} onClick={closeContactModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50'>
            <div className='w-full max-w-md h-auto mx-auto mt-10 flex flex-col gap-5 text-white'>
                <div className='bg-white shadow-xl text-center rounded-xl px-8 py-10 flex flex-col items-center mx-4 relative'>
                    <button className='place-self-end absolute top-3 right-3 text-black' onClick={onClose}>
                    <X size={30}/>
                    </button>
                    <h2 style={{color: "var(--darkpink)"}} className='text-xl font-medium mb-4'>BOOK AN APPOINTMENT</h2>
                                        <form action='https://api.web3forms.com/submit' method='POST' className='w-full'>
                                            {/* Mail Use : drwaseemandrabi@gmail.com — API Key is : cd283d6c-9f9e-49b3-9c6d-0bb8c66b82c9 */}
                                            <input type="hidden" name="access_key" value="cd283d6c-9f9e-49b3-9c6d-0bb8c66b82c9" />
                                            <input type="hidden" name="Query Type" value="Treatment Enquiry"/>
                                            <div className='relative'>
                                                <input
                                                type="text"
                                                id="name"
                                                name="Name"
                                                placeholder='Enter Your Name'
                                                required
                                                className='w-full px-4 py-3 my-2 text-black bg-gray-50 rounded-full'
                                                />
                                                <span id="name-error" className='text-green-600 absolute bottom-5 right-4'></span>
                                            </div>
                                            <div className='relative'>
                                                <input
                                                type="email"
                                                id="email"
                                                name="Email"
                                                placeholder='Enter Your Email'
                                                required
                                                className='w-full px-4 py-3 my-2 text-black bg-gray-50 rounded-full'
                                                />
                                                <span id="email-error" className='text-green-600 absolute bottom-5 right-4'></span>
                                            </div>
                                            <div className='relative'>
                                                <input
                                                type="tel"
                                                id="phone"
                                                name="Phone"
                                                placeholder='Enter Your Phone Number'
                                                required
                                                className='w-full px-4 py-3 my-2 text-black bg-gray-50 rounded-full'
                                                />
                                                <span id="phone-error" className='text-green-600 absolute bottom-5 right-4'></span>
                                            </div>
                                            
                                            
                                            <div className='relative'>
                                                <select
                                                    id="treatment"
                                                    name="Treatment"
                                                    required
                                                    className='w-full px-4 py-3 my-2 text-black bg-gray-50 rounded-full'
                                                >
                                                    <option value="" disabled selected>Select Treatment</option>
                                                    <option value="IVF">IVF Treatment</option>
                                                    <option value="IUI">IUI Treatment</option>
                                                    <option value="Consultation">General Consultation</option>
                                                </select>
                                                <span id="treatment-error" className='text-green-600 absolute bottom-5 right-4'></span>
                                            </div>
                    
                                            <button type='submit' style={{backgroundColor: "var(--darkpink)"}} className='w-full mt-4 flex items-center justify-center gap-2 py-3 font-normal text-md rounded-md text-white'>
                                                Send Enquiry
                                            </button>
                                            <span id="submit-error" className='text-red-600'></span>
                                        </form>
                </div>
            </div>
        </div>
    )
}

export default ContactModal