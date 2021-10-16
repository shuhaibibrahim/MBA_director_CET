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
                <div key={item.id} className="flex">
                    <div className="w-4/12 px-1.5 py-4 truncate">{item.title}</div>
                    <div className="w-4/12 px-1.5 py-4 truncate">{item.org}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.year}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "awards", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderThesis(
            details.thesis.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 truncate">{item.studentname}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.supervisor}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.year}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "awards", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderProjects1(
            details.projects1.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-4/12 px-1.5 py-4 truncate">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate">{item.sponsor}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.years}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.amount}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "projects1", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderProjects2(
            details.projects2.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-4/12 px-1.5 py-4 truncate">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate">{item.sponsor}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.years}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.amount}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "projects2", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderProjects3(
            details.projects3.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-4/12 px-1.5 py-4 truncate">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate">{item.sponsor}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.years}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.amount}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "projects3", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderProjects4(
            details.projects4.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-4/12 px-1.5 py-4 truncate">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate">{item.sponsor}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.years}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.amount}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "projects4", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderProjects5(
            details.projects5.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-4/12 px-1.5 py-4 truncate">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate">{item.sponsor}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.years}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-500">{item.amount}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "projects5", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [details]);

    return (
        <div className="w-9/12 mx-auto my-6">
            <h2 className="font-bold text-3xl text-secondary">Awards, Thesis and R&D</h2>
            <hr className="my-4" />

            <form className="my-7">
                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">
                        Honours, Awards etc. (Please provide these details if it is relevant to you)
                    </h3>

                    {/* <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none"> */}
                    <div className="form-card rounded-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="title">
                                Award Title
                            </label>
                            <input
                                className="form-control sm:w-96"
                                type="text"
                                id="title"
                                name="title"
                                value={award.title}
                                onChange={(e) => {
                                    setAward({ ...award, title: e.target.value });
                                }}
                            />
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="org">
                                    Organization
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="org"
                                    name="org"
                                    value={award.org}
                                    onChange={(e) => {
                                        setAward({ ...award, org: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="year">
                                    Year of Award
                                </label>
                                <input
                                    className="form-control w-full"
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

                        <div className="text-right mt-5">
                            <button
                                onClick={(e) => {
                                    addToList(e, "awards", award);
                                    setAward({ title: "", org: "", year: "", id: 0 });
                                }}
                                className="btn"
                            >
                                Add to list
                            </button>
                        </div>
                        {details.awards.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5">
                                <div className="px-2.5 min-w-120 bg-gray-100 flex">
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Award Title
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Organization
                                    </div>

                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Year
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-120 bg-white divide-y divide-gray-200">{renderAward}</div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <h3 className="section-label pr-2">Details of PhD / MTech / MPhil thesis supervised</h3>
                <hr className="mb-4" />
                <div className="sm:flex justify-between">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 sm:pt-4 pb-2">
                        Details of PhD thesis supervised (completed only)
                    </h4>
                    <div className="form-card rounded-xl">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="singlySupervisedThesis">
                                    No. of Ph.D. thesis supervised singly (defended successfully)
                                </label>
                                <input
                                    className="form-control w-20"
                                    id="singlySupervisedThesis"
                                    name="singlySupervisedThesis"
                                    value={details.singlySupervisedThesis}
                                    onChange={update}
                                    type="text"
                                />
                            </div>
                            <div className="form-field mt-4 sm:mt-0 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="jointlySupervisedThesis">
                                    No. of Ph.D. thesis supervised jointly (defended successfully)
                                </label>
                                <input
                                    className="form-control w-20"
                                    id="jointlySupervisedThesis"
                                    name="jointlySupervisedThesis"
                                    value={details.jointlySupervisedThesis}
                                    onChange={update}
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="studentname">
                                    Student Name
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="studentname"
                                    name="studentname"
                                    value={thesis.studentname}
                                    onChange={(e) => {
                                        setThesis({ ...thesis, studentname: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="supervisor">
                                    Supervisor
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="supervisor"
                                    name="supervisor"
                                    value={thesis.supervisor}
                                    onChange={(e) => {
                                        setThesis({ ...thesis, supervisor: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 lg:w-8/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Thesis Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={thesis.title}
                                    onChange={(e) => {
                                        setThesis({ ...thesis, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 lg:w-4/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="year">
                                    Year Successfully Defended
                                </label>
                                <input
                                    className="form-control w-full"
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

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>

                        {details.thesis.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5">
                                <div className="px-2.5 min-w-120 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Student Name
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Thesis Title
                                    </div>

                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Supervisor
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Year Successfully Defended
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-120 bg-white divide-y divide-gray-200">{renderThesis}</div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between mt-5">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 sm:pt-4 pb-2">
                        M.Tech, MPhil, MTech, MBA thesis supervised (completed only)
                    </h4>
                    <div className="form-card rounded-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="">
                                No.of MTech/M.Phil/ MBA thesis supervised (completed and defended successfully)
                            </label>
                            <input
                                className="form-control w-20"
                                type="text"
                                id="thesisSupervised"
                                name="thesisSupervised"
                                onChange={update}
                            />
                        </div>
                    </div>
                </div>

                <h3 className="section-label pr-2">
                    Details of Industry or Govt. Sponsored R&D / Consulting projects (Please provide these details if it
                    is relevant to you)
                </h3>
                <hr className="mb-4" />

                <div className="sm:flex justify-between">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 sm:pt-4 pb-2">
                        Details of sponsored R&D projects (completed, and as Principal Investigator)
                    </h4>
                    <div className="form-card rounded-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="">
                                No. of sponsored R&D projects (completed), with you as "Principal Investigator" (where
                                each project is over ₹2lakhs)
                            </label>
                            <input
                                className="form-control w-20"
                                type="text"
                                id="sponsoredRD1"
                                name="sponsoredRD1"
                                onChange={update}
                            />
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={projects1.title}
                                    onChange={(e) => {
                                        setProjects1({ ...projects1, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="sponsor">
                                    Sponsor
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="sponsor"
                                    name="sponsor"
                                    value={projects1.sponsor}
                                    onChange={(e) => {
                                        setProjects1({ ...projects1, sponsor: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="years">
                                    Duration
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="years"
                                    name="years"
                                    placeholder="In years"
                                    value={projects1.years}
                                    onChange={(e) => {
                                        setProjects1({ ...projects1, years: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="amount">
                                    Grant Amount
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    placeholder="In rupees"
                                    value={projects1.amount}
                                    onChange={(e) => {
                                        setProjects1({ ...projects1, amount: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.projects1.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5">
                                <div className="px-2.5 min-w-120 bg-gray-100 flex">
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-120 bg-white divide-y divide-gray-200">
                                    {renderProjects1}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between my-5">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 sm:pt-4 pb-2">
                        Details of sponsored R&D projects (in-progress and as Principal Investigator)
                    </h4>
                    <div className="form-card rounded-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="">
                                No. of sponsored R&D projects (in-progress), with you as "Principal Investigator" (where
                                each project is over ₹2lakhs)
                            </label>
                            <input
                                className="form-control w-20"
                                type="text"
                                id="sponsoredRD2"
                                name="sponsoredRD2"
                                onChange={update}
                            />
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={projects2.title}
                                    onChange={(e) => {
                                        setProjects2({ ...projects2, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="sponsor">
                                    Sponsor
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="sponsor"
                                    name="sponsor"
                                    value={projects2.sponsor}
                                    onChange={(e) => {
                                        setProjects2({ ...projects2, sponsor: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="years">
                                    Duration
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="years"
                                    name="years"
                                    placeholder="In years"
                                    value={projects2.years}
                                    onChange={(e) => {
                                        setProjects2({ ...projects2, years: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="amount">
                                    Grant Amount
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    placeholder="In rupees"
                                    value={projects2.amount}
                                    onChange={(e) => {
                                        setProjects2({ ...projects2, amount: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.projects2.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5">
                                <div className="px-2.5 min-w-120 bg-gray-100 flex">
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-120 bg-white divide-y divide-gray-200">
                                    {renderProjects2}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 sm:pt-4 pb-2">
                        Details of sponsored R&D projects (Completed and as Co-Principal Investigator)
                    </h4>
                    <div className="form-card rounded-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="">
                                No. of sponsored R&D projects (completed), with you as "Co-Principal Investigator"
                                (where each project is over ₹2lakhs)
                            </label>
                            <input
                                className="form-control w-20"
                                type="text"
                                id="sponsoredRD3"
                                name="sponsoredRD3"
                                onChange={update}
                            />
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={projects3.title}
                                    onChange={(e) => {
                                        setProjects3({ ...projects3, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="sponsor">
                                    Sponsor
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="sponsor"
                                    name="sponsor"
                                    value={projects3.sponsor}
                                    onChange={(e) => {
                                        setProjects3({ ...projects3, sponsor: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="years">
                                    Duration
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="years"
                                    name="years"
                                    placeholder="In years"
                                    value={projects3.years}
                                    onChange={(e) => {
                                        setProjects3({ ...projects3, years: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="amount">
                                    Grant Amount
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    placeholder="In rupees"
                                    value={projects3.amount}
                                    onChange={(e) => {
                                        setProjects3({ ...projects3, amount: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.projects3.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5">
                                <div className="px-2.5 min-w-120 bg-gray-100 flex">
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-120 bg-white divide-y divide-gray-200">
                                    {renderProjects3}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between my-5">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 sm:pt-4 pb-2">
                        Details of sponsored R&D projects (in-progress and as Co-Principal Investigator)
                    </h4>
                    <div className="form-card rounded-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="">
                                No. of sponsored R&D projects (in-progress), with you as "Co-Principal Investigator"
                                (where each project is over ₹2lakhs)
                            </label>
                            <input
                                className="form-control w-20"
                                type="text"
                                id="sponsoredRD4"
                                name="sponsoredRD4"
                                onChange={update}
                            />
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={projects4.title}
                                    onChange={(e) => {
                                        setProjects4({ ...projects4, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="sponsor">
                                    Sponsor
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="sponsor"
                                    name="sponsor"
                                    value={projects4.sponsor}
                                    onChange={(e) => {
                                        setProjects4({ ...projects4, sponsor: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="years">
                                    Duration
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="years"
                                    name="years"
                                    placeholder="In years"
                                    value={projects4.years}
                                    onChange={(e) => {
                                        setProjects4({ ...projects4, years: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="amount">
                                    Grant Amount
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    placeholder="In rupees"
                                    value={projects4.amount}
                                    onChange={(e) => {
                                        setProjects4({ ...projects4, amount: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.projects4.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5">
                                <div className="px-2.5 min-w-120 bg-gray-100 flex">
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-120 bg-white divide-y divide-gray-200">
                                    {renderProjects4}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 sm:pt-4 pb-2">
                        Details of industry or govt-sponsored consulting assignments completed
                    </h4>
                    <div className="form-card rounded-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="">
                                No. of sponsored consulting projects completed, with you as "Chief Investigator" (where
                                each project is over ₹0.5lakhs)
                            </label>
                            <input
                                className="form-control w-20"
                                type="text"
                                id="sponsoredRD5"
                                name="sponsoredRD5"
                                onChange={update}
                            />
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={projects5.title}
                                    onChange={(e) => {
                                        setProjects5({ ...projects5, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="sponsor">
                                    Sponsor
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="sponsor"
                                    name="sponsor"
                                    value={projects5.sponsor}
                                    onChange={(e) => {
                                        setProjects5({ ...projects5, sponsor: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="years">
                                    Duration
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="years"
                                    name="years"
                                    placeholder="In years"
                                    value={projects5.years}
                                    onChange={(e) => {
                                        setProjects5({ ...projects5, years: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="amount">
                                    Grant Amount
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    placeholder="In rupees"
                                    value={projects5.amount}
                                    onChange={(e) => {
                                        setProjects5({ ...projects5, amount: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.projects5.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5">
                                <div className="px-2.5 min-w-120 bg-gray-100 flex">
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-120 bg-white divide-y divide-gray-200">
                                    {renderProjects5}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <button onClick={goPrev} className="btn-secondary">
                        Prev
                    </button>
                    <button onClick={saveInfoNext} className="btn">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Awards;
