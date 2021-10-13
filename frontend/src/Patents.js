import React, { useState, useEffect } from "react";

function Patents({ nextform, prevform, details, setDetails }) {
  const [renderPatent, setRenderPatent] = useState(null);
  const [renderFiledPatents, setRenderFiledPatents] = useState(null);

  const emptyPatentObject = {
    title: "",
    coInventors: "",
    patentAuthority: "",
    patentNumber: "",
    datePublished: "",
    organizationAssignedTo: "",
    id: 0,
  };

  const removeItem = (e, name, id) => {
    e.preventDefault();
    console.log(id);
    var newDetails = { ...details };
    var newList = [...newDetails[name]];
    newList = newList.filter((item) => item.id !== id);
    newDetails[name] = newList;
    setDetails(newDetails);
  };

  const [patent, setPatent] = useState({
    ...emptyPatentObject,
  });

  const [filedPatent, setFiledPatent] = useState({
    ...emptyPatentObject,
  });

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
            <div>Patent Title: {item.title}</div>
            <div>Co Inventors: {item.coInventors}</div>
            <div>Patent Authority: {item.patentAuthority}</div>
            <div>Patent Number: {item.patentNumber}</div>
            <div>Date Published: {item.datePublished}</div>
            <div>Organization Assigned To: {item.organizationAssignedTo}</div>
          </div>

          <button
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
            onClick={(e) => {
              removeItem(e, "patents", item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))
    );

    setRenderFiledPatents(
      details.filedPatents.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-2 border-black mb-2 justify-between"
        >
          <div className="flex flex-col">
            <div>Patent Title: {item.title}</div>
            <div>Co Inventors: {item.coInventors}</div>
            <div>Patent Authority: {item.patentAuthority}</div>
            <div>Patent Number: {item.patentNumber}</div>
            <div>Date Published: {item.datePublished}</div>
            <div>Organization Assigned To: {item.organizationAssignedTo}</div>
          </div>

          <button
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
            onClick={(e) => {
              removeItem(e, "filedPatents", item.id);
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
        <h3 className="font-bold my-5 text-xl text-red-700">Patents</h3>
        <h2 className="font-bold my-3">Patents Awarded</h2>
        <div className="transition duration-500 ease-in-out">
          <div>
            <label htmlFor="">
              No. of international /Indian patents issued:
            </label>
            <input className="w-20 ml-5" type="text" />
          </div>
          <h2 className="font-bold text-sm my-3">
            Provide details of up to 4 mostsignificant & recent patents
          </h2>
          {renderPatent}

          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="title">Title</label>
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
              <label htmlFor="coInventors">Co-Inverntors</label>
              <input
                type="text"
                id="coInventors"
                name="coInventors"
                value={patent.coInventors}
                onChange={(e) => {
                  setPatent({ ...patent, coInventors: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="patentAuthority">Patent Authority</label>
              <input
                type="text"
                id="patentAuthority"
                name="patentAuthority"
                value={patent.patentAuthority}
                onChange={(e) => {
                  setPatent({ ...patent, patentAuthority: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="patentNumber">Patent Number</label>
              <input
                type="text"
                id="patentNumber"
                name="patentNumber"
                value={patent.patentNumber}
                onChange={(e) => {
                  setPatent({ ...patent, patentNumber: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="datePublished">Date Published</label>
              <input
                type="date"
                id="datePublished"
                name="datePublished"
                value={patent.datePublished}
                onChange={(e) => {
                  setPatent({ ...patent, datePublished: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="organizationAssignedTo">
                Organization assigned to
              </label>
              <input
                type="text"
                id="organizationAssignedTo"
                name="organizationAssignedTo"
                value={patent.organizationAssignedTo}
                onChange={(e) => {
                  setPatent({
                    ...patent,
                    organizationAssignedTo: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "patents", patent);
              setPatent({
                ...emptyPatentObject,
                id: details.patents.length,
              });
            }}
            className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
          >
            Add to list
          </button>
        </div>

        <h2 className="font-bold my-3">Patents Filed</h2>
        <div className="transition duration-500 ease-in-out">
          <div>
            <label htmlFor="">
              No. of international /Indian patents filed:
            </label>
            <input className="w-20 ml-5" type="text" />
          </div>
          <h2 className="font-bold text-sm my-3">
            Provide details of up to 4 mostsignificant & recent patents
          </h2>
          {renderFiledPatents}

          <div className="grid gap-3 mb-7">
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={filedPatent.title}
                onChange={(e) => {
                  setFiledPatent({ ...filedPatent, title: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="coInventors">Co-Inverntors</label>
              <input
                type="text"
                id="coInventors"
                name="coInventors"
                value={filedPatent.coInventors}
                onChange={(e) => {
                  setFiledPatent({ ...filedPatent, coInventors: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="patentAuthority">Patent Authority</label>
              <input
                type="text"
                id="patentAuthority"
                name="patentAuthority"
                value={filedPatent.patentAuthority}
                onChange={(e) => {
                  setFiledPatent({ ...filedPatent, patentAuthority: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="patentNumber">Patent Number</label>
              <input
                type="text"
                id="patentNumber"
                name="patentNumber"
                value={filedPatent.patentNumber}
                onChange={(e) => {
                  setFiledPatent({ ...filedPatent, patentNumber: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="datePublished">Date Published</label>
              <input
                type="date"
                id="datePublished"
                name="datePublished"
                value={filedPatent.datePublished}
                onChange={(e) => {
                  setFiledPatent({ ...filedPatent, datePublished: e.target.value });
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="organizationAssignedTo">
                Organization assigned to
              </label>
              <input
                type="text"
                id="organizationAssignedTo"
                name="organizationAssignedTo"
                value={filedPatent.organizationAssignedTo}
                onChange={(e) => {
                  setFiledPatent({
                    ...filedPatent,
                    organizationAssignedTo: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={(e) => {
              addToList(e, "filedPatents", filedPatent);
              setFiledPatent({
                ...emptyPatentObject,
                id: details.patents.length,
              });
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
