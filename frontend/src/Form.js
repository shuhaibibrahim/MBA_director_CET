import React, { useState } from "react";
import "./App.css";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Employment from "./Employment";
import Awards from "./Awards";
import Books from "./Books";
import Patents from "./Patents";
import Referee from "./Referee"
import TitleSVG from "./TitleSVG";
import GeneratePDF from './GeneratePDF';

export default function Form({user, logout}) {
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
        //Awards and thesis
        awards: [],
        singlySupervisedThesis: null,
        jointlySupervisedThesis: null,
        thesis: [],
        thesisSupervised: null,
        sponsoredRD1: null,
        sponsoredRD2: null,
        sponsoredRD3: null,
        sponsoredRD4: null,
        sponsoredRD5: null,
        projects1: [],
        projects2: [],
        projects3: [],
        projects4: [],
        projects5: [],
        //Books and Publications
        noBooks:0,
        books:[],
        noPublished1:0, //No.of papers published as a chapter in a book
        noPublished2:0,
        noPublished3:0,
        noPublished4:0,
        noPublished5:0,
        publications1:[],
        publications2:[],
        publications3:[],
        publications4:[],
        publications5:[],
        noPatents:0,
        noFiledPatents:0,
        patents: [],
        filedPatents: [],
        referee:[]
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
    <>
      <TitleSVG />
      
      <button
          className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2" 
          onClick={() => {logout()}}>
            Logout
      </button>

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
          <Books
            nextform={nextform}
            prevform={prevform}
            details={details}
            setDetails={setDetails}
          />
        )}
        {formno === 6 && (
          <Patents
            nextform={nextform}
            prevform={prevform}
            details={details}
            setDetails={setDetails}
          />
        )}
        {formno === 7 && (
          <Referee
            nextform={nextform}
            prevform={prevform}
            details={details}
            setDetails={setDetails}
          />
        )}

        {formno === 8 && (
          <GeneratePDF scrollTop={scrollTop} setformno={setformno} details={details} user={user}/>
        )}
      </div>

    </>
  );
}
