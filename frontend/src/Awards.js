import React, { useState } from "react";

function Awards(props) {
  const [awards, setAwards] = useState([{ award: "", org: "", year: "" }]);

  const [thesis, setThesis] = useState([
    { studentname: "", title: "", supervisor: "", year: "" },
  ]);

  const [projects1, setProjects1] = useState([
    { title: "", sponsor: "", years: "", amount: "" },
  ]);

  const [projects2, setProjects2] = useState([
    { title: "", sponsor: "", years: "", amount: "" },
  ]);

  const [projects3, setProjects3] = useState([
    { title: "", sponsor: "", years: "", amount: "" },
  ]);

  const [projects4, setProjects4] = useState([
    { title: "", sponsor: "", years: "", amount: "" },
  ]);

  const [projects5, setProjects5] = useState([
    { title: "", sponsor: "", years: "", amount: "" },
  ]);

  const addProject1 = (e) => {
    e.preventDefault();
    setProjects1([
      ...projects1,
      { title: "", sponsor: "", years: "", amount: "" },
    ]);
  };

  const addProject2 = (e) => {
    e.preventDefault();
    setProjects2([
      ...projects2,
      { title: "", sponsor: "", years: "", amount: "" },
    ]);
  };

  const addProject3 = (e) => {
    e.preventDefault();
    setProjects3([
      ...projects3,
      { title: "", sponsor: "", years: "", amount: "" },
    ]);
  };

  const addProject4 = (e) => {
    e.preventDefault();
    setProjects4([
      ...projects4,
      { title: "", sponsor: "", years: "", amount: "" },
    ]);
  };

  const addProject5 = (e) => {
    e.preventDefault();
    setProjects5([
      ...projects5,
      { title: "", sponsor: "", years: "", amount: "" },
    ]);
  };

  const addAward = (e) => {
    e.preventDefault();
    setAwards([...awards, { award: "", org: "", year: "" }]);
  };

  const addThesis = (e) => {
    e.preventDefault();
    setThesis([
      ...thesis,
      { studentname: "", title: "", supervisor: "", year: "" },
    ]);
  };

  const saveInfoNext = (e) => {
    e.preventDefault();
    props.nextform();
  };

  const goPrev = (e) => {
    e.preventDefault();
    props.prevform();
  };

  return (
    <div>
      <form>
        <h3 className="font-bold my-5 text-xl text-red-700">
          Awards, Thesis & R&D
        </h3>
        <h2 className="font-bold my-3">
          Honours, Awards etc.(Please provide these details if it is relevant to
          you)
        </h2>
        <div className="transition duration-500 ease-in-out">
          {awards.map((item) => {
            return (
              <div className="grid gap-3 mb-7">
                <div className="form-field">
                  <label htmlFor="">Award Title</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Organization</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Year of Award</label>
                  <input type="text" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={addAward}
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded"
          >
            Add Another
          </button>
        </div>

        <h2 className="font-bold my-3">
          Details of PhD/MTech/MPhil thesis supervised
        </h2>
        <h2 className="font-bold text-sm my-3">
          Details of PhD thesis supervised (completed only)
        </h2>
        <div>
          <label htmlFor="">
            No. of Ph.D. thesis supervised singly (defended successfully)
          </label>
          <input className="w-20 ml-5" type="text" />
        </div>
        <div>
          <label htmlFor="">
            No. of Ph.D. thesis supervised jointly (defended successfully)
          </label>
          <input className="w-20 ml-5" type="text" />
        </div>
        <div>
          {thesis.map((item) => {
            return (
              <div className="grid gap-3 mb-7">
                <div className="form-field">
                  <label htmlFor="">Student Name</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Thesis Title</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Supervisor</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Year Successfully Defended</label>
                  <input type="text" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button
            onClick={addThesis}
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded"
          >
            Add Another
          </button>
        </div>
        <h2 className="font-bold text-sm my-3">
          M.Tech, MPhil, MTech, MBA thesis supervised (completed only)
        </h2>
        <div>
          <label htmlFor="">
            No.of MTech/M.Phil/ MBA thesis supervised (completed and defended
            successfully)
          </label>
          <input className="w-20 ml-5" type="text" />
        </div>
        <h2 className="font-bold text-sm my-3">
          Details of Industry or Government Sponsored R&D/Consulting projects
          (Please provide these details if it is relevant to you)
        </h2>
        <h2 className="font-bold text-sm my-3">
          Details of sponsored R&D projects (completed, and as Principal
          Investigator)
        </h2>
        <div>
          {projects1.map((item) => {
            return (
              <div className="grid gap-3 mb-7">
                <div className="form-field">
                  <label htmlFor="">Title</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Sponsor</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Duration (Years)</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Grant Amount in Rs.</label>
                  <input type="text" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button
            onClick={addProject1}
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded"
          >
            Add Another
          </button>
        </div>

        <h2 className="font-bold text-sm my-3">
          Details of sponsored R&D projects (in-progress and as Principal
          Investigator)
        </h2>
        <div>
          {projects2.map((item) => {
            return (
              <div className="grid gap-3 mb-7">
                <div className="form-field">
                  <label htmlFor="">Title</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Sponsor</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Duration (Years)</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Grant Amount in Rs.</label>
                  <input type="text" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button
            onClick={addProject2}
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded"
          >
            Add Another
          </button>
        </div>

        <h2 className="font-bold text-sm my-3">
          Details of sponsored R&D projects (Completed and as Co-Principal
          Investigator)
        </h2>
        <div>
          {projects3.map((item) => {
            return (
              <div className="grid gap-3 mb-7">
                <div className="form-field">
                  <label htmlFor="">Title</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Sponsor</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Duration (Years)</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Grant Amount in Rs.</label>
                  <input type="text" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button
            onClick={addProject3}
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded"
          >
            Add Another
          </button>
        </div>

        <h2 className="font-bold text-sm my-3">
          Details of sponsored R&D projects (In-progress and as Co-Principal
          Investigator)
        </h2>
        <div>
          {projects4.map((item) => {
            return (
              <div className="grid gap-3 mb-7">
                <div className="form-field">
                  <label htmlFor="">Title</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Sponsor</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Duration (Years)</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Grant Amount in Rs.</label>
                  <input type="text" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button
            onClick={addProject4}
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded"
          >
            Add Another
          </button>
        </div>

        <h2 className="font-bold text-sm my-3">
          Details of industry-or government-sponsored consulting assignments
          completed
        </h2>
        <div>
          {projects5.map((item) => {
            return (
              <div className="grid gap-3 mb-7">
                <div className="form-field">
                  <label htmlFor="">Title</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Sponsor</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Duration (Years)</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Grant Amount in Rs.</label>
                  <input type="text" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button
            onClick={addProject5}
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded"
          >
            Add Another
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={goPrev}
            className="bg-blue-500 text-white w-20 my-5 p-1 rounded"
          >
            Prev
          </button>
          <button
            onClick={saveInfoNext}
            className="bg-green-700 text-white w-20 my-5 p-1 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Awards;
