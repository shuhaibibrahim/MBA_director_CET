import React from 'react'
import { PDFExport } from "@progress/kendo-react-pdf";
import { db } from './firebase_config'
import { ref, set } from 'firebase/database'

function GeneratePDF({details,setformno,scrollTop,user}) {
    const pdfExportComponent = React.useRef(null);

    const pushToDatabase=()=>{
      
      console.log(user)
      set(ref(db, 'users/' + user.uid), {
        ...details,
        userSignInEmail:user.email
      });
    }

    return (
        <div>

        <PDFExport paperSize="A4" scale={0.6} margin="2cm" ref={pdfExportComponent}>
                <h3 className="font-bold my-5 text-xl text-red-700">Personal Details</h3>
                    <h3 className="font-bold my-4">Account Details</h3>
                    <p><span className="font-semibold">Account Email</span> : {details.email}</p>
                    <h3 className="font-bold my-4">Personal Details</h3>
                        <p className="mb-1"><span className="font-semibold">Full Name</span> : {details.fullname}</p>
                        <p className="mb-1"><span className="font-semibold">Date of Birth</span> : {details.dob}</p>
                        <p className="mb-1"><span className="font-semibold">Place of Birth</span> : {details.pob}</p>
                        <p className="mb-1"><span className="font-semibold">Gender</span> : {details.gender}</p>
                        <p className="mb-1"><span className="font-semibold">Nationality</span> : {details.nation}</p>
                        <p className="mb-1"><span className="font-semibold">Father's Name</span> : {details.father}</p>
                        <p className="mb-1"><span className="font-semibold">Marital status</span> : {details.marital}</p>
                    <h3 className="font-bold my-4">Current Contact Information</h3>
                        <p className="mb-1"><span className="font-semibold">Mobile Number</span> : {details.mob}</p>
                        <p className="mb-1"><span className="font-semibold">Phone Number</span> : {details.phone}</p>
                        <p className="mb-1"><span className="font-semibold">Primary Email Address</span> : {details.pemail}</p>
                        <p className="mb-1"><span className="font-semibold">Secondary Email Address</span> : {details.semail}</p>
                        <p className="mb-1"><span className="font-semibold">Current Address</span> : {details.address}</p>
                    <h3 className="font-bold my-4">Teaching/Research Interests</h3>   
                        <p className="mb-1"><span className="font-semibold">Your Research Specialization</span>:<br/>{details.resspec}</p>
                        <p className="mb-1"><span className="font-semibold">Statement of your "Teaching/Research Administration agenda"
                                                           for the next 3 years(2-3 sentences)</span> :<br/>{details.tr}</p>
                        <p className="mb-1"><span className="font-semibold">Name core of courses you like to teach at MBA level</span> :<br/> {details.cc}</p>
                        <p className="mb-1"><span className="font-semibold">Name any elective course you like to offer (Maximum 3 offers)</span> :<br/>{details.ec}</p>
                        
        

                    <h3 className="font-bold my-5 text-xl text-red-700">Education & Employment</h3>
                    <h3 className="font-bold my-4">A. PhD/MD</h3>
                        <p className="mb-1"><span className="font-semibold">Degree Name</span> : {details.phd.degree}</p>
                        <p className="mb-1"><span className="font-semibold">Title of Thesis</span> : {details.phd.title}</p>
                        <p className="mb-1"><span className="font-semibold">Affliiation of Supervisor</span> : {details.phd.affiliation}</p>
                        <p className="mb-1"><span className="font-semibold">Name of Supervisor</span> : {details.phd.supervisor}</p>
                        <p className="mb-1"><span className="font-semibold">University</span> : {details.phd.university}</p>
                        <p className="mb-1"><span className="font-semibold">Discipline</span> : {details.phd.discipline}</p>
                        <p className="mb-1"><span className="font-semibold">College</span> : {details.phd.college}</p>
                        <p className="mb-1"><span className="font-semibold">Start Date</span> : {details.phd.startdate}</p>
                        <p className="mb-1"><span className="font-semibold">Date of Ph.D Thesis (Submitted for Evaluation)</span> : {details.phd.submitdate}</p>
                        <p className="mb-1"><span className="font-semibold">Date of Ph.D Thesis (Defended Successfully)</span> : {details.phd.defenddate}</p>
          
                    <h3 className="font-bold my-4">B. ME/MTech/MPhil/MBA/PGDM details</h3>   
                        <p className="mb-1"><span className="font-semibold">Degree Name</span>: {details.masters.name}</p>
                        <p className="mb-1"><span className="font-semibold">Discipline</span> : {details.masters.discipline}</p>
                        <p className="mb-1"><span className="font-semibold">University</span> :  {details.masters.university}</p>
                        <p className="mb-1"><span className="font-semibold">Start Date</span> : {details.masters.startdate}</p>
                        <p className="mb-1"><span className="font-semibold">End Date</span> : {details.masters.enddate}</p>
                        <p className="mb-1"><span className="font-semibold">Division/Awarded</span> : {details.masters.division}</p>
                        <p className="mb-1"><span className="font-semibold">System of Awarding Marks</span> : {details.masters.system}</p>
                        <p className="mb-1"><span className="font-semibold">% Marks/Grade</span> : {details.masters.marks}</p>
                        <p className="mb-1"><span className="font-semibold">College</span> : {details.masters.college}</p>
                        <p className="mb-1"><span className="font-semibold">Others</span> : {details.masters.others}</p>

                    {details.bachelors1.name && (
                        <div>
                        <h3 className="font-bold my-4">C. BE/BTech/MA/MSc/MCom/MCA details</h3>   
                        <p className="mb-1"><span className="font-semibold">Degree Name</span> : {details.bachelors1.name}</p>
                        <p className="mb-1"><span className="font-semibold">Discipline</span> : {details.bachelors1.discipline}</p>
                        <p className="mb-1"><span className="font-semibold">University</span> : {details.bachelors1.university}</p>
                        <p className="mb-1"><span className="font-semibold">Start Date</span> : {details.bachelors1.startdate}</p>
                        <p className="mb-1"><span className="font-semibold">End Date</span> : {details.bachelors1.enddate}</p>
                        <p className="mb-1"><span className="font-semibold">Division/Awarded</span> : {details.bachelors1.division}</p>
                        <p className="mb-1"><span className="font-semibold">System of Awarding Marks</span> : {details.bachelors1.system}</p>
                        <p className="mb-1"><span className="font-semibold">% Marks/Grade</span> : {details.bachelors1.marks}</p>
                        <p className="mb-1"><span className="font-semibold">College</span> : {details.bachelors1.college}</p>
                        <p className="mb-1"><span className="font-semibold">Others</span> : {details.bachelors1.others}</p>
                        </div>
                    )}

                    {details.bachelors2.name && (
                        <div>
                        <h3 className="font-bold my-4">C. BE/BTech/MA/MSc/MCom/MCA details</h3>   
                        <p className="mb-1"><span className="font-semibold">Degree Name</span> : {details.bachelors2.name}</p>
                        <p className="mb-1"><span className="font-semibold">Discipline</span> : {details.bachelors2.discipline}</p>
                        <p className="mb-1"><span className="font-semibold">University</span> : {details.bachelors2.university}</p>
                        <p className="mb-1"><span className="font-semibold">Start Date</span> : {details.bachelors2.startdate}</p>
                        <p className="mb-1"><span className="font-semibold">End Date</span> : {details.bachelors2.enddate}</p>
                        <p className="mb-1"><span className="font-semibold">Division/Awarded</span> : {details.bachelors2.division}</p>
                        <p className="mb-1"><span className="font-semibold">System of Awarding Marks</span> : {details.bachelors2.system}</p>
                        <p className="mb-1"><span className="font-semibold">% Marks/Grade</span> : {details.bachelors2.marks}</p>
                        <p className="mb-1"><span className="font-semibold">College</span> : {details.bachelors2.college}</p>
                        <p className="mb-1"><span className="font-semibold">Others</span> : {details.bachelors2.others}</p>
                        </div>
                    )}


                    {details.other.name && (
                        <div>
                        <h3 className="font-bold my-4">C. BE/BTech/MA/MSc/MCom/MCA details</h3>   
                        <p className="mb-1"><span className="font-semibold">Degree Name</span> : {details.other.name}</p>
                        <p className="mb-1"><span className="font-semibold">Discipline</span> : {details.other.discipline}</p>
                        <p className="mb-1"><span className="font-semibold">University</span> : {details.other.university}</p>
                        <p className="mb-1"><span className="font-semibold">Start Date</span> : {details.other.startdate}</p>
                        <p className="mb-1"><span className="font-semibold">End Date</span> : {details.other.enddate}</p>
                        <p className="mb-1"><span className="font-semibold">Division/Awarded</span> : {details.other.division}</p>
                        <p className="mb-1"><span className="font-semibold">System of Awarding Marks</span> : {details.other.system}</p>
                        <p className="mb-1"><span className="font-semibold">% Marks/Grade</span> : {details.other.marks}</p>
                        <p className="mb-1"><span className="font-semibold">College</span> : {details.other.college}</p>
                        <p className="mb-1"><span className="font-semibold">Others</span> : {details.other.others}</p>
                        </div>
                    )}


                    <h3 className="font-bold my-4">Employment Details</h3>
                    <h3 className="font-bold my-4">(i) Post-PhD employment details (from date thesis is approved till today in chronological order)</h3>
                    <p className="mb-1"><span className="font-semibold">Employer</span> : {details.postphd.employer}</p>
                    <p className="mb-1"><span className="font-semibold">Department/Division</span> : {details.postphd.department}</p>
                    <p className="mb-1"><span className="font-semibold">Position held</span> : {details.postphd.position}</p>
                    <p className="mb-1"><span className="font-semibold">Nature of Work</span> : {details.postphd.nature}</p>
                    <p className="mb-1"><span className="font-semibold">Start Date</span> : {details.postphd.startdate}</p>
                    <p className="mb-1"><span className="font-semibold">End Date</span> : {details.postphd.enddate}</p>

                    <h3 className="font-bold my-4">(ii) Pre-PhD employment details (Post-BTech/Msc/MCA till date of joining PhD Programme)</h3>
                    <p className="mb-1"><span className="font-semibold">Employer</span> : {details.prephd.employer}</p>
                    <p className="mb-1"><span className="font-semibold">Department/Division</span> : {details.prephd.department}</p>
                    <p className="mb-1"><span className="font-semibold">Position held</span> : {details.prephd.position}</p>
                    <p className="mb-1"><span className="font-semibold">Nature of Work</span> : {details.prephd.nature}</p>
                    <p className="mb-1"><span className="font-semibold">Start Date</span> : {details.prephd.startdate}</p>
                    <p className="mb-1"><span className="font-semibold">End Date</span> : {details.prephd.enddate}</p>
                    

                    <h3 className="font-bold my-5 text-xl text-red-700">Awards, Thesis & R&D</h3>
                    <h3 className="font-bold my-4">Honours, Awards etc.</h3>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.awards.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                              <div className="flex flex-col">
                                <div><span className="font-semibold">Award Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Organization</span> : {item.org}</div>
                                <div><span className="font-semibold">Year of Award</span> : {item.year}</div>
                              </div>
                    
                            </div>
                          ))
                    }
                    </div>


                    <h3 className="font-bold my-4">Details of PhD/MTech/MPhil thesis supervised</h3>
                    <h3 className="font-bold my-4">Details of PhD thesis supervised (completed only)</h3>
                    <p className="mb-1"><span className="font-semibold">No. of Ph.D. thesis supervised singly (defended successfully)</span> : {details.singlySupervisedThesis}</p>
                    <p className="mb-1"><span className="font-semibold">No. of Ph.D. thesis supervised jointly (defended successfully)</span> : {details.jointlySupervisedThesis}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.thesis.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                            <div className="flex flex-col">
                                <div><span className="font-semibold">Student Name</span>: {item.studentname}</div>
                                <div><span className="font-semibold">Thesis Title</span>: {item.title}</div>
                                <div><span className="font-semibold">Supervisor</span>: {item.supervisor}</div>
                                <div><span className="font-semibold">Year Successfully Defended</span>:{item.year}</div>
                            </div>
                    
                            </div>
                          ))
                    }

                    </div>

                    <h3 className="font-bold my-4">M.Tech, MPhil, MTech, MBA thesis supervised (completed only)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of MTech/M.Phil/ MBA thesis supervised (completed and defended successfully)</span> : {details.thesisSupervised}</p>
                    

                    <h3 className="font-bold my-4">Details of Industry or Government Sponsored R&D/Consulting projects (Please provide these details if it is relevant to you)</h3>
                    <h3 className="font-bold my-4">Details of sponsored R&D projects (completed, and as Principal Investigator)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of sponsored R&D projects (completed), with you as "Principal Investigator"(where each project is over Rs. 2lakhs)</span>: {details.sponsoredRD1}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.projects1.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                            <div className="flex flex-col">
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Sponsor</span> : {item.sponsor}</div>
                                <div><span className="font-semibold">Duration(years)</span> : {item.years}</div>
                                <div><span className="font-semibold">Grant Amount in Rs.</span> : {item.amount}</div>
                            </div>
                    
                            </div>
                          ))
                    }

                    </div>


                    
                    <h3 className="font-bold my-4">Details of sponsored R&D projects (in-progress and as Principal Investigator)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of sponsored R&D projects(in-progress),with you as "Principal Investigator"(where each project is over Rs. 2lakhs)</span>: {details.sponsoredRD2}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.projects2.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                            <div className="flex flex-col">
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Sponsor</span> : {item.sponsor}</div>
                                <div><span className="font-semibold">Duration(years)</span> : {item.years}</div>
                                <div><span className="font-semibold">Grant Amount in Rs.</span> : {item.amount}</div>
                            </div>
                    
                            </div>
                          ))
                    }

                    </div>

                    <h3 className="font-bold my-4">Details of sponsored R&D projects (Completed and as Co-Principal Investigator)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of sponsored R&D projects (completed),with you as "Co-Principal Investigator"(where each project isover Rs.2lakhs)</span>: {details.sponsoredRD3}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.projects3.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                            <div className="flex flex-col">
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Sponsor</span> : {item.sponsor}</div>
                                <div><span className="font-semibold">Duration(years)</span> : {item.years}</div>
                                <div><span className="font-semibold">Grant Amount in Rs.</span> : {item.amount}</div>
                            </div>
                    
                            </div>
                          ))
                    }

                    </div>

                    <h3 className="font-bold my-4">Details of sponsored R&D projects (in-progress and as Co-Principal Investigator)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of sponsored R&D projects (in-progress),with you as"Co-Principal Investigator" (where each project is over Rs.2lakhs)</span>: {details.sponsoredRD4}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.projects4.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                            <div className="flex flex-col">
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Sponsor</span> : {item.sponsor}</div>
                                <div><span className="font-semibold">Duration(years)</span> : {item.years}</div>
                                <div><span className="font-semibold">Grant Amount in Rs.</span> : {item.amount}</div>
                            </div>
                    
                            </div>
                          ))
                    }

                    </div>

                    <h3 className="font-bold my-4">Details of industry-or government-sponsored consulting assignments completed</h3>
                    <p className="mb-1"><span className="font-semibold">No.of sponsored consulting projects completed, with you as "Chief Investigator" (where each project is over Rs.0.50lakhs)</span>: {details.sponsoredRD5}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.projects5.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                            <div className="flex flex-col">
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Sponsor</span> : {item.sponsor}</div>
                                <div><span className="font-semibold">Duration(years)</span> : {item.years}</div>
                                <div><span className="font-semibold">Grant Amount in Rs.</span> : {item.amount}</div>
                            </div>
                    
                            </div>
                          ))
                    }
                    </div>
                    
                    <h3 className="font-bold my-5 text-xl text-red-700">Books and Publications</h3>
                    <h3 className="font-bold my-4">Publications</h3>
                    <h3 className="font-bold my-4">A. Books</h3>
                    <p className="mb-1"><span className="font-semibold">No.of books published as author or co-author</span>: {details.noBooks}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.books.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                              <div className="flex flex-col">
                                <div><span className="font-semibold">Co-authors</span> : {item.coauthors}</div>
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Edition</span> : {item.edition}</div>
                                <div><span className="font-semibold">Edition</span> : {item.publisher}</div>
                                <div><span className="font-semibold">Date published</span> : {item.date}</div>
                              </div>
                    
                            </div>
                          ))
                    }
                    </div>

                    <h3 className="font-bold my-4">B. Publications (chapters in books)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of papers published as a chapter in a book</span>: {details.noPublished1}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.publications1.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                              <div className="flex flex-col">
                                <div><span className="font-semibold">Co-authors</span> : {item.coauthors}</div>
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Edition</span> : {item.edition}</div>
                                <div><span className="font-semibold">Edition</span> : {item.publisher}</div>
                                <div><span className="font-semibold">Date published</span> : {item.date}</div>
                              </div>
                    
                            </div>
                          ))
                    }
                    </div>

                    <h3 className="font-bold my-4">C. Publications (international journals)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of papers published or accepted for publication in international journals</span>: {details.noPublished2}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.publications2.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                              <div className="flex flex-col">
                                <div><span className="font-semibold">Co-authors</span> : {item.coauthors}</div>
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Journal Name</span> : {item.journalname}</div>
                                <div><span className="font-semibold">Publisher</span> : {item.publisher}</div>
                                <div><span className="font-semibold">Volume No.</span> : {item.volumeno}</div>
                                <div><span className="font-semibold">Pages</span> : {item.pages}</div>
                                <div><span className="font-semibold">Date published</span> : {item.date}</div>
                                <div><span className="font-semibold">Indexed in</span> : {item.indexedin}</div>
                            </div>
                    
                            </div>
                          ))
                    }
                    </div>

                    <h3 className="font-bold my-4">D. Publications(in Indian journals)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of papers published or accepted for publication in Indian journals</span>: {details.noPublished3}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.publications3.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >

                            <div className="flex flex-col">
                                <div><span className="font-semibold">Co-authors</span> : {item.coauthors}</div>
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Journal Name</span> : {item.journalname}</div>
                                <div><span className="font-semibold">Publisher</span> : {item.publisher}</div>
                                <div><span className="font-semibold">Volume No.</span> : {item.volumeno}</div>
                                <div><span className="font-semibold">Pages</span> : {item.pages}</div>
                                <div><span className="font-semibold">Date published</span> : {item.date}</div>
                            </div>
                            
                    
                            </div>
                          ))
                    }
                    </div>

                    <h3 className="font-bold my-4">E. Publications (in peer-reviewed conferences held abroad)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of papers published or accepted for publication in refereed conferences held abroad</span>: {details.noPublished4}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.publications4.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                            <div className="flex flex-col">
                                <div><span className="font-semibold">Co-authors</span> : {item.coauthors}</div>
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Conference Name</span> : {item.conferencename}</div>
                                <div><span className="font-semibold">Location</span> : {item.location}</div>
                                <div><span className="font-semibold">Pages</span> : {item.pages}</div>
                                <div><span className="font-semibold">Month</span> : {item.month}</div>
                                <div><span className="font-semibold">Year Held</span> : {item.yearheld}</div>
                            </div>
                             
                    
                            </div>
                          ))
                    }
                    </div>

                    <h3 className="font-bold my-4">F. Publications/Presentation (in peer-reviewed conferences held in India)</h3>
                    <p className="mb-1"><span className="font-semibold">No.of papers published or accepted for publication or presented in refereed conferences</span>: {details.noPublished5}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.publications5.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                            <div className="flex flex-col">
                                <div><span className="font-semibold">Co-authors</span> : {item.coauthors}</div>
                                <div><span className="font-semibold">Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Conference Name</span> : {item.conferencename}</div>
                                <div><span className="font-semibold">Location</span> : {item.location}</div>
                                <div><span className="font-semibold">Pages</span> : {item.pages}</div>
                                <div><span className="font-semibold">Month</span> : {item.month}</div>
                                <div><span className="font-semibold">Year Held</span> : {item.yearheld}</div>
                            </div>
                             
                    
                            </div>
                          ))
                    }
                    </div>

                    <h3 className="font-bold my-5 text-xl text-red-700">Patents</h3>
                    <h3 className="font-bold my-4">Patents Awarded</h3>
                    <p className="mb-1"><span className="font-semibold">No. of international /Indian patents issued</span>: {details.noPatents}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.patents.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                              <div className="flex flex-col">
                                <div><span className="font-semibold">Patent Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Co Inventors</span> : {item.coInventors}</div>
                                <div><span className="font-semibold">Patent Authority</span> : {item.patentAuthority}</div>
                                <div><span className="font-semibold">Patent Number</span> : {item.patentNumber}</div>
                                <div><span className="font-semibold">Date Published</span> : {item.datePublished}</div>
                                <div><span className="font-semibold">Organization Assigned To</span> : {item.organizationAssignedTo}</div>
                              </div>
                
                            </div>
                          ))
                    } 
                    </div>

                    <h3 className="font-bold my-4">Patents Filed</h3>
                    <p className="mb-1"><span className="font-semibold">No. of international / Indian patents filed</span>: {details.noFiledPatents}</p>
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.filedPatents.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                              <div className="flex flex-col">
                                <div><span className="font-semibold">Patent Title</span> : {item.title}</div>
                                <div><span className="font-semibold">Co Inventors</span> : {item.coInventors}</div>
                                <div><span className="font-semibold">Patent Authority</span> : {item.patentAuthority}</div>
                                <div><span className="font-semibold">Patent Number</span> : {item.patentNumber}</div>
                                <div><span className="font-semibold">Date Published</span> : {item.datePublished}</div>
                                <div><span className="font-semibold">Organization Assigned To</span> : {item.organizationAssignedTo}</div>
                              </div>
                
                            </div>
                          ))
                    } 
                    </div>

                    <h3 className="font-bold my-4">Referees</h3>
                    
                    <div className="divide-y-2 divide-dashed divide-red-500">
                    {
                        details.referee.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center mb-2 justify-between"
                            >
                            <div className="flex flex-col">
                                <div><span className="font-semibold">Name</span>: {item.name}</div>
                                <div><span className="font-semibold">Designation</span>: {item.designation}</div>
                                <div><span className="font-semibold">Organization</span>: {item.organization}</div>
                                <div><span className="font-semibold">Email Address</span>: {item.email}</div>
                                <div><span className="font-semibold">Postal Address</span>: {item.postaladdress}</div>
                                <div><span className="font-semibold">Phone Number</span>: {item.phoneno}</div>
                            </div>
                
                            </div>
                          ))
                    } 
                    </div>


        </PDFExport>            
        <div className="flex justify-end space-x-3">
            <button
                className="my-4 bg-blue-600 text-sm px-3 py-2 text-white rounded"
                onClick={()=>{setformno(1);scrollTop()}}
            > Edit
            </button>

            <button
                className="my-4 bg-green-700 text-sm px-3 py-2 text-white rounded"
                onClick={() => {
                pushToDatabase()
                if (pdfExportComponent.current) {
                    pdfExportComponent.current.save();
                }
                }}
            > Submit
            </button>
        </div>
        </div>
    )
}

export default GeneratePDF
