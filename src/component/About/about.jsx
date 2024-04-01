import React, { useEffect } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function about() {
  useEffect(() => {
    AOS.init({
      offset: 200, delay: 2, anchorPlacement: 'top-bottom', duration: 400, easing: 'ease', once: false, mirror: false,
    })
    AOS.refresh();
  },)
  return (
    <>
      <section className='ani'>
        <div data-Aos="fade-up">
          <h1>Our Team</h1>
          <p className='pa'>Our dedicated team at <b className='baa'> Ecofeastessentials</b> combines expertise in sustainability and culinary innovation to create environmentally-friendly dining experiences. With a passion for reducing waste and promoting eco-conscious living, we strive to make a positive impact on the planet.</p>
        </div>
      </section>

      <br />

      <section className='ani'>
        <div data-aos="fade-up">
          <h1 className='title'>Our company misson and values</h1>
          <h2 className='miss'><b>Mission:</b></h2>
          <p className='miss_pa'>
            At Ecofeastessentials, our mission is to inspire and empower individuals to make sustainable choices in their kitchen and dining experiences. We strive to provide access to high-quality, eco-friendly products that promote environmental stewardship and reduce waste. Through our curated selection and commitment to education, we aim to foster a community of conscious consumers dedicated to creating a healthier planet for future generations.
            <br />
          </p>
        </div>
      </section>

      <br />

      <section className='ani'>

        <ul className='ani'>
          <div className='title_V' data-aos="fade-up">
            <h1><b>Values:</b></h1>
            <li className='value_li'>
              <h3 className='about_t'><b>Sustainability:</b></h3>
              <p className='value_pa' >We are dedicated to offering products that prioritize sustainability,
                from the materials they're made of to their end-of-life disposal.
                We believe in reducing our ecological footprint and promoting practices that preserve natural resources.
              </p>
            </li>
          </div>

          <br />

          <li className='ani' data-aos="fade-up-right">
            <h3 className='about_t'>
              <b className='title_val'>Quality:</b>
            </h3>
            <p className='value_pa'>We value quality craftsmanship and design,
              ensuring that our products are durable, functional, and reliable for everyday use.
              By investing in well-made items, we encourage a mindset of long-term sustainability and reduced consumption.
            </p>
          </li>

          <br />

          <li className='ani' data-aos="fade-up-right">
            <h3 className='about_t'><b className='title_val'>Transparency:</b></h3>
            <p className='value_pa'>
              We believe in transparency throughout our supply chain,
              from sourcing materials to manufacturing processes.
              We strive to provide our customers with clear information about the environmental impact of our products, empowering them to make informed purchasing decisions.
            </p>
          </li>

          <br />

          <li className='ani' data-aos="fade-up-right">
            <h3 className='about_t'><b className='title_val'>Community:</b></h3>
            <p className='value_pa'>We aim to build a community of like-minded individuals who share our passion for sustainability and conscious living. Through educational resources, collaborative initiatives, and engagement with our customers, we seek to foster a supportive network committed to positive environmental change.
            </p>
          </li>

          <br />

          <li className='ani' data-aos="fade-up-right">
            <h3 className='about_t'><b className='title_val'>Innovation:</b></h3>
            <p className='value_pa'>We are committed to innovation and continuous improvement in our quest for more sustainable solutions. By staying informed about advancements in eco-friendly technology and materials, we aim to offer cutting-edge products that align with our values and meet the evolving needs of our customers.
            </p>
          </li>
        </ul>
        <br />
      </section >

      <div>
        <a href="https://drive.google.com/file/d/1I_RTzsYTSksNeTQAthHBMYiIqiXtGuN4/view?usp=sharing">
          <button class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Presentation</button>
        </a>
        <a href="https://docs.google.com/document/d/1jisY8tgtFkf1b19VbSkkEqg4c_gk_aJB/edit?usp=sharing&ouid=111268135710549834941&rtpof=true&sd=true" className='btn2'>
          <button class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5 m-2">Business Analysis</button>
        </a>
      </div>
    </>
  )
}
