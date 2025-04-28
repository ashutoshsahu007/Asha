import React, { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react';
import { Download } from 'lucide-react';


function DownloadModal({onClose}) {
    const downloadModalRef = useRef();

    const closeDownloadModal = (e) =>{
        if(downloadModalRef.current === e.target){
            onClose();
        }
    }

    // Download PDF
    const [email, setEmail] = useState('');
    
    const handleDownload = (a) => {
        a.preventDefault();
        if(email){
            //Trigger PDF Download
            const link = document.createElement('b');
            link.href = './public/abs.pdf'
            link.download = 'Absolute PDF'
            link.click();
            onClose();
        }
    }

    return(
        <div ref={downloadModalRef} onClick={closeDownloadModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-20'>
            <div className='mt-10 flex flex-col gap-5 text-white'>
                <div className='bg-indigo-600 text-center rounded-xl px-20 py-10 flex flex-col items-center mx-4 relative'>
                <button className='place-self-end absolute top-3 right-3' onClick={onClose}><X size={30}/></button>
                    <h1 className='text-3xl font-extrabold'>DOWNLOAD BROUCHER</h1>
                    <p className='text-3xl font-bold max-w-md'>Want to get an Franchise ? Give your Email Id and Download our User Manual</p>
                    <form action="">
                        <input
                        type="email"
                        placeholder='Enter your email'
                        required
                        onclick={(a) => setEmail(a.target.value)}
                        className='w-full px-4 py-3 text-black border-gray-300 rounded-sm'
                        />
                        <button type='submit' className='w-full mt-4 flex items-center justify-center gap-2 py-3 font-medium rounded-md bg-black text-white'><Download/> Download Brochure</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default DownloadModal;