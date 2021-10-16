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

                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-7/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="employer">
                                    Employer
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="employer"
                                    name="employer"
                                    value={details.postphd.employer}
                                    onChange={(e) => {
                                        updateEmployment(e, "postphd");
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-5/12 mt-4 sm:mt-0 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="department">
                                    Department/Division
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="department"
                                    name="department"
                                    value={details.postphd.department}
                                    onChange={(e) => {
                                        updateEmployment(e, "postphd");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="position">
                                    Position held
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="position"
                                    name="position"
                                    value={details.postphd.position}
                                    onChange={(e) => {
                                        updateEmployment(e, "postphd");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="nature">
                                    Nature of Work
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="nature"
                                    name="nature"
                                    value={details.postphd.nature}
                                    onChange={(e) => {
                                        updateEmployment(e, "postphd");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 md:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="startdate">
                                    Start Date
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="date"
                                    id="startdate"
                                    name="startdate"
                                    value={details.postphd.startdate}
                                    onChange={(e) => {
                                        updateEmployment(e, "postphd");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 md:w-4/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="enddate">
                                    End Date
                                </label>
                                <input
                                    className="form-control w-full"
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
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">
                        Pre-PhD employment details (Post-BTech / Msc / MCA till date of joining PhD Programme)
                    </h3>

                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-7/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="employer">
                                    Employer
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="employer"
                                    name="employer"
                                    value={details.prephd.employer}
                                    onChange={(e) => {
                                        updateEmployment(e, "prephd");
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-5/12 mt-4 sm:mt-0 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="department">
                                    Department/Division
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="department"
                                    name="department"
                                    value={details.prephd.department}
                                    onChange={(e) => {
                                        updateEmployment(e, "prephd");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="position">
                                    Position held
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="position"
                                    name="position"
                                    value={details.prephd.position}
                                    onChange={(e) => {
                                        updateEmployment(e, "prephd");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="nature">
                                    Nature of Work
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="nature"
                                    name="nature"
                                    value={details.prephd.nature}
                                    onChange={(e) => {
                                        updateEmployment(e, "prephd");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 md:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="startdate">
                                    Start Date
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="date"
                                    id="startdate"
                                    name="startdate"
                                    value={details.prephd.startdate}
                                    onChange={(e) => {
                                        updateEmployment(e, "prephd");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 md:w-4/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="enddate">
                                    End Date
                                </label>
                                <input
                                    className="form-control w-full"
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
                </div>

                <div className="flex items-center justify-between mt-6">
                    <button onClick={goPrev} className="btn">
                        Prev
                    </button>
                    <button onClick={saveInfoNext} className="btn-secondary">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Employment;
