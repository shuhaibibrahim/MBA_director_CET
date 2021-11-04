import React from "react";

function Education({ nextform, prevform, details, setDetails, saveInfo }) {
    function updateEducation(e, degree) {
        var newDetails = { ...details };
        newDetails[degree][e.target.name] = e.target.value;
        setDetails(newDetails);
    }

    const saveInfoNext = (e) => {
        e.preventDefault();
        nextform(e);
    };

    const goPrev = (e) => {
        e.preventDefault();
        prevform(e);
    };
    return (
        <div className="w-11/12 md:w-9/12 mx-auto my-6">
            <h2 className="font-bold text-3xl text-secondary">Education</h2>
            <hr className="my-4" />

            <form className="mt-7 mb-4">
                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">PhD degree</h3>
                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="sm:flex">
                            <div className="form-field sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="degree">
                                    Degree Name
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="degree"
                                    name="degree"
                                    value={details.phd.degree}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-8/12 mt-4 sm:mt-0 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title of Thesis
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={details.phd.title}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-7/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="supervisor">
                                    Name of Supervisor
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="supervisor"
                                    name="supervisor"
                                    value={details.phd.supervisor}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="affiliation">
                                    Affiliation of Supervisor
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="affiliation"
                                    name="affiliation"
                                    value={details.phd.affiliation}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="university">
                                    University
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="university"
                                    name="university"
                                    value={details.phd.university}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="discipline">
                                    Discipline
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="discipline"
                                    name="discipline"
                                    value={details.phd.discipline}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="college">
                                    College
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="college"
                                    name="college"
                                    value={details.phd.college}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-7/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="startdate">
                                    Start Date
                                </label>
                                <input
                                    className="form-control"
                                    type="date"
                                    id="startdate"
                                    name="startdate"
                                    value={details.phd.startdate}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="submitdate">
                                    Date of Ph.D Thesis (Submitted for Evaluation)
                                </label>
                                <input
                                    className="form-control"
                                    type="date"
                                    id="submitdate"
                                    name="submitdate"
                                    value={details.phd.submitdate}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="defenddate">
                                    Date of Ph.D Thesis (Defended Successfully)
                                </label>
                                <input
                                    className="form-control"
                                    type="date"
                                    id="defenddate"
                                    name="defenddate"
                                    value={details.phd.defenddate}
                                    onChange={(e) => {
                                        updateEducation(e, "phd");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">ME / MTech / MPhil / MBA / PGDM degree</h3>
                    <div className="form-card rounded-xl sm:rounded-none">
                        <div className="sm:flex">
                            <div className="form-field sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="name">
                                    Degree Name
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={details.masters.name}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-8/12 mt-4 sm:mt-0 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="college">
                                    College
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="college"
                                    name="college"
                                    value={details.masters.college}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
                                    }}
                                />
                            </div>
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="university">
                                    University
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="university"
                                    name="university"
                                    value={details.masters.university}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="discipline">
                                    Discipline
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="discipline"
                                    name="discipline"
                                    value={details.masters.discipline}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
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
                                    value={details.masters.startdate}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
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
                                    value={details.masters.enddate}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="division">
                                    Division/Awarded
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="division"
                                    name="division"
                                    value={details.masters.division}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="system">
                                    System of Awarding Marks
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="system"
                                    name="system"
                                    value={details.masters.system}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="marks">
                                    % Marks/Grade
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="marks"
                                    name="marks"
                                    value={details.masters.marks}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="others">
                                    Others
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="others"
                                    name="others"
                                    value={details.masters.others}
                                    onChange={(e) => {
                                        updateEducation(e, "masters");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">BE / BTech / MA / MSc / MCom / MCA degree</h3>
                    <div className="form-card rounded-xl sm:rounded-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="name">
                                    Degree Name
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={details.bachelors1.name}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-8/12 mt-4 sm:mt-0 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="college">
                                    College
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="college"
                                    name="college"
                                    value={details.bachelors1.college}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
                                    }}
                                />
                            </div>
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="university">
                                    University
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="university"
                                    name="university"
                                    value={details.bachelors1.university}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="discipline">
                                    Discipline
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="discipline"
                                    name="discipline"
                                    value={details.bachelors1.discipline}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
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
                                    value={details.bachelors1.startdate}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
                                    }}
                                />
                            </div>
                            <div className="sm:w-5/12 md:w-4/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="enddate">
                                    End Date
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="date"
                                    id="enddate"
                                    name="enddate"
                                    value={details.bachelors1.enddate}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="division">
                                    Division/Awarded
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="division"
                                    name="division"
                                    value={details.bachelors1.division}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="system">
                                    System of Awarding Marks
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="system"
                                    name="system"
                                    value={details.bachelors1.system}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="marks">
                                    % Marks/Grade
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="marks"
                                    name="marks"
                                    value={details.bachelors1.marks}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="others">
                                    Others
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="others"
                                    name="others"
                                    value={details.bachelors1.others}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors1");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">BSc / BA / BCom / BCA / BBA degree</h3>
                    <div className="form-card rounded-xl sm:rounded-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="name">
                                    Degree Name
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={details.bachelors2.name}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-8/12 mt-4 sm:mt-0 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="college">
                                    College
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="college"
                                    name="college"
                                    value={details.bachelors2.college}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="university">
                                    University
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="university"
                                    name="university"
                                    value={details.bachelors2.university}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="discipline">
                                    Discipline
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="discipline"
                                    name="discipline"
                                    value={details.bachelors2.discipline}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
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
                                    value={details.bachelors2.startdate}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
                                    }}
                                />
                            </div>
                            <div className="sm:w-5/12 md:w-4/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="enddate">
                                    End Date
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="date"
                                    id="enddate"
                                    name="enddate"
                                    value={details.bachelors2.enddate}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
                                    }}
                                />
                            </div>
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="division">
                                    Division/Awarded
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="division"
                                    name="division"
                                    value={details.bachelors2.division}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="system">
                                    System of Awarding Marks
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="system"
                                    name="system"
                                    value={details.bachelors2.system}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="marks">
                                    % Marks/Grade
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="marks"
                                    name="marks"
                                    value={details.bachelors2.marks}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="others">
                                    Others
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="others"
                                    name="others"
                                    value={details.bachelors2.others}
                                    onChange={(e) => {
                                        updateEducation(e, "bachelors2");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">Any other degree (if relevant, & not covered above)</h3>
                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="name">
                                    Degree Name
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={details.other.name}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-8/12 mt-4 sm:mt-0 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="college">
                                    College
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="college"
                                    name="college"
                                    value={details.other.college}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="university">
                                    University
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="university"
                                    name="university"
                                    value={details.other.university}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="discipline">
                                    Discipline
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="discipline"
                                    name="discipline"
                                    value={details.other.discipline}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
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
                                    value={details.other.startdate}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
                                    }}
                                />
                            </div>
                            <div className="sm:w-5/12 md:w-4/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="enddate">
                                    End Date
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="date"
                                    id="enddate"
                                    name="enddate"
                                    value={details.other.enddate}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="division">
                                    Division/Awarded
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="division"
                                    name="division"
                                    value={details.other.division}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="system">
                                    System of Awarding Marks
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="system"
                                    name="system"
                                    value={details.other.system}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="marks">
                                    % Marks/Grade
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="marks"
                                    name="marks"
                                    value={details.other.marks}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="others">
                                    Others
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="others"
                                    name="others"
                                    value={details.other.others}
                                    onChange={(e) => {
                                        updateEducation(e, "other");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                    <button onClick={goPrev} className="btn">
                        Prev
                    </button>
                    <div className="space-x-6">
                        <button className="btn-outline" onClick={saveInfo}>
                            Save
                        </button>
                        <button onClick={saveInfoNext} className="btn-secondary">
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Education;
