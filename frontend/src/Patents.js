import React, { useState, useEffect } from "react";

function Patents({ nextform, prevform, details, setDetails, saveInfo }) {
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
        // console.log(id);
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
        nextform(e);
    };

    const goPrev = (e) => {
        e.preventDefault();
        prevform(e);
    };

    useEffect(() => {
        setRenderPatent(
            details.patents.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.title}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.coInventors}
                    </div>
                    <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.patentNumber}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.patentAuthority}
                    </div>
                    <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.organizationAssignedTo}
                    </div>
                    <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.datePublished}
                    </div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "patents", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderFiledPatents(
            details.filedPatents.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.title}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.coInventors}
                    </div>
                    <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.patentNumber}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.patentAuthority}
                    </div>
                    <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.organizationAssignedTo}
                    </div>
                    <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.datePublished}
                    </div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "filedPatents", item.id);
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
        <div className="w-11/12 md:w-9/12 mx-auto my-6">
            <h2 className="font-bold text-3xl text-secondary">Patents</h2>
            <hr className="my-4" />

            <form className="mt-7 mb-4">
                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">Patents Awarded</h3>
                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="noPatents">
                                No. of international / Indian patents issued
                            </label>
                            <input
                                className="form-control w-20"
                                type="number"
                                id="noPatents"
                                name="noPatents"
                                value={details.noPatents}
                                onChange={update}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 pt-4 pb-2">
                        Provide details of up to 4 most significant & recent patents
                    </h4>
                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={patent.title}
                                    onChange={(e) => {
                                        setPatent({ ...patent, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:mt-0 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="patentNumber">
                                    Patent Number
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="patentNumber"
                                    name="patentNumber"
                                    value={patent.patentNumber}
                                    onChange={(e) => {
                                        setPatent({ ...patent, patentNumber: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="coInventors">
                                    Co-Inventors
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="coInventors"
                                    name="coInventors"
                                    value={patent.coInventors}
                                    onChange={(e) => {
                                        setPatent({ ...patent, coInventors: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="patentAuthority">
                                    Patent Authority
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="patentAuthority"
                                    name="patentAuthority"
                                    value={patent.patentAuthority}
                                    onChange={(e) => {
                                        setPatent({ ...patent, patentAuthority: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="datePublished">
                                    Date published
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="date"
                                    id="datePublished"
                                    name="datePublished"
                                    value={patent.datePublished}
                                    onChange={(e) => {
                                        setPatent({ ...patent, datePublished: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-8/12 mt-4 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="organizationAssignedTo">
                                    Organization assigned to
                                </label>
                                <input
                                    className="form-control w-full"
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

                        <div className="text-right mt-5">
                            <button
                                onClick={(e) => {
                                    addToList(e, "patents", patent);
                                    setPatent({
                                        ...emptyPatentObject,
                                        id: details.patents.length,
                                    });
                                }}
                                className="btn"
                            >
                                Add to list
                            </button>
                        </div>
                        {details.patents.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-160 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-Inventors
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Patent No.
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Patent Authority
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Organization
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-160 bg-white divide-y divide-gray-200">{renderPatent}</div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between mt-5">
                    <h3 className="section-label pr-2">Patents Filed</h3>
                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="noFiledPatents">
                                No. of international / Indian patents filed
                            </label>
                            <input
                                className="form-control w-20"
                                type="number"
                                id="noFiledPatents"
                                name="noFiledPatents"
                                value={details.noFiledPatents}
                                onChange={update}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 pt-4 pb-2">
                        Provide details of up to 4 most significant & recent patents
                    </h4>
                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={filedPatent.title}
                                    onChange={(e) => {
                                        setFiledPatent({ ...filedPatent, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:mt-0 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="patentNumber">
                                    Patent Number
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="patentNumber"
                                    name="patentNumber"
                                    value={filedPatent.patentNumber}
                                    onChange={(e) => {
                                        setFiledPatent({ ...filedPatent, patentNumber: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="coInventors">
                                    Co-Inventors
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="coInventors"
                                    name="coInventors"
                                    value={filedPatent.coInventors}
                                    onChange={(e) => {
                                        setFiledPatent({ ...filedPatent, coInventors: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="patentAuthority">
                                    Patent Authority
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="patentAuthority"
                                    name="patentAuthority"
                                    value={filedPatent.patentAuthority}
                                    onChange={(e) => {
                                        setFiledPatent({ ...filedPatent, patentAuthority: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="datePublished">
                                    Date published
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="date"
                                    id="datePublished"
                                    name="datePublished"
                                    value={filedPatent.datePublished}
                                    onChange={(e) => {
                                        setFiledPatent({ ...filedPatent, datePublished: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-8/12 mt-4 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="organizationAssignedTo">
                                    Organization assigned to
                                </label>
                                <input
                                    className="form-control w-full"
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

                        <div className="text-right mt-5">
                            <button
                                onClick={(e) => {
                                    addToList(e, "filedPatents", filedPatent);
                                    setFiledPatent({
                                        ...emptyPatentObject,
                                        id: details.patents.length,
                                    });
                                }}
                                className="btn"
                            >
                                Add to list
                            </button>
                        </div>
                        {details.filedPatents.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-160 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-Inventors
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Patent No.
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Patent Authority
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Organization
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-160 bg-white divide-y divide-gray-200">
                                    {renderFiledPatents}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
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

export default Patents;
