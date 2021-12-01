import React, { useState, useEffect } from "react";

import { Box, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

import axiosClient from "../config/axios";
import Project from "../components/Project";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

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
            sx={{ color: "white", mx: "auto", mt: 5 }}
          />
        </Box>
      ) : (
        <Swiper
          effect={"coverflow"}
          slidesPerView={2}
          spaceBetween={0}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={pagination}
          loop={true}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Project key={project.id} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default SwiperContent;
