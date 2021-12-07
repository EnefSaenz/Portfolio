import React, { useState, useEffect } from "react";

import { Box, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import axiosClient from "../config/axios";
import Project from "../components/Project";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { EffectCreative, Keyboard, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCreative, Pagination, Keyboard]);

const SwiperContent = () => {
  //States
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // Effect for loading projects
  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const response = await axiosClient.get("/projects");

      setProjects(response.data);
      setLoading(false);
    };

    getProjects();
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress
            size={100}
            thickness={5}
            color="secondary"
            sx={{ mx: "auto", mt: 5 }}
          />
        </Box>
      ) : (
        <Swiper
          slidesPerView={1}
          grabCursor={true}
          centeredSlides={true}
          pagination={pagination}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          effect={"creative"}
          creativeEffect={{
            limitProgress: 2,
            prev: {
              translate: ["-90%", 0, 0],
              shadow: true,
            },
            next: {
              translate: ["90%", 0, 0],
              shadow: true,
            },
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              effect: "creative",
              creativeEffect: {
                limitProgress: 2,
                prev: {
                  translate: ["-90%", 0, 0],
                  shadow: true,
                },
                next: {
                  translate: ["90%", 0, 0],
                  shadow: true,
                },
              },
            },
            900: {
              slidesPerView: 2,
              effect: "creative",
              creativeEffect: {
                limitProgress: 2,
                prev: {
                  translate: ["-90%", 0, 0],
                  rotate: [0, 30, 0],
                  shadow: true,
                },
                next: {
                  translate: ["90%", 0, 0],
                  rotate: [0, -30, 0],
                  shadow: true,
                },
              },
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              {({ isActive }) => (
                <Project
                  key={project.id}
                  project={project}
                  isActive={isActive}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default SwiperContent;
