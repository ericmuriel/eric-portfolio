import React from "react";

import "./Courses.css";

import Devcourses from "./Devcourses/Devcourses";
import dataCourses from "./Devcourses/Data/dataCourses";

const Courses = () => {
  return (
    <div>
      <div className="titleContainer">
        <h1 className="textStudies">COURSES AND STUDIES</h1>
      </div>
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
    </div>
  );
};

export default Courses;
