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
import SwiperCore, { EffectCoverflow, Keyboard, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Keyboard]);

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
          slidesPerView={2}
          spaceBetween={0}
          grabCursor={true}
          centeredSlides={true}
          pagination={pagination}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 1,
          }}
          breakpoints={{
            600: {
              coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                scale: 1,
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
