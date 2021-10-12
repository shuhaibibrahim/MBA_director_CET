import React from 'react'

function Employment() {
    return (
        <div>
            <form className="flex flex-col">
                <h3 className="font-bold text-lg my-4">Employment Details</h3>
                <h2 className="font-bold my-4">(i)	Post-PhD employment details (from date thesis is approved till today in chronological order)</h2>
                <div className="grid gap-y-3">
                <div className="form-field">
                    <label htmlFor="">
                        Employer
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Department/Division
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Position held
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Nature of Work
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Start Date
                    </label>
                    <input type="date" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        End Date
                    </label>
                    <input type="date" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Employer   
                    </label>
                <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Department/Division  
                    </label>
                <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Position held
                    </label>
                <input type="date" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Nature of Work    
                    </label>
                <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Start Date   
                    </label>
                <input type="date" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        End Date    
                    </label>
                <input type="date" />
                </div>
                </div>

                <h2 className="font-bold my-4">(ii)	Pre-PhD employment details (Post-BTech/Msc/MCA till date of joining PhD Programme)</h2>
                <div className="grid gap-y-3">
                <div className="form-field">
                    <label htmlFor="">
                        Employer
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Department/Division
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Position held
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Nature of Work
                    </label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Start Date
                    </label>
                    <input type="date" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        End Date
                    </label>
                    <input type="date" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Employer   
                    </label>
                <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Department/Division  
                    </label>
                <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Position held
                    </label>
                <input type="date" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Nature of Work    
                    </label>
                <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        Start Date   
                    </label>
                <input type="date" />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        End Date    
                    </label>
                <input type="date" />
                </div>
                </div>
                
                <div className="text-right">
                <button className="bg-blue-500 text-white w-20 my-5 p-1 rounded">
                    Next
                </button>
                </div>
            </form>
        </div>
    )
}

export default Employment
