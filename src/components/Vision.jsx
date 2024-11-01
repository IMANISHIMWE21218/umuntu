import React from 'react';
import v1 from "../assets/v1.png"
import v2 from "../assets/v2.png"
import v3 from "../assets/v3.png"

const Vision = () => {

  const  contentsData = [{
                            id: 1,
                            title: "School Fee Assistance",
                            description: "We provide financial assistance to cover school fees for less fortunate children in primary and secondary schools. This initiative ensures that financial constraints do not hinder a child’s access to education. In the future, we aim to extend this assistance to include disabled students.",
                            
                        },
                        {
                            id: 2,
                            title: "Educational Materials",
                            description: "In addition to school fees, we also provide necessary educational materials such as textbooks, stationery, uniforms, and other school supplies. These resources are essential for students to fully participate in their education.",
                            
                        },
                        {
                            id: 3,
                            title: "Tutoring and Mentoring",
                            description: "Recognizing that some students may need additional academic support, we organize tutoring sessions to help them with their studies. We also have a mentoring program where volunteers provide guidance and support to students, helping them navigate their educational journey.",
                            image:v3

                        },
                        {
                            id: 4,
                            title: "Scholarship Program",
                            description: "For outstanding students who show great potential, we offer scholarships that cover not only their school fees but also other educational expenses. This encourages them to excel in their studies and pursue higher education.",
                            image:v3

                        },
                        {
                            id: 5,
                            title: "Life Skills Training",
                            description: "Beyond academic education, we also provide life skills training to equip students with essential skills such as communication, problem-solving, and leadership. These skills are crucial for their personal development and future employability.",
                            image:v3

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
