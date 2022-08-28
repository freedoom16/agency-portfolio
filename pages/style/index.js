import React from 'react'

export default function index() {
  return (
//     <div>
//         <div class="carousel w-full">
//   <div id="slide1" class="carousel-item relative w-full">
//     <img src="https://placeimg.com/800/200/arch" class="w-full" />
//     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" class="btn btn-circle">❮</a> 
//       <a href="#slide2" class="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" class="carousel-item relative w-full">
//     <img src="https://placeimg.com/800/200/arch" class="w-full" />
//     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" class="btn btn-circle">❮</a> 
//       <a href="#slide3" class="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" class="carousel-item relative w-full">
//     <img src="https://placeimg.com/800/200/arch" class="w-full" />
//     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" class="btn btn-circle">❮</a> 
//       <a href="#slide4" class="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide4" class="carousel-item relative w-full">
//     <img src="https://placeimg.com/800/200/arch" class="w-full" />
//     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" class="btn btn-circle">❮</a> 
//       <a href="#slide1" class="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//     </div>

<div
id="carouselDarkVariant"
class="carousel slide carousel-fade carousel-dark relative"
data-bs-ride="carousel"
>

<div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
  <button
    data-bs-target="#carouselDarkVariant"
    data-bs-slide-to="0"
    class="active"
    aria-current="true"
    aria-label="Slide 1"
  ></button>
  <button
    data-bs-target="#carouselDarkVariant"
    data-bs-slide-to="1"
    aria-label="Slide 1"
  ></button>
  <button
    data-bs-target="#carouselDarkVariant"
    data-bs-slide-to="2"
    aria-label="Slide 1"
  ></button>
</div>


<div class="carousel-inner relative w-full overflow-hidden">

  <div class="carousel-item active relative float-left w-full">
    <img
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
      class="block w-full"
      alt="Motorbike Smoke"
    />
    <div class="carousel-caption hidden md:block absolute text-center">
      <h5 class="text-xl">First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </div>
  </div>


  <div class="carousel-item relative float-left w-full">
    <img
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
      class="block w-full"
      alt="Mountaintop"
    />
    <div class="carousel-caption hidden md:block absolute text-center">
      <h5 class="text-xl">Second slide label</h5>
      <p>Some representative placeholder content for the second slide.</p>
    </div>
  </div>

  <div class="carousel-item relative float-left w-full">
    <img
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
      class="block w-full"
      alt="Woman Reading a Book"
    />
    <div class="carousel-caption hidden md:block absolute text-center">
      <h5 class="text-xl">Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p>
    </div>
  </div>
</div>

<button
  class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
  type="button"
  data-bs-target="#carouselDarkVariant"
  data-bs-slide="prev"
>
  <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button
  class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
  type="button"
  data-bs-target="#carouselDarkVariant"
  data-bs-slide="next"
>
  <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
  )
}
