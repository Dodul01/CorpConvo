import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero min-h-[90vh] rounded-xl m-1" style={{ backgroundImage: 'url(https://i.ibb.co/8BqJPmb/alexandre-pellaes-6v-Ajp0psc-X0-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-bold"> Choose <span className='text-red-500'>CorpConvo</span> for Your <br /> Next Corporate Event</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn bg-red-600 border-none text-white outline-none hover:bg-red-500">Join Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[90vh] rounded-xl m-1" style={{ backgroundImage: 'url(https://i.ibb.co/q7zqfc7/chuttersnap-Q-Kdj-Kxnt-H8-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-bold">Join the <br /><span className='text-red-500'>CorpConvo</span> Experience</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn bg-red-600 border-none text-white outline-none hover:bg-red-500">Join Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[90vh] rounded-xl m-1" style={{ backgroundImage: 'url(https://i.ibb.co/SRDkH5L/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-bold">Elevate Your <br />Corporate Events</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn bg-red-600 border-none text-white outline-none hover:bg-red-500">Join Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[90vh] rounded-xl m-1" style={{ backgroundImage: 'url(https://i.ibb.co/ypwsNjh/evangeline-shaw-Ci-O3e-BBxq-JA-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-bold">Where Ideas Gather Event Magic</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn bg-red-600 border-none text-white outline-none hover:bg-red-500">Join Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home
