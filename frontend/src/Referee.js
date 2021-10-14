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
                <div key={item.id} className="flex items-center border-2 border-black mb-2 justify-between">
                    <div className="flex flex-col">
                        <div>Name: {item.name}</div>
                        <div>Designation: {item.designation}</div>
                        <div>Organization: {item.organization}</div>
                        <div>Email Address: {item.email}</div>
                        <div>Postal Address: {item.postaladdress}</div>
                        <div>Phone Number: {item.phoneno}</div>
                    </div>

                    <button
                        className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
                        onClick={(e) => {
                            removeItem(e, "referee", item.id);
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
                <h2 className="font-bold my-3">Referees</h2>
                <div className="transition duration-500 ease-in-out">
                    <h2 className="font-bold text-sm my-3">
                        Note: Referees should not be friends/relatives, but strictly professional
                    </h2>
                    {renderReferee}

                    <div className="grid gap-3 mb-7">
                        <div className="form-field">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={referee.name}
                                onChange={(e) => {
                                    setReferee({ ...referee, name: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="designation">Designation</label>
                            <input
                                type="text"
                                id="designation"
                                name="designation"
                                value={referee.designation}
                                onChange={(e) => {
                                    setReferee({ ...referee, designation: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="organization">Organization</label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={referee.organization}
                                onChange={(e) => {
                                    setReferee({ ...referee, organization: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={referee.email}
                                onChange={(e) => {
                                    setReferee({ ...referee, email: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="postaladdress">Postal Address</label>
                            <input
                                type="text"
                                id="postaladdress"
                                name="postaladdress"
                                value={referee.postaladdress}
                                onChange={(e) => {
                                    setReferee({ ...referee, postaladdress: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="phoneno">Phone Number</label>
                            <input
                                type="text"
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
                </div>

                <div className="text-center">
                    <button
                        onClick={(e) => {
                            addToList(e, "referee", referee);
                            setReferee({
                                ...referee,
                                id: details.referee.length,
                            });
                        }}
                        className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
                    >
                        Add to list
                    </button>
                </div>

                <div className="flex items-center justify-between">
                    <button onClick={goPrev} className="bg-blue-500 text-white w-20 my-5 p-1 rounded">
                        Prev
                    </button>
                    <button onClick={saveInfoNext} className="bg-green-700 text-white w-20 my-5 p-1 rounded">
                        Finish
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Referee;
