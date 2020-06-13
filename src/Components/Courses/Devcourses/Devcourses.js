import React from "react";

import "./Devcourses.css";

const Devcourses = ({ title, person, subtitle, year, url, text }) => {
  return (
    <div className="courses">
      <h1 className="textCourses">{title}</h1>

      <h3 className="textCourses">
        {person}
        {subtitle}
        {year}
      </h3>

      <p className="textCourses">{text}</p>

      <a href={url} className="buttonCourse">
        See Course
      </a>
    </div>
  );
};

export default Devcourses;
