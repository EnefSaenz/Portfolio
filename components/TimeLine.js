import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimeLine = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2+ years
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "blue" }} />
          <TimelineDot variant="outlined" sx={{ borderColor: "blue" }}>
            <FontAwesomeIcon icon={["fas", "phone-alt"]} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "blue" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Telcel
          </Typography>
          <Typography>
            Developing web applications for reaching project's objectives using
            technologies like NodeJS, ReactJS and Java Spring Framework
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          6 months
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "red" }} />
          <TimelineDot variant="outlined" sx={{ borderColor: "red" }}>
            <FontAwesomeIcon icon={["fas", "credit-card"]} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "red" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Claro Pagos
          </Typography>
          <Typography>
            As a functional analyst in a SCRUM stack, on charge of get
            customer's requirements and transform it in processes to be
            interpreted by the development team
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          6 months
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "purple" }} />
          <TimelineDot variant="outlined" sx={{ borderColor: "purple" }}>
            <FontAwesomeIcon icon={["fas", "project-diagram"]} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "purple" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Accenture
          </Typography>
          <Typography>
            Being part of a PMO, taking control of risks scheduled for
            communicate it to stakeholders and register each accomplished
            objective
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLine;
