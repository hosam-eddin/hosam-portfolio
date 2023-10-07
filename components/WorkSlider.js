// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "YouTube",
          path: "/proj1.png",
          link: "https://u-tube-hos.vercel.app/",
        },
        {
          title: "FreshCart",
          path: "/projfresh.png",
          link: "https://e-commerce-hos.vercel.app/",
        },
        {
          title: "Portfolio",
          path: "/proj2.png",
          link: "https://daniels-portfolio-six.vercel.app/",
        },
        {
          title: "Mealify",
          path: "/projmeal.png",
          link: "https://hosam-eddin.github.io/mealify/",
        },
      ],
    },
    {
      images: [
        {
          title: "Aroma ",
          path: "/projAroma.png",
          link: "https://hosam-eddin.github.io/Aroma/",
        },
        {
          title: "Bankist ",
          path: "/projBank.png",
          link: "https://bankist-sigma.vercel.app/",
        },
        {
          title: "CRUD",
          path: "/projCRUD.png",
          link: "https://product-container.vercel.app/",
        },
        {
          title: "Real-stat",
          path: "/proj3.png",
          link: "https://realstate-locofiy.vercel.app/",
        },
      ],
    },
  ],
};

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[350px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative group rounded-lg overflow-hidden flex items-center justify-center"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image alt="" src={image.path} width={500} height={300} />
                      {/* OverLay */}
                      <Link
                        href={`${image.link}`}
                        target="blank"
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                      >
                      <div className="ps-2 absolute bottom-0 translate-y-full group-hover:-translate-y-12 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[.2rem]">
                          <div className="delay-100">{image.title}</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            LIVE
                          </div>
                          <div>
                            <RxArrowTopRight className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 " />
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
