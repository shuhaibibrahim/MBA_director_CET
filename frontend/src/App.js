import React, { useState } from "react";
import "./App.css";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Employment from "./Employment";
import Awards from "./Awards";
import Patents from "./Patents";

export default function App() {
  const personal = {
    email: "",
    fullname: "",
    dob: "",
    pob: "", //place of birth
    gender: "Male",
    nation: "",
    father: "",
    marital: "",
    mob: "",
    phone: "",
    pemail: "",
    semail: "",
    address: "",
    resspec: "",
    tr: "", //teaching/research
    cc: "", //core courses
    ec: "", //elective courses
  };

  const phd = {
    degree: "",
    title: "",
    affiliation: "",
    supervisor: "",
    university: "",
    discipline: "",
    college: "",
    startdate: "",
    submitdate: "",
    defenddate: "",
  };

  const degree = {
    name: "",
    discipline: "",
    university: "",
    startdate: "",
    enddate: "",
    division: "",
    system: "",
    marks: "",
    college: "",
    others: "",
  };

  const education = {
    phd: { ...phd },
    masters: { ...degree },
    bachelors1: { ...degree },
    bachelors2: { ...degree },
    other: { ...degree },
  };

  const empdetails = {
    employer: "",
    department: "",
    position: "",
    nature: "",
    startdate: "",
    enddate: "",
  };

  const employment = {
    prephd: { ...empdetails },
    postphd: { ...empdetails },
  };

  //final state
  const [details, setDetails] = useState({
    ...personal,
    ...education,
    ...employment,
  });

  const [formno, setformno] = useState(1);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextform = () => {
    setformno(formno + 1);
    scrollTop();
  };
  const prevform = () => {
    setformno(formno - 1);
    scrollTop();
  };

  return (
    <div className="App">
      {formno === 1 && (
        <PersonalDetails
          nextform={nextform}
          details={details}
          setDetails={setDetails}
        />
      )}
      {formno === 2 && (
        <Education
          nextform={nextform}
          prevform={prevform}
          details={details}
          setDetails={setDetails}
        />
      )}
      {formno === 3 && (
        <Employment
          nextform={nextform}
          prevform={prevform}
          details={details}
          setDetails={setDetails}
        />
      )}
      {formno === 4 && (
        <Awards
          nextform={nextform}
          prevform={prevform}
          details={details}
          setDetails={setDetails}
        />
      )}
      {formno === 5 && (
        <Patents
          nextform={nextform}
          prevform={prevform}
          details={details}
          setDetails={setDetails}
        />
      )}
    </div>
  );
}
