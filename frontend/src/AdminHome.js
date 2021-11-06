import React, { useEffect, useState } from 'react'
import { ref, set, onValue } from "firebase/database"
import { db } from "./firebase_config";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";


function AdminHome() {
    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        var dbRef = ref(db, "users/");

        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {

                const userdata=snapshot.val()

                var tempDetails=[]

                var arrayObj = {};
                var arrNames = [
                    "awards",
                    "thesis",
                    "projects1",
                    "projects2",
                    "projects3",
                    "projects4",
                    "projects5",
                    "books",
                    "publications1",
                    "publications2",
                    "publications3",
                    "publications4",
                    "publications5",
                    "patents",
                    "filedPatents",
                    "referee",
                ];

                for(var uid in userdata)
                {
                    arrayObj={}
                    for (var aname of arrNames) {
                        if (snapshot.val()[aname] === undefined) arrayObj[aname] = [];
                    }

                    tempDetails.push({
                        ...userdata[uid],
                        ...arrayObj
                    })
                }

                console.log(tempDetails)

                // setDetails({
                //     ...snapshot.val(),
                //     ...arrayObj,
                // });

                setUserDetails([...tempDetails])

                // console.log(snapshot.val().formno);
                // setformno(snapshot.val().formno);
                // console.log({
                //     ...snapshot.val(),
                //     ...arrayObj,
                // });
            } 
        });
    }, [])

    
    const pdfExportComponent = React.useRef(null);
    const [download, setDownload] = useState(false)
    
    const ListPdf =() => {
        return(
        <PDFExport paperSize="A4" scale={0.6} margin="1.3cm" ref={pdfExportComponent}>
        <div className="h-full w-full flex flex-col items-center justify-center mt-12">
            <table className="table-auto w-9/12 border-2 border-collapse rounded-xl drop-shadow-2xl">
                <thead className="bg-primary text-white">
                    <tr className="border border-white-400 border-collapse">
                    <th className="p-3 border border-white-400 border-collapse">Sl.No</th>
                    <th className="p-3 border border-white-400 border-collapse">Full Name</th>
                    <th className="p-3 border border-white-400 border-collapse">E-mail</th>
                    <th className="p-3 border border-white-400 border-collapse">DOB</th>
                    <th className="p-3 border border-white-400 border-collapse">Gender</th>
                    <th className="p-3 border border-white-400 border-collapse">Mobile No.</th>
                    </tr>
                </thead>
                <tbody className="">
                    {userDetails.map((item,index)=>{
                        return(
                            <tr className="border border-gray-400 border-collapse odd:bg-white hover:bg-primary hover:text-white">
                                <td className="p-2 border border-gray-400 border-collapse">{index+1}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.email}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.fullname}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.dob}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.gender}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.mob}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </PDFExport>
        )
    }


    return (
        <div className="h-full w-full flex flex-col items-center justify-center mt-9 mb-12">
            <div className={download?"w-full":"hidden"}>
                <PDFExport paperSize="A4" scale={0.6} margin="1.3cm" ref={pdfExportComponent}>
                <div className="h-full w-full flex flex-col items-center justify-center mt-12">
                    <table className="table-auto w-full border-2 border-collapse rounded-xl drop-shadow-2xl">
                        <thead className="bg-primary text-white">
                            <tr className="border border-white-400 border-collapse">
                            <th className="p-3 border border-white-400 border-collapse">Sl.No</th>
                            <th className="p-3 border border-white-400 border-collapse">Full Name</th>
                            <th className="p-3 border border-white-400 border-collapse">E-mail</th>
                            <th className="p-3 border border-white-400 border-collapse">DOB</th>
                            <th className="p-3 border border-white-400 border-collapse">Gender</th>
                            <th className="p-3 border border-white-400 border-collapse">Mobile No.</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {userDetails.map((item,index)=>{
                                return(
                                    <tr className="border border-gray-400 border-collapse odd:bg-white hover:bg-primary hover:text-white">
                                        <td className="p-2 border border-gray-400 border-collapse">{index+1}</td>
                                        <td className="p-2 border border-gray-400 border-collapse break-all">{item.email}</td>
                                        <td className="p-2 border border-gray-400 border-collapse">{item.fullname}</td>
                                        <td className="p-2 border border-gray-400 border-collapse">{item.dob}</td>
                                        <td className="p-2 border border-gray-400 border-collapse">{item.gender}</td>
                                        <td className="p-2 border border-gray-400 border-collapse">{item.mob}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                </PDFExport>
            </div>

            <div className="flex flex-row w-9/12 justify-end">
                <button className="bg-white text-primary p-4 rounded-3xl my-3 filter drop-shadow-xl hover:bg-primary hover:text-white font-semibold"
                    onClick={()=>{
                        // pdfExportComponent.current.save();
                        savePDF(document.getElementsByClassName("pdf"), {
                            paperSize: "A4",
                        });
                        // setDownload(true)
                        // if (pdfExportComponent.current) {
                        //     setDownload(false);
                        // }
                    }}>Generate PDF</button>
            </div>
            <table className="table-auto w-9/12 rounded-xl">
                <thead className="bg-primary text-white">
                    <tr className="border border-white-400 border-collapse">
                    <th className="p-3 border border-white-400 border-collapse">Sl.No</th>
                    <th className="p-3 border border-white-400 border-collapse">Full Name</th>
                    <th className="p-3 border border-white-400 border-collapse">E-mail</th>
                    <th className="p-3 border border-white-400 border-collapse">DOB</th>
                    <th className="p-3 border border-white-400 border-collapse">Gender</th>
                    <th className="p-3 border border-white-400 border-collapse">Mobile No.</th>
                    <th className="p-3 last:bg-gray-100"></th>
                    </tr>
                </thead>
                <tbody className="">
                    {userDetails.map((item,index)=>{
                        return(
                            <tr className="odd:bg-white hover:bg-primary hover:text-white">
                                <td className="p-2 border border-gray-400 border-collapse">{index+1}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.email}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.fullname}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.dob}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.gender}</td>
                                <td className="p-2 border border-gray-400 border-collapse">{item.mob}</td>
                                <td className="p-2 last:bg-gray-100"> 
                                    <button className="bg-primary rounded-3xl w-full text-white p-2 font-semibold" >View</button> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminHome
