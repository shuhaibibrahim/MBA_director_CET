import React from "react";

function Employment({ nextform, prevform, details, setDetails }) {
    function updateEmployment(e, prepost) {
        var newDetails = { ...details };
        newDetails[prepost][e.target.name] = e.target.value;
        setDetails(newDetails);
    }

    const saveInfoNext = (e) => {
        e.preventDefault();
        nextform();
    };

    const goPrev = (e) => {
        e.preventDefault();
        prevform();
    };

    return (
        <div>
            <form className="flex flex-col">
                <h3 className="font-bold text-lg my-4">Employment Details</h3>
                <h2 className="font-bold my-4">
                    (i) Post-PhD employment details (from date thesis is approved till today in chronological order)
                </h2>
                <div className="grid gap-y-3">
                    <div className="form-field">
                        <label htmlFor="employer">Employer</label>
                        <input
                            type="text"
                            id="employer"
                            name="employer"
                            value={details.postphd.employer}
                            onChange={(e) => {
                                updateEmployment(e, "postphd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="department">Department/Division</label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={details.postphd.department}
                            onChange={(e) => {
                                updateEmployment(e, "postphd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="position">Position held</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={details.postphd.position}
                            onChange={(e) => {
                                updateEmployment(e, "postphd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="nature">Nature of Work</label>
                        <input
                            type="text"
                            id="nature"
                            name="nature"
                            value={details.postphd.nature}
                            onChange={(e) => {
                                updateEmployment(e, "postphd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="startdate">Start Date</label>
                        <input
                            type="date"
                            id="startdate"
                            name="startdate"
                            value={details.postphd.startdate}
                            onChange={(e) => {
                                updateEmployment(e, "postphd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="enddate">End Date</label>
                        <input
                            type="date"
                            id="enddate"
                            name="enddate"
                            value={details.postphd.enddate}
                            onChange={(e) => {
                                updateEmployment(e, "postphd");
                            }}
                        />
                    </div>
                </div>

                <h2 className="font-bold my-4">
                    (ii) Pre-PhD employment details (Post-BTech/Msc/MCA till date of joining PhD Programme)
                </h2>
                <div className="grid gap-y-3">
                    <div className="form-field">
                        <label htmlFor="employer">Employer</label>
                        <input
                            type="text"
                            id="employer"
                            name="employer"
                            value={details.prephd.employer}
                            onChange={(e) => {
                                updateEmployment(e, "prephd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="department">Department/Division</label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={details.prephd.department}
                            onChange={(e) => {
                                updateEmployment(e, "prephd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="position">Position held</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={details.prephd.position}
                            onChange={(e) => {
                                updateEmployment(e, "prephd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="nature">Nature of Work</label>
                        <input
                            type="text"
                            id="nature"
                            name="nature"
                            value={details.prephd.nature}
                            onChange={(e) => {
                                updateEmployment(e, "prephd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="startdate">Start Date</label>
                        <input
                            type="date"
                            id="startdate"
                            name="startdate"
                            value={details.prephd.startdate}
                            onChange={(e) => {
                                updateEmployment(e, "prephd");
                            }}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="enddate">End Date</label>
                        <input
                            type="date"
                            id="enddate"
                            name="enddate"
                            value={details.prephd.enddate}
                            onChange={(e) => {
                                updateEmployment(e, "prephd");
                            }}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button onClick={goPrev} className="bg-blue-500 text-white w-20 my-5 p-1 rounded">
                        Prev
                    </button>
                    <button onClick={saveInfoNext} className="bg-green-700 text-white w-20 my-5 p-1 rounded">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Employment;
