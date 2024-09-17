import React from 'react';

import partner1 from "../assets/partner1.jpg"
const Partners = () => {

    const partners = [
        {id:1, partner_img: partner1},
        {id:2, partner_img: partner1},
        {id:3, partner_img: partner1},
        {id:4, partner_img: partner1},
        {id:5, partner_img: partner1},
         
    ]

    return (
        <div className='md:px-14 px-4 py-16 mx-w-screen-2xl items-center mx-auto'>
            < div className='text-center my-8 flex flex-col items-center'>
                <h2 className='text-3xl text-neutralDGrey font-semibold mb-8'>Our Partners</h2>
                <p className='md:w-3/4 text-base text-neutralLGrey  mb-8'>
                    We are here to help thos in need with our resources to make a better world here to help thos in need with our resources to make a better world
                </p>
                {/* partners logos */}
                <div className=' grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 mb-8 mx-auto '>
                    {
                        partners.map((items) => 
                             <div key={items.id}> 
                             <img className='w-auto h-[55px]' src={items.partner_img} alt=""  />
                            </div>
                        )
                    }
                </div>

            </div>
         
        </div>
    );
}

export default Partners