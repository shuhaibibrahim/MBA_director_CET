import React, { useState } from "react";

function Patents(props) {
  const emptyPatentObject = {
    title: "",
    coInventors: "",
    patentAuthority: "",
    datePublished: "",
    organizationAssignedTo: "",
    patentNumber: "",
  };

  const [patents, setPatents] = useState([emptyPatentObject]);

  const addPatent = (e) => {
    e.preventDefault();
    setPatents([...patents, emptyPatentObject]);
  };

  const handlePatentsChange = (e, index) => {
    const { name, value } = e.target;
    const patentList = [...patents];
    patentList[index][name] = value;
    setPatents(patentList);
  };

  const [filedPatents, setFiledPatents] = useState([emptyPatentObject]);

  const addFiledPatent = (e) => {
    e.preventDefault();
    setPatents([...filedPatents, emptyPatentObject]);
  };

  const handleFiledPatentsChange = (e, index) => {
    const { name, value } = e.target;
    const filedPatentsList = [...filedPatents];
    filedPatentsList[index][name] = value;
    setFiledPatents(filedPatentsList);
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
        <h3 className="font-bold my-5 text-xl text-red-700">Patents</h3>
        <h2 className="font-bold my-3">Patents(Awarded)</h2>
        <div>
          <label htmlFor="">No. of international /Indian patents issued:</label>
          <input className="w-20 ml-5" type="text" />
        </div>
        <div>
          <h2 className="font-bold text-sm my-3">
            Provide details of up to 4 mostsignificant & recent patents
          </h2>
        </div>
        <div className="transition duration-500 ease-in-out">
          {patents.map((item, index) => {
            return (
              <div className="grid gap-3 mb-7">
                <div className="form-field">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={item.title}
                    onChange={(e) => handlePatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Co-Inventors</label>
                  <input
                    type="text"
                    name="coInventors"
                    value={item.coInventors}
                    onChange={(e) => handlePatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Patent Authority</label>
                  <input
                    type="text"
                    name="patentAuthority"
                    value={item.patentAuthority}
                    onChange={(e) => handlePatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Patent Number</label>
                  <input
                    type="text"
                    name="patentNumber"
                    value={item.patentNumber}
                    onChange={(e) => handlePatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Date Published</label>
                  <input
                    type="date"
                    name="datePublished"
                    value={item.datePublished}
                    onChange={(e) => handlePatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Organization Assigned To</label>
                  <input
                    type="text"
                    name="organizationAssignedTo"
                    value={item.organizationAssignedTo}
                    onChange={(e) => handlePatentsChange(e, index)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={addFiledPatent}
            className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded"
          >
            Add Another
          </button>
        </div>

        <h2 className="font-bold my-3">Patents(Filed)</h2>
        <div>
          <label htmlFor="">No. of international /Indian patents filed:</label>
          <input className="w-20 ml-5" type="text" />
        </div>
        <div>
          <h2 className="font-bold text-sm my-3">
            Provide details of up to 4 mostsignificant & recent patents
          </h2>
        </div>
        <div className="transition duration-500 ease-in-out">
          {filedPatents.map((item, index) => {
            return (
              <div className="grid gap-3 mb-7">
                <div className="form-field">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={item.title}
                    onChange={(e) => handleFiledPatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Co-Inventors</label>
                  <input
                    type="text"
                    name="coInventors"
                    value={item.coInventors}
                    onChange={(e) => handleFiledPatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Patent Authority</label>
                  <input
                    type="text"
                    name="patentAuthority"
                    value={item.patentAuthority}
                    onChange={(e) => handleFiledPatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Patent Number</label>
                  <input
                    type="text"
                    name="patentNumber"
                    value={item.patentNumber}
                    onChange={(e) => handleFiledPatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Date Published</label>
                  <input
                    type="date"
                    name="datePublished"
                    value={item.datePublished}
                    onChange={(e) => handleFiledPatentsChange(e, index)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="">Organization Assigned To</label>
                  <input
                    type="text"
                    name="organizationAssignedTo"
                    value={item.organizationAssignedTo}
                    onChange={(e) => handleFiledPatentsChange(e, index)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={addPatent}
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
