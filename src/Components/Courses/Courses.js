import React from "react";

import "./Courses.css";

import Devcourses from "./Devcourses/Devcourses";
import dataCourses from "./Devcourses/Data/dataCourses";

const Courses = () => {
  return (
    <div className="StudiesandCourses">
      {dataCourses.map((courses) => (
        <Devcourses
          key={courses.id}
          title={courses.title}
          person={courses.person}
          subtitle={courses.subtitle}
          year={courses.year}
          url={courses.url}
          text={courses.text}
        />
      ))}
    </div>
  );
};

export default Courses;
