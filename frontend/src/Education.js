import React from 'react'

function Education({nextform, prevform, details, setDetails}) {
    
    function updateEducation(e, degree){
        var newDetails={...details}
        newDetails[degree][e.target.name]=e.target.value
        setDetails(newDetails)
    }

    const saveInfoNext = (e)=>{
        e.preventDefault();
        nextform();
    }

    const goPrev = (e)=>{
        e.preventDefault();
        prevform();
    }
    return (
        <div>
            <form className="flex flex-col">
                <h3 className="font-bold my-5 text-xl text-red-700">Education & Employment</h3>
                <h2 className="font-bold my-3">A. PhD/MD</h2>
                <div className="grid grid-cols-2 gap-y-3 gap-x-5">
                <div className="form-field">
                    <label htmlFor="degree">
                        Degree Name
                    </label>
                    <input type="text" id="degree" name="degree" value={details.phd.degree} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="title">
                        Title of Thesis
                    </label>
                    <input type="text" id="title" name="title" value={details.phd.title} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="affiliation">
                        Affiliation of Supervisor 
                    </label>
                    <input type="text" id="affiliation" name="affiliation" value={details.phd.affiliation} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="supervisor">
                        Name of Supervisor
                    </label>
                    <input type="text" id="supervisor" name="supervisor" value={details.phd.supervisor} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="university">
                        University
                    </label>
                    <input type="text" id="university" name="university" value={details.phd.university} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="discipline">
                        Discipline
                    </label>
                    <input type="text" id="discipline" name="discipline" value={details.phd.discipline} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="college">
                        College    
                    </label>
                <input type="text" id="college" name="college" value={details.phd.college} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="startdate">
                        Start Date    
                    </label>
                <input type="date" id="startdate" name="startdate" value={details.phd.startdate} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="submitdate">
                        Date of Ph.D Thesis (Submitted for Evaluation)    
                    </label>
                <input type="date" id="submitdate" name="submitdate" value={details.phd.submitdate} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="defenddate">
                        Date of Ph.D Thesis (Defended Successfully)    
                    </label>
                <input type="date" id="defenddate" name="defenddate" value={details.phd.defenddate} onChange={e=>{updateEducation(e,"phd")}}/>
                </div>
                </div>

                <h2 className="font-bold my-3">B. ME/MTech/MPhil/MBA/PGDM details</h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                <div className="form-field">
                    <label htmlFor="name">
                        Degree Name
                    </label>
                    <input type="text" id="name" name="name" value={details.masters.name} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="discipline">
                        Discipline
                    </label>
                    <input type="text" id="discipline" name="discipline" value={details.masters.discipline} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="university">
                        University 
                    </label>
                    <input type="text" id="university" name="university" value={details.masters.university} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="startdate">
                        Start Date
                    </label>
                    <input type="date" id="startdate" name="startdate" value={details.masters.startdate} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="enddate">
                        End Date
                    </label>
                    <input type="date" id="enddate" name="enddate" value={details.masters.enddate} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="division">
                        Division/Awarded
                    </label>
                    <input type="text" id="division" name="division" value={details.masters.division} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="system">
                        System of Awarding Marks    
                    </label>
                <input type="text" id="system" name="system" value={details.masters.system} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="marks">
                        %Marks/Grade    
                    </label>
                <input type="text" id="marks" name="marks" value={details.masters.marks} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="college">
                        College    
                    </label>
                <input type="text" id="college" name="college" value={details.masters.college} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="others">
                        Others    
                    </label>
                <input type="text" id="others" name="others" value={details.masters.others} onChange={e=>{updateEducation(e,"masters")}}/>
                </div>
                </div>

                <h2 className="font-bold my-3">C. BE/BTech/MA/MSc/MCom/MCA details</h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                <div className="form-field">
                    <label htmlFor="name">
                        Degree Name
                    </label>
                    <input type="text" id="name" name="name" value={details.bachelors1.name} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="discipline">
                        Discipline
                    </label>
                    <input type="text" id="discipline" name="discipline" value={details.bachelors1.discipline} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="university">
                        University 
                    </label>
                    <input type="text" id="university" name="university" value={details.bachelors1.university} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="startdate">
                        Start Date
                    </label>
                    <input type="date" id="startdate" name="startdate" value={details.bachelors1.startdate} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="enddate">
                        End Date
                    </label>
                    <input type="date" id="enddate" name="enddate" value={details.bachelors1.enddate} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="division">
                        Division/Awarded
                    </label>
                    <input type="text" id="division" name="division" value={details.bachelors1.division} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="system">
                        System of Awarding Marks    
                    </label>
                <input type="text" id="system" name="system" value={details.bachelors1.system} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="marks">
                        %Marks/Grade    
                    </label>
                <input type="text" id="marks" name="marks" value={details.bachelors1.marks} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="college">
                        College    
                    </label>
                <input type="text" id="college" name="college" value={details.bachelors1.college} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="others">
                        Others    
                    </label>
                <input type="text" id="others" name="others" value={details.bachelors1.others} onChange={e=>{updateEducation(e,"bachelors1")}}/>
                </div>
                </div>

                <h2 className="font-bold my-3">D. BSc/BA/BCom/BCA/BBA details</h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                <div className="form-field">
                    <label htmlFor="name">
                        Degree Name
                    </label>
                    <input type="text" id="name" name="name" value={details.bachelors2.name} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="discipline">
                        Discipline
                    </label>
                    <input type="text" id="discipline" name="discipline" value={details.bachelors2.discipline} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="university">
                        University 
                    </label>
                    <input type="text" id="university" name="university" value={details.bachelors2.university} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="startdate">
                        Start Date
                    </label>
                    <input type="date" id="startdate" name="startdate" value={details.bachelors2.startdate} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="enddate">
                        End Date
                    </label>
                    <input type="date" id="enddate" name="enddate" value={details.bachelors2.enddate} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="division">
                        Division/Awarded
                    </label>
                    <input type="text" id="division" name="division" value={details.bachelors2.division} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="system">
                        System of Awarding Marks    
                    </label>
                <input type="text" id="system" name="system" value={details.bachelors2.system} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="marks">
                        %Marks/Grade    
                    </label>
                <input type="text" id="marks" name="marks" value={details.bachelors2.marks} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="college">
                        College    
                    </label>
                <input type="text" id="college" name="college" value={details.bachelors2.college} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="others">
                        Others    
                    </label>
                <input type="text" id="others" name="others" value={details.bachelors2.others} onChange={e=>{updateEducation(e,"bachelors2")}}/>
                </div>
                </div>

                <h2 className="font-bold my-3">E. Any other degree(if relevant and not covered above)</h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                <div className="form-field">
                    <label htmlFor="name">
                        Degree Name
                    </label>
                    <input type="text" id="name" name="name" value={details.other.name} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="discipline">
                        Discipline
                    </label>
                    <input type="text" id="discipline" name="discipline" value={details.other.discipline} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="university">
                        University 
                    </label>
                    <input type="text" id="university" name="university" value={details.other.university} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="startdate">
                        Start Date
                    </label>
                    <input type="date" id="startdate" name="startdate" value={details.other.startdate} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="enddate">
                        End Date
                    </label>
                    <input type="date" id="enddate" name="enddate" value={details.other.enddate} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="division">
                        Division/Awarded
                    </label>
                    <input type="text" id="division" name="division" value={details.other.division} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="system">
                        System of Awarding Marks    
                    </label>
                <input type="text" id="system" name="system" value={details.other.system} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="marks">
                        %Marks/Grade    
                    </label>
                <input type="text" id="marks" name="marks" value={details.other.marks} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="college">
                        College    
                    </label>
                <input type="text" id="college" name="college" value={details.other.college} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                <div className="form-field">
                    <label htmlFor="others">
                        Others    
                    </label>
                <input type="text" id="others" name="others" value={details.other.others} onChange={e=>{updateEducation(e,"others")}}/>
                </div>
                </div>

                

                
                <div className="flex items-center justify-between">
                <button onClick={goPrev} className="bg-blue-500 text-white w-20 my-5 p-1 rounded">
                    Prev
                </button>
                <button onClick={saveInfoNext} className="bg-green-700 text-white w-20 my-5 p-1 rounded">
                    Next
                </button>
                </div>
            </form>
        </div>
    )
}

export default Education
