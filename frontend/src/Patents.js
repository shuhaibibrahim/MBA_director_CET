import React, { useState, useEffect } from "react";

function Patents({ nextform, prevform, details, setDetails }) {
  const [renderPatent, setRenderPatent] = useState(null);

  const removeItem = (e, name, id) => {
    e.preventDefault();
    console.log(id);
    var newDetails = { ...details };
    var newList = [...newDetails[name]];
    newList = newList.filter((item) => item.id !== id);
    newDetails[name] = newList;
    setDetails(newDetails);
  };

  const [patent, setPatent] = useState({ title: "", org: "", year: "", id: 0 });

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
    setRenderPatent(
      details.patents.map((item) => (
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
  }, [details]);



  return (
    <div>
      <form>
        <h3 className="font-bold my-5 text-xl text-red-700">
          Patents
        </h3>
        <h2 className="font-bold my-3">
          Patents Awarded
        </h2>
        <div className="transition duration-500 ease-in-out">
          {renderPatent}

          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="title">Award Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={patent.title}
                onChange={(e) => {
                  setPatent({ ...patent, title: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="org">Organization</label>
              <input
                type="text"
                id="org"
                name="org"
                value={patent.org}
                onChange={(e) => {
                  setPatent({ ...patent, org: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="year">Year of Award</label>
              <input
                type="text"
                id="year"
                name="year"
                value={patent.year}
                onChange={(e) => {
                  setPatent({ ...patent, year: e.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "awards", patent);
              setPatent({ title: "", org: "", year: "", id: 0 });
            }}
            className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
          >
            Add to list
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

export default Patents;
