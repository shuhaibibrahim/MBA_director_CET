import React, { useState, useEffect } from "react";

function Referee({ nextform, prevform, details, setDetails }) {
    const [renderReferee, setRenderReferee] = useState(null);

    const [referee, setReferee] = useState({
        name: "",
        designation: "",
        organization: "",
        email: "",
        postaladdress: "",
        phoneno: "",
        id: 0,
    });

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

    // eslint-disable-next-line no-unused-vars
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
        setRenderReferee(
            details.referee.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.name}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.designation}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.organization}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.email}</div>
                    <div className="w-4/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.postaladdress}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.phoneno}</div>
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
        <div className="w-9/12 mx-auto my-6">
            <h2 className="font-bold text-3xl text-secondary">Referees</h2>
            <hr className="my-4" />

            <form className="my-7">
                <div className="sm:flex justify-between">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 pt-4 pb-2">
                        Note: Referees should not be friends/relatives, but strictly professional
                    </h4>
                    <div className="form-card rounded-xl ">
                        <div className="form-field sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                            <label className="form-label mb-1" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="form-control w-full"
                                type="text"
                                id="name"
                                name="name"
                                value={referee.name}
                                onChange={(e) => {
                                    setReferee({ ...referee, name: e.target.value });
                                }}
                            />
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="designation">
                                    Designation
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="designation"
                                    name="designation"
                                    value={referee.designation}
                                    onChange={(e) => {
                                        setReferee({ ...referee, designation: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-7/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="organization">
                                    Organization
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    value={referee.organization}
                                    onChange={(e) => {
                                        setReferee({ ...referee, organization: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="postaladdress">
                                Postal Address
                            </label>
                            <input
                                className="form-control w-full"
                                type="text"
                                id="postaladdress"
                                name="postaladdress"
                                value={referee.postaladdress}
                                onChange={(e) => {
                                    setReferee({ ...referee, postaladdress: e.target.value });
                                }}
                            />
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={referee.email}
                                    onChange={(e) => {
                                        setReferee({ ...referee, email: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="phoneno">
                                    Phone Number
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="tel"
                                    id="phoneno"
                                    name="phoneno"
                                    value={referee.phoneno}
                                    onChange={(e) => {
                                        setReferee({
                                            ...referee,
                                            phoneno: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-right mt-5">
                            <button
                                onClick={(e) => {
                                    addToList(e, "referee", referee);
                                    setReferee({
                                        ...referee,
                                        id: details.referee.length,
                                    });
                                }}
                                className="btn"
                            >
                                Add to list
                            </button>
                        </div>
                        {details.referee.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-200 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Name
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Designation
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Organization
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Email Address
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Postal Address
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Phone No.
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-200 bg-white divide-y divide-gray-200">
                                    {renderReferee}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <button onClick={goPrev} className="btn">
                        Prev
                    </button>
                    <button onClick={saveInfoNext} className="btn-secondary">
                        Finish
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Referee;
