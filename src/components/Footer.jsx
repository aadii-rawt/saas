import React from 'react'

function Footer() {
    return (
        <div className='pt-28'>
            <div>
                <h1 className='font-ubuntu text-5xl text-center'>See if Designjoy is right <br /> for you. (It totally is.)</h1>
                <p className='text-center py-2 pb-10'>Get a guided tour through Designjoy, and find out <br /> how you and your team can change the way you  <br /> source design, forever.</p>

                <div className='flex justify-center'>

                    <button class="styled-button text-center">
                        Book a call
                    </button>
                </div>

            </div>
            <div className='flex justify-center gap-40 py-5 text-gray-400'>
                <a href="">Latest Project</a>
                <a href="">Pricing</a>
                <a href="">Contact</a>
                <a href="">Client Login</a>
            </div>
            <div className='flex justify-center gap-40 py-5 text-gray-400'>
                <a href="">Get started</a>
                <a href="">Terms & conditions</a>
                <a href="">Privacy Policy</a>
            </div>
        </div>
    )
}

export default Footer