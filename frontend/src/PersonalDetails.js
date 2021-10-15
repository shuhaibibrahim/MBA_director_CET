import React from "react";
// import { db } from "./firebase_config";

function PersonalDetails({ nextform, details, setDetails }) {
    function updatePersonal(e) {
        var newPersonal = { ...details };
        newPersonal[e.target.name] = e.target.value;
        setDetails(newPersonal);
    }

    function saveInfoNext(e) {
        e.preventDefault();
        // var newDetails={...fullDetails,...personal}
        // setFullDetails(newDetails)
        nextform();
    }

    return (
        <div className="w-9/12 mx-auto my-6">
            <h2 className="font-bold text-3xl text-tertiary">Personal Details</h2>
            <hr className="my-4" />

            <form className="my-7">
                <div className="sm:flex justify-between">
                    <h3 className="section-label">Account Details</h3>
                    <div className="form-card rounded-tl-xl rounded-tr-xl">
                        <label className="form-label mb-1" htmlFor="email">
                            Account Email
                        </label>
                        <input
                            className="form-control w-full sm:w-7/12"
                            id="email"
                            name="email"
                            type="email"
                            value={details.email}
                            onChange={updatePersonal}
                        />
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label">Personal Details</h3>
                    <div className="form-card">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="fullname">
                                Full Name
                            </label>
                            <input
                                className="form-control w-full sm:w-7/12"
                                id="fullname"
                                name="fullname"
                                type="text"
                                value={details.fullname}
                                onChange={updatePersonal}
                            />
                        </div>
                        <div className="sm:flex">
                            <div className="form-field mt-4 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="dob">
                                    Date of Birth
                                </label>
                                <input
                                    className="form-control"
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    value={details.dob}
                                    onChange={updatePersonal}
                                />
                            </div>
                            <div className="form-field mt-4 flex-1 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="pob">
                                    Place of Birth
                                </label>
                                <input
                                    className="form-control sm:w-full lg:w-4/6 xl:w-7/12"
                                    placeholder="City, Country"
                                    id="pob"
                                    type="text"
                                    name="pob"
                                    value={details.pob}
                                    onChange={updatePersonal}
                                />
                            </div>
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="nation">
                                Nationality
                            </label>
                            <input
                                className="form-control w-full sm:w-5/12"
                                type="text"
                                id="nation"
                                name="nation"
                                value={details.nation}
                                onChange={updatePersonal}
                            />
                        </div>
                        <div className="sm:flex">
                            <div className="form-field mt-4 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="gender">
                                    Gender
                                </label>
                                <select className="form-control" name="gender" id="gender" onChange={updatePersonal}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <div className="form-field mt-4 flex-1 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="marital">
                                    Marital Status
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="marital"
                                    name="marital"
                                    value={details.marital}
                                    onChange={updatePersonal}
                                />
                            </div>
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="father">
                                Father's Name
                            </label>
                            <input
                                className="form-control w-full sm:w-7/12"
                                type="text"
                                id="father"
                                name="father"
                                value={details.father}
                                onChange={updatePersonal}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label">Current Contact Information</h3>
                    <div className="form-card">
                        <div className="sm:flex">
                            <div className="form-field flex-1 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="mob">
                                    Mobile Number
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="mob"
                                    name="mob"
                                    value={details.mob}
                                    onChange={updatePersonal}
                                />
                            </div>
                            <div className="form-field flex-1 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={details.phone}
                                    onChange={updatePersonal}
                                />
                            </div>
                        </div>
                        <div className="sm:flex">
                            <div className="form-field mt-4 flex-1 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="pemail">
                                    Primary Email Address
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="email"
                                    id="pemail"
                                    name="pemail"
                                    value={details.pemail}
                                    onChange={updatePersonal}
                                />
                            </div>
                            <div className="form-field mt-4 flex-1 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="semail">
                                    Secondary Email Address
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="email"
                                    id="semail"
                                    name="semail"
                                    value={details.semail}
                                    onChange={updatePersonal}
                                />
                            </div>
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="address">
                                Current Address
                            </label>
                            <input
                                className="form-control w-full"
                                type="text"
                                id="address"
                                name="address"
                                value={details.address}
                                onChange={updatePersonal}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label">Teaching/Research Interests</h3>
                    <div className="form-card rounded-br-xl rounded-bl-xl">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="resspec">
                                Your Research Specialization
                            </label>
                            <input
                                className="form-control w-full sm:w-1/2"
                                type="text"
                                id="resspec"
                                name="resspec"
                                value={details.resspec}
                                onChange={updatePersonal}
                            />
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="tr">
                                Statement of your "Teaching/Research Administration agenda" for the next 3 years
                            </label>
                            <textarea
                                className="form-control w-full h-24"
                                placeholder="Include 2 to 3 sentences"
                                type="text"
                                id="tr"
                                name="tr"
                                value={details.tr}
                                onChange={updatePersonal}
                            />
                        </div>
                        <div className="form-field mt-3">
                            <label className="form-label mb-1" htmlFor="cc">
                                Name core of courses you like to teach at MBA level
                            </label>
                            <textarea
                                className="form-control w-full h-24"
                                type="text"
                                id="cc"
                                name="cc"
                                value={details.cc}
                                onChange={updatePersonal}
                            />
                        </div>
                        <div className="form-field mt-3">
                            <label className="form-label mb-1" htmlFor="ec">
                                Name any elective course you like to offer
                            </label>
                            <textarea
                                className="form-control w-full h-24"
                                placeholder="Include 3 offers maximum"
                                type="text"
                                id="ec"
                                name="ec"
                                value={details.ec}
                                onChange={updatePersonal}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-right mt-6">
                    <button className="btn" onClick={saveInfoNext}>
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}
export default PersonalDetails;
