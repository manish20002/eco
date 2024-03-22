import React from 'react';
import './homes.css';
import img1 from './images/ecologo.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

export default function home() {
  return (
    <section id='home'>
      <div className="body">
        <div className="header_t">
          <h1> Welcome To EcofestEssentials</h1>
          <h2>"Savor the moment, Preserve the planet"</h2>
          <h3>"An sustainable and eco-friendly dining solutions for conscious consumers."</h3>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-2 py-12 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={img1}/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={img2}/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={img3}/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </section>
  )
}
