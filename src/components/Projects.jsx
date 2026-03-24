import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Pagination, Autoplay, Navigation, EffectCoverflow } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary relative overflow-hidden py-14" id="projects">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primaryLinear/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primaryLinear/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 -z-10"></div>

      <div className="md:container px-5 min-h-screen flex flex-col items-center">
        <div className="mb-14 text-center">
          <h2 className="title text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-dark_primary to-blue-600" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle text-gray-500 max-w-2xl mx-auto" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <div className="w-24 h-1 bg-dark_primary/20 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="w-full">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
            className="pb-24 w-full max-w-7xl mx-auto mySwiper"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-[2rem] p-6 shadow-xl border border-white/50 group transition-all duration-500 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] h-[22rem] cursor-pointer shadow-lg group">
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={content.image}
                    alt={content.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark_primary/90 via-dark_primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <button
                      onClick={() => window.open(content.link)}
                      className="bg-white text-dark_primary px-8 py-3 rounded-xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 hover:bg-dark_primary hover:text-white"
                    >
                      View Live Project
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-8 px-2">
                  <div className="flex justify-between items-start">
                    <h5 className="font-bold font-Poppins text-2xl text-dark_primary group-hover:text-blue-600 transition-colors line-clamp-1">
                      {content.title}
                    </h5>
                  </div>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
                    Featured Project
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
                    <button
                      onClick={() => window.open(content.link)}
                      className="text-dark_primary font-bold hover:tracking-wider transition-all duration-300"
                    >
                      EXPLORE PROJECT →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
