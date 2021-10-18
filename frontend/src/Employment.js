import React, { useEffect, useState } from "react";

function Employment({ nextform, prevform, details, setDetails, saveInfo }) {
    const empdetails = {
        employer: "",
        department: "",
        position: "",
        nature: "",
        startdate: "",
        enddate: "",
        id:0
    };

    const [pre, setPre] = useState({...empdetails}) //postphd
    const [post, setPost] = useState({...empdetails}) //prephd

    const [renderPostPhd, setRenderPostPhd] = useState(null)
    const [renderPrePhd, setRenderPrePhd] = useState(null)

    const removeItem = (e, name, id) => {
        e.preventDefault();
        // console.log(id);
        var newDetails = { ...details };
        var newList = [...newDetails[name]];
        newList = newList.filter((item) => item.id !== id);
        newDetails[name] = newList;
        setDetails(newDetails);
    };

    const addToList = (e, name, item) => {
        console.log(item)
        e.preventDefault();
        var newDetails = { ...details };
        item.id = newDetails[name].length + 1; //generate ID
        // console.log(name, item)
        newDetails[name].push(item);
        setDetails(newDetails);
    };


    function updateEmployment(e, prepost) {
        // var newDetails = { ...details };
        // newDetails[prepost][e.target.name] = e.target.value;
        // setDetails(newDetails);
        console.log(prepost)
        if(prepost==="postphd")
        {
            var newPost={...post}
            newPost[e.target.name]=e.target.value
            setPost(newPost)
            // console.log(post)
        }
        else if(prepost==="prephd")
        {
            var newPre={...pre}
            newPre[e.target.name]=e.target.value
            setPre(newPre)
            // console.log(newPre)
        }
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
        setRenderPostPhd(
            details.postphd.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.employer}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.department}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.position}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.nature}
                    </div>
                    <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.startdate}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.enddate}
                    </div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "postphd", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        )

        // console.log(details.postphd)

        setRenderPrePhd(
            details.prephd.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.employer}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.department}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.position}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.nature}
                    </div>
                    <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.startdate}
                    </div>
                    <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                        {item.enddate}
                    </div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "prephd", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        )
    }, [details])

    return (
        <div className="w-11/12 md:w-9/12 mx-auto my-6">
            <h2 className="font-bold text-3xl text-secondary">Employment Details</h2>
            <hr className="my-4" />

            <form className="mt-7 mb-4">
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
                                    value={post.employer}
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
                                    value={post.department}
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
                                    value={post.position}
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
                                    value={post.nature}
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
                                    value={post.startdate}
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
                                    value={post.enddate}
                                    onChange={(e) => {
                                        updateEmployment(e, "postphd");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-right mt-5">
                            <button
                                onClick={(e) => {
                                    addToList(e, "postphd", post);
                                    setPost({
                                        ...empdetails
                                    });
                                }}
                                className="btn"
                            >
                                Add to list
                            </button>
                        </div>

                        {details.postphd.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-200 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Employer
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Department/Division
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Position held
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Nature of Work
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Start Date
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        End Date
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-200 bg-white divide-y divide-gray-200">
                                    {renderPostPhd}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
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
                                    value={pre.employer}
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
                                    value={pre.department}
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
                                    value={pre.position}
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
                                    value={pre.nature}
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
                                    value={pre.startdate}
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
                                    value={pre.enddate}
                                    onChange={(e) => {
                                        updateEmployment(e, "prephd");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-right mt-5">
                            <button
                                onClick={(e) => {
                                    addToList(e, "prephd", pre);
                                    setPre({
                                        ...empdetails
                                    });
                                }}
                                className="btn"
                            >
                                Add to list
                            </button>
                        </div>

                        {details.prephd.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-200 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Employer
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Department/Division
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Position held
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Nature of Work
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        Start Date
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600 truncate">
                                        End Date
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-200 bg-white divide-y divide-gray-200">
                                    {renderPrePhd}
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

export default Employment;
