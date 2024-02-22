import React from 'react'
import "./slider.scss";

export const Slider = () => {
  const videos = [
    {
    src: "./videos/vid1.mp4",
    title: "عنوان هذا الفديو",
    desc:"وصف هذا الفديو"
  },
    {
    src: "./videos/vid2.mp4",
    title: "عنوان هذا الفديو",
    desc:"وصف هذا الفديو"
  },
    {
    src: "./videos/vid3.mp4",
    title: "عنوان هذا الفديو",
    desc:"وصف هذا الفديو"
  },
    {
    src: "./videos/vid4.mp4",
    title: "عنوان هذا الفديو",
    desc:"وصف هذا الفديو"
  },
  ]
  return (
      <div className='Slider' >
     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">    
    {videos.map((vid)=>(<div className={vid.src==="./videos/vid1.mp4"?"carousel-item active":"carousel-item"}>
      <video src={vid.src} autoPlay={true} loop class="d-block w-100 vid" alt={ vid.title} />
      <div class="carousel-caption d-none d-md-block">
        <h3>{ vid.title}</h3>
        <p>{ vid.desc}</p>
      </div>
    </div>))}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
