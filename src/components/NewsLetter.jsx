import React  from "react";

const NewsLetter = () => {
    return (
<div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-white my-12 py-16">
    <div className="text-center">
        <h2 className='text-3xl text-neutral-800 font-semibold mb-6 leading-relaxed'>
            Pellentesque suscipit fringilla libero eu
        </h2>

        <p className="text-neutralGrey mb-8 md:w-3/4 mx-auto">
            We are here to assist with resources to create a better world. Reach out to learn more about our services.
        </p>

        <div className="flex justify-center items-center gap-4 mt-6">
            <button className="btn-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center hover:bg-brandPrimary-dark transition-all duration-300 shadow-lg">
                Contact Us
                <svg className="ml-2" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                    <path d="M14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978H3.756c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" />
                </svg>
            </button>
        </div>
    </div>
</div>


    )}

export default NewsLetter

