
import v1 from "../assets/v1.png"
import v2 from "../assets/v2.png"
import v3 from "../assets/v3.png"

const Vision = () => {

  const  contentsData = [{
                            id: 1,
                            title: "Mission",
                            description: "UMUNTU NI NKUNDI’s mission is to bring together the less fortunate in society and provide them with the necessary support. They organize biannual events to pool small donations and extend help to at least five families per event.",
                            image:v1
                        },
                        {
                            id: 2,
                            title: "Vision",
                            description: "The foundation creates sustainable solutions with a long-term impact. This includes providing immediate relief and empowering individuals through education, skill development, community engagement, and partnerships for progress.",
                            image:v2
                        },
                        {
                            id: 3,
                            title: "Motto",
                            description: "Humanity is Love: Together, We Care and Share.",
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
