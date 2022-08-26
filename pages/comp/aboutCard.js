
function aboutCard(){
    return( 
        <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          about
        </p>
        <h2 className='py-4'>What’s new at TechEthio?</h2>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"  width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"  width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="mb-4">
            <div class="flex justify-center">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img class=" w-full h-96 md:h-auto object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                    <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-90 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-70 text-base mb-2">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-4">
        <div class="flex justify-center">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img class=" w-full h-96 md:h-auto object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                    <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-90 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-70 text-base mb-4">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-4">
        <div class="flex justify-center">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img class=" w-full h-96 md:h-auto object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                    <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-90 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-70 text-base mb-4">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
        </div> */}

    </div>
    
    // <div class="grid grid-cols-3 gap-4">
    //     <div class="mb-4">
    //         <div class="flex justify-center">
    //             <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    //                 <img class=" w-full h-96 md:h-auto object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    //                 <div class="p-6 flex flex-col justify-start">
    //                 <h5 class="text-gray-90 text-xl font-medium mb-2">Card title</h5>
    //                 <p class="text-gray-70 text-base mb-2">
    //                     This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    //                 </p>
    //                 <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="mb-4">
    //     <div class="flex justify-center">
    //             <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    //                 <img class=" w-full h-96 md:h-auto object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    //                 <div class="p-6 flex flex-col justify-start">
    //                 <h5 class="text-gray-90 text-xl font-medium mb-2">Card title</h5>
    //                 <p class="text-gray-70 text-base mb-4">
    //                     This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    //                 </p>
    //                 <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="mb-4">
    //     <div class="flex justify-center">
    //             <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    //                 <img class=" w-full h-96 md:h-auto object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    //                 <div class="p-6 flex flex-col justify-start">
    //                 <h5 class="text-gray-90 text-xl font-medium mb-2">Card title</h5>
    //                 <p class="text-gray-70 text-base mb-4">
    //                     This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    //                 </p>
    //                 <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    );
}

export default aboutCard;