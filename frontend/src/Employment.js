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
        <div className="w-9/12 mx-auto my-6">
            <h2 className="font-bold text-3xl text-secondary">Employment Details</h2>
            <hr className="my-4" />
            <form className="my-7">
                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">
                        Post-PhD employment details (from date thesis is approved till today in chronological order)
                    </h3>

                    <div className="form-card rounded-tl-xl rounded-tr-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="employer">
                                Employer
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="department">
                                Department/Division
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="position">
                                Position held
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="nature">
                                Nature of Work
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="startdate">
                                Start Date
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="enddate">
                                End Date
                            </label>
                            <input
                                className="form-control"
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
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">
                        Pre-PhD employment details (Post-BTech/Msc/MCA till date of joining PhD Programme)
                    </h3>
                    <div className="form-card rounded-bl-xl rounded-br-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="employer">
                                Employer
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="department">
                                Department/Division
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="position">
                                Position held
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="nature">
                                Nature of Work
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="startdate">
                                Start Date
                            </label>
                            <input
                                className="form-control"
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
                            <label className="form-label mb-1" htmlFor="enddate">
                                End Date
                            </label>
                            <input
                                className="form-control"
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
