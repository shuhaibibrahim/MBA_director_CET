import React, { useState, useEffect } from "react";

function Awards({ nextform, prevform, details, setDetails }) {
  const [award, setAward] = useState({ title: "", org: "", year: "", id: 0 });
  const [thesis, setThesis] = useState({
    studentname: "",
    title: "",
    supervisor: "",
    year: "",
    id: 0,
  });
  const [projects1, setProjects1] = useState({
    title: "",
    sponsor: "",
    years: "",
    amount: "",
    id: 0,
  });
  const [projects2, setProjects2] = useState({
    title: "",
    sponsor: "",
    years: "",
    amount: "",
    id: 0,
  });
  const [projects3, setProjects3] = useState({
    title: "",
    sponsor: "",
    years: "",
    amount: "",
    id: 0,
  });
  const [projects4, setProjects4] = useState({
    title: "",
    sponsor: "",
    years: "",
    amount: "",
    id: 0,
  });
  const [projects5, setProjects5] = useState({
    title: "",
    sponsor: "",
    years: "",
    amount: "",
    id: 0,
  });

  const [renderAward, setRenderAward] = useState(null);
  const [renderThesis, setRenderThesis] = useState(null);
  const [renderProjects1, setRenderProjects1] = useState(null);
  const [renderProjects2, setRenderProjects2] = useState(null);
  const [renderProjects3, setRenderProjects3] = useState(null);
  const [renderProjects4, setRenderProjects4] = useState(null);
  const [renderProjects5, setRenderProjects5] = useState(null);

  const removeItem = (e, name, id) => {
    e.preventDefault();
    console.log(id);
    var newDetails = { ...details };
    var newList = [...newDetails[name]];
    newList = newList.filter((item) => item.id !== id);
    newDetails[name] = newList;
    setDetails(newDetails);
  };

  const addToList = (e, name, item) => {
    e.preventDefault();
    var newDetails = { ...details };
    item.id = newDetails[name].length + 1; //generate ID
    newDetails[name].push(item);
    setDetails(newDetails);
  };

  function update(e) {
    //General function to update input
    var newdetails = { ...details };
    newdetails[e.target.name] = e.target.value;
    setDetails(newdetails);
  }

  const saveInfoNext = (e) => {
    e.preventDefault();
    nextform();
  };

  const goPrev = (e) => {
    e.preventDefault();
    prevform();
  };

  useEffect(() => {
    setRenderAward(
      details.awards.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-2 border-black mb-2 justify-between"
        >
          <div className="flex flex-col">
            <div>Award Title: {item.title}</div>
            <div>Organization: {item.org}</div>
            <div>Year of Award: {item.year}</div>
          </div>

          <button
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
            onClick={(e) => {
              removeItem(e, "awards", item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))
    );

    setRenderThesis(
      details.thesis.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-2 border-black mb-2 justify-between"
        >
          <div className="flex flex-col">
            <div>Student Name: {item.studentname}</div>
            <div>Thesis Title: {item.title}</div>
            <div>Supervisor: {item.supervisor}</div>
            <div>Year Successfully Defended:{item.year}</div>
          </div>

          <button
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
            onClick={(e) => {
              removeItem(e, "thesis", item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))
    );

    setRenderProjects1(
      details.projects1.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-2 border-black mb-2 justify-between"
        >
          <div className="flex flex-col">
            <div>Title: {item.title}</div>
            <div>Sponsor: {item.sponsor}</div>
            <div>Duration(years): {item.years}</div>
            <div>Grant Amount in Rs.: {item.amount}</div>
          </div>

          <button
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
            onClick={(e) => {
              removeItem(e, "projects1", item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))
    );

    setRenderProjects2(
      details.projects2.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-2 border-black mb-2 justify-between"
        >
          <div className="flex flex-col">
            <div>Title: {item.title}</div>
            <div>Sponsor: {item.sponsor}</div>
            <div>Duration(years): {item.years}</div>
            <div>Grant Amount in Rs.: {item.amount}</div>
          </div>

          <button
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
            onClick={(e) => {
              removeItem(e, "projects2", item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))
    );

    setRenderProjects3(
      details.projects3.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-2 border-black mb-2 justify-between"
        >
          <div className="flex flex-col">
            <div>Title: {item.title}</div>
            <div>Sponsor: {item.sponsor}</div>
            <div>Duration(years): {item.years}</div>
            <div>Grant Amount in Rs.: {item.amount}</div>
          </div>

          <button
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
            onClick={(e) => {
              removeItem(e, "projects3", item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))
    );

    setRenderProjects4(
      details.projects4.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-2 border-black mb-2 justify-between"
        >
          <div className="flex flex-col">
            <div>Title: {item.title}</div>
            <div>Sponsor: {item.sponsor}</div>
            <div>Duration(years): {item.years}</div>
            <div>Grant Amount in Rs.: {item.amount}</div>
          </div>

          <button
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
            onClick={(e) => {
              removeItem(e, "projects4", item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))
    );

    setRenderProjects5(
      details.projects5.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-2 border-black mb-2 justify-between"
        >
          <div className="flex flex-col">
            <div>Title: {item.title}</div>
            <div>Sponsor: {item.sponsor}</div>
            <div>Duration(years): {item.years}</div>
            <div>Grant Amount in Rs.: {item.amount}</div>
          </div>

          <button
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
            onClick={(e) => {
              removeItem(e, "projects5", item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))
    );
  }, [details]);

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
          {renderAward}

          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="title">Award Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={award.title}
                onChange={(e) => {
                  setAward({ ...award, title: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="org">Organization</label>
              <input
                type="text"
                id="org"
                name="org"
                value={award.org}
                onChange={(e) => {
                  setAward({ ...award, org: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="year">Year of Award</label>
              <input
                type="text"
                id="year"
                name="year"
                value={award.year}
                onChange={(e) => {
                  setAward({ ...award, year: e.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "awards", award);
              setAward({ title: "", org: "", year: "", id: 0 });
            }}
            className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
          >
            Add to list
          </button>
        </div>

        <h2 className="font-bold my-3">
          Details of PhD/MTech/MPhil thesis supervised
        </h2>
        <h2 className="font-bold text-sm my-3">
          Details of PhD thesis supervised (completed only)
        </h2>
        <div>
          <label htmlFor="singlySupervisedThesis">
            No. of Ph.D. thesis supervised singly (defended successfully)
          </label>
          <input
            className="w-20 ml-5"
            id="singlySupervisedThesis"
            name="singlySupervisedThesis"
            value={details.singlySupervisedThesis}
            onChange={update}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="jointlySupervisedThesis">
            No. of Ph.D. thesis supervised jointly (defended successfully)
          </label>
          <input
            className="w-20 ml-5"
            id="jointlySupervisedThesis"
            name="jointlySupervisedThesis"
            value={details.jointlySupervisedThesis}
            onChange={update}
            type="text"
          />
        </div>
        <div className="mt-2">
          {renderThesis}
          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="studentname">Student Name</label>
              <input
                type="text"
                id="studentname"
                name="studentname"
                value={thesis.studentname}
                onChange={(e) => {
                  setThesis({ ...thesis, studentname: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="title">Thesis Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={thesis.title}
                onChange={(e) => {
                  setThesis({ ...thesis, title: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="supervisor">Supervisor</label>
              <input
                type="text"
                id="supervisor"
                name="supervisor"
                value={thesis.supervisor}
                onChange={(e) => {
                  setThesis({ ...thesis, supervisor: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="year">Year Successfully Defended</label>
              <input
                type="text"
                id="year"
                name="year"
                value={thesis.year}
                onChange={(e) => {
                  setThesis({ ...thesis, year: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "thesis", thesis);
              setThesis({
                studentname: "",
                title: "",
                supervisor: "",
                year: "",
                id: 0,
              });
            }}
            className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
          >
            Add to List
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
          <input
            className="w-20 ml-5"
            type="text"
            id="thesisSupervised"
            name="thesisSupervised"
            onChange={update}
          />
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
          <label htmlFor="">
            No.of sponsored R&D projects (completed), with you as "Principal
            Investigator"(where each project is over Rs. 2lakhs)
          </label>
          <input
            className="w-20 ml-5"
            type="text"
            id="sponsoredRD1"
            name="sponsoredRD1"
            onChange={update}
          />
        </div>
        <div className="mt-3">
          {renderProjects1}
          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={projects1.title}
                onChange={(e) => {
                  setProjects1({ ...projects1, title: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="sponsor">Sponsor</label>
              <input
                type="text"
                id="sponsor"
                name="sponsor"
                value={projects1.sponsor}
                onChange={(e) => {
                  setProjects1({ ...projects1, sponsor: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="years">Duration (Years)</label>
              <input
                type="text"
                id="years"
                name="years"
                value={projects1.years}
                onChange={(e) => {
                  setProjects1({ ...projects1, years: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="amount">Grant Amount in Rs.</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={projects1.amount}
                onChange={(e) => {
                  setProjects1({ ...projects1, amount: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "projects1", projects1);
              setProjects1({
                title: "",
                sponsor: "",
                years: "",
                amount: "",
                id: 0,
              });
            }}
            className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
          >
            Add to List
          </button>
        </div>

        <h2 className="font-bold text-sm my-3">
          Details of sponsored R&D projects (in-progress and as Principal
          Investigator)
        </h2>
        <div>
          <label htmlFor="">
            No.of sponsored R&D projects(in-progress),with you as "Principal
            Investigator"(where each project is over Rs. 2lakhs)
          </label>
          <input
            className="w-20 ml-5"
            type="text"
            id="sponsoredRD2"
            name="sponsoredRD2"
            onChange={update}
          />
        </div>
        <div className="mt-3">
          {renderProjects2}
          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={projects2.title}
                onChange={(e) => {
                  setProjects2({ ...projects2, title: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="sponsor">Sponsor</label>
              <input
                type="text"
                id="sponsor"
                name="sponsor"
                value={projects2.sponsor}
                onChange={(e) => {
                  setProjects2({ ...projects2, sponsor: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="years">Duration (Years)</label>
              <input
                type="text"
                id="years"
                name="years"
                value={projects2.years}
                onChange={(e) => {
                  setProjects2({ ...projects2, years: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="amount">Grant Amount in Rs.</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={projects2.amount}
                onChange={(e) => {
                  setProjects2({ ...projects2, amount: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "projects2", projects2);
              setProjects2({
                title: "",
                sponsor: "",
                years: "",
                amount: "",
                id: 0,
              });
            }}
            className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded">
            Add to List
          </button>
        </div>

        <h2 className="font-bold text-sm my-3">
          Details of sponsored R&D projects (Completed and as Co-Principal
          Investigator)
        </h2>
        <div>
          <label htmlFor="">
            No.of sponsored R&D projects (completed),with you as "Co-Principal
            Investigator"(where each project isover Rs.2lakhs)
          </label>
          <input
            className="w-20 ml-5"
            type="text"
            id="sponsoredRD3"
            name="sponsoredRD3"
            onChange={update}
          />
        </div>
        <div className="mt-3">
          {renderProjects3}
          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={projects3.title}
                onChange={(e) => {
                  setProjects3({ ...projects3, title: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="sponsor">Sponsor</label>
              <input
                type="text"
                id="sponsor"
                name="sponsor"
                value={projects3.sponsor}
                onChange={(e) => {
                  setProjects3({ ...projects3, sponsor: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="years">Duration (Years)</label>
              <input
                type="text"
                id="years"
                name="years"
                value={projects3.years}
                onChange={(e) => {
                  setProjects3({ ...projects3, years: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="amount">Grant Amount in Rs.</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={projects3.amount}
                onChange={(e) => {
                  setProjects3({ ...projects3, amount: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "projects3", projects3);
              setProjects3({
                title: "",
                sponsor: "",
                years: "",
                amount: "",
                id: 0,
              });
            }}
            className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
          >
            Add to List
          </button>
        </div>

        <h2 className="font-bold text-sm my-3">
          Details of sponsored R&D projects (in-progress and as Co-Principal
          Investigator)
        </h2>
        <div>
          <label htmlFor="">
            No.of sponsored R&D projects (in-progress),with you as"Co-Principal
            Investigator" (where each project is over Rs.2lakhs)
          </label>
          <input
            className="w-20 ml-5"
            type="text"
            id="sponsoredRD4"
            name="sponsoredRD4"
            onChange={update}
          />
        </div>
        <div className="mt-3">
          {renderProjects4}
          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={projects4.title}
                onChange={(e) => {
                  setProjects4({ ...projects4, title: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="sponsor">Sponsor</label>
              <input
                type="text"
                id="sponsor"
                name="sponsor"
                value={projects4.sponsor}
                onChange={(e) => {
                  setProjects4({ ...projects4, sponsor: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="years">Duration (Years)</label>
              <input
                type="text"
                id="years"
                name="years"
                value={projects4.years}
                onChange={(e) => {
                  setProjects4({ ...projects4, years: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="amount">Grant Amount in Rs.</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={projects4.amount}
                onChange={(e) => {
                  setProjects4({ ...projects4, amount: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "projects4", projects4);
              setProjects4({
                title: "",
                sponsor: "",
                years: "",
                amount: "",
                id: 0,
              });
            }}
            className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
          >
            Add to List
          </button>
        </div>

        <h2 className="font-bold text-sm my-3">
          Details of industry-or government-sponsored consulting assignments
          completed
        </h2>
        <div>
          <label htmlFor="">
            No.of sponsored consulting projects completed, with you as "Chief
            Investigator" (where each project is over Rs.0.50lakhs)
          </label>
          <input
            className="w-20 ml-5"
            type="text"
            id="sponsoredRD5"
            name="sponsoredRD5"
            onChange={update}
          />
        </div>
        <div className="mt-3">
          {renderProjects5}
          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={projects5.title}
                onChange={(e) => {
                  setProjects5({ ...projects5, title: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="sponsor">Sponsor</label>
              <input
                type="text"
                id="sponsor"
                name="sponsor"
                value={projects5.sponsor}
                onChange={(e) => {
                  setProjects5({ ...projects5, sponsor: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="years">Duration (Years)</label>
              <input
                type="text"
                id="years"
                name="years"
                value={projects5.years}
                onChange={(e) => {
                  setProjects5({ ...projects5, years: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="amount">Grant Amount in Rs.</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={projects5.amount}
                onChange={(e) => {
                  setProjects5({ ...projects5, amount: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "projects5", projects5);
              setProjects5({
                title: "",
                sponsor: "",
                years: "",
                amount: "",
                id: 0,
              });
            }}
            className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded">
            Add to List
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
