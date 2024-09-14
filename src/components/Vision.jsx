import React from 'react';

const Vision = () => {

  const  contentsData = [{
                            id: 1,
                            title: "Vision",
                            description: "we are here to help thos in need with our resources to make a better world",
                            image:"src/assets/v1.png"

                        },
                        {
                            id: 2,
                            title: "Mission",
                            description: "we are here to help thos in need with our resources to make a better world",
                            image:"src/assets/v2.png"

                        },
                        {
                            id: 3,
                            title: "Motto",
                            description: "we are here to help thos in need with our resources to make a better world",
                            image:"src/assets/v3.png"

                        }]
                     
    return (
        <div className='md:px-14 px-4 py-16 mx-w-screen-2xl mx-auto'>

            {/* Vision , header and description */}
           <div className='mt-20 md:w-1/2 mx-auto text-center'>
           <h2 className='text-3xl text-neutralDGrey font-semibold mb-4'>Our Vision, mission and motto</h2>
           <p className='text-base text-neutralGrey'>This is for all of us. To guide us and help us. to underdand why we to what we do</p>
           </div>

           {/* Vision , mission cards */}
            
           <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-8'>
              {
                contentsData.map(item => <div key={item.id} className='px-4 py-8 text-center md:w-[300px] mx-auto
                md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
                hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full'>
                    <div> 
                      <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={item.image} alt="" /></div> 
                      <div><h3 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{item.title}</h3>
                      <p className='text-base text-neutralGrey'>{item.description}</p></div>  
                    </div>
                 </div>) 
              }
           </div>

        </div>
    );
};

export default Vision