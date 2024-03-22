import React from 'react';
import './pro.css';
import Plates from './images/plates.jpg';
import Bowls from './images/bowls.jpg';
import Cups from './images/cups1.jpg';
import Spoons from './images/spoons1.jpg';


export default function coins() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-2 py-28 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Plates}/>
              </div>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PLATE</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Plates 10x10</h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Bowls}/>
              </div>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">BOWL</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Bowls 200ml</h2>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Cups}/>
              </div>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CUP</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Cups 200ml</h2>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Spoons}/>
              </div>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">SPOON</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Spoons & Forks</h2>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
