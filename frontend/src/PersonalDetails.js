import React from 'react'

function PersonalDetails() {
    return (
        <div>
            <form className="flex flex-col">
                <h3 className="font-bold my-5 text-xl text-red-700">Personal Details</h3>
                <h3 className="font-bold my-4">Account Details</h3>
                <div className="form-field">
                    <label htmlFor="">
                        Account Email
                    </label>
                    <input type="email" />
                </div>
                <h3 className="font-bold my-4">Personal Details</h3>
                <div className="grid gap-3">
                <div className="form-field">
                    <label htmlFor="">
                        Full Name
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Date of Birth
                    </label>
                    <input type="date" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Place of Birth(City,Country)
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Gender
                    </label>
                    <select name="" id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Nationality
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Father's Name
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Marital Status     
                    </label>
                <input type="text" />
                </div>
                </div>

                <h3 className="font-bold my-4">Current Contact Information</h3>
                <div className="grid gap-3">
                <div className="form-field">
                    <label htmlFor="">
                        Mobile Number    
                    </label>
                <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Phone Number    
                    </label>
                <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Primary Email Address    
                    </label>
                <input type="email" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Secondary Email Address    
                    </label>
                <input type="email" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Current Address    
                    </label>
                <input type="text" />
                </div>
                </div>

                <h3 className="font-bold my-4">Teaching/Research Interests</h3>
                <div className="grid gap-3">
                <div className="form-field">
                    <label htmlFor="">
                        Your Research Specialization   
                    </label>
                <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Statement of your "Teaching/Research Administration agenda"<br/> for the next 3 years(2-3 sentences)
                    </label>
                <textarea type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Name core of courses you like to teach at MBA level 
                    </label>
                <textarea type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Name any elective course you like to offer (Maximum 3 offers) 
                    </label>
                <textarea type="text" />
                </div>
                </div>

                <button className="bg-blue-500 text-white w-20 my-4 p-1 rounded">
                    Next
                </button>
            </form>
        </div>
    )
}
export default PersonalDetails
