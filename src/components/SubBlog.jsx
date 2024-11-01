import React from 'react'

const SubBlog = () => {

    const blogData = [ {
            id:1,
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            image:"https://picsum.photos/200/300"
            },

            {
                id:2,
                title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                image:"https://picsum.photos/200/300"
            },

            {
                id:3,
                title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",  
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                image:"https://picsum.photos/200/300"
            }
        
            ]


    return (


        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver my-8 py-16'>
            <div className='text-center md: w-1/2 mx-auto'>
                <h2 className='text-3xl text-neutralDGrey font-semibold mb-4'>Our Activities</h2>
                <p className='text-base text-neutralLGrey mb-8 md:w-3/4 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

            </div>
         {/* Blog blocks */}
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-between'>
        { 
            blogData.map((blog) => 
            <div key={blog.id} className="relative mb-16 cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                    src={blog.image} 
                    alt="" 
                    className='hover:scale-105 transition-transform duration-300 w-full h-64 object-cover rounded-t-lg'
                />
                </div>
                
                <div className='text-center px-4 py-6 bg-white shadow-lg rounded-lg md:w-4/5 mx-auto -mt-10 relative z-10'>
                <h3 className='text-lg font-semibold text-neutralDGrey mb-2'>{blog.title}</h3>
                <p className='text-sm text-neutralLGrey mb-4'>{blog.description}</p>

                <div className='flex items-center justify-center gap-4'>
                    <a href="/" className='font-semibold text-brandPrimary hover:text-neutral-700 flex items-center'>
                    Readmore
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='17'
                        height='11'
                        viewBox='0 0 17 11'
                        fill='none'
                        className='inline-block ml-2'
                    >
                        <path
                        d='M1 5.5h14M11.5 1l4 4.5-4 4.5'
                        stroke='#000'
                        />
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            )
        }
</div>

        </div>
    )
}

export default SubBlog
