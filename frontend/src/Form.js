import React, { useEffect, useState } from "react";
import "./App.css";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Employment from "./Employment";
import Awards from "./Awards";
import Books from "./Books";
import Patents from "./Patents";
import Referee from "./Referee";
import GeneratePDF from "./GeneratePDF";
import { db } from "./firebase_config";
import { ref, set, onValue } from "firebase/database";
import AlreadySubmitted from "./AlreadySubmitted";

export default function Form({ user, logout }) {
    const personal = {
        email: "",
        fullname: "",
        dob: "",
        pob: "", //place of birth
        gender: "Male",
        nation: "",
        father: "",
        marital: "",
        mob: "",
        phone: "",
        pemail: "",
        semail: "",
        address: "",
        resspec: "",
        tr: "", //teaching/research
        cc: "", //core courses
        ec: "", //elective courses
    };

    const phd = {
        degree: "",
        title: "",
        affiliation: "",
        supervisor: "",
        university: "",
        discipline: "",
        college: "",
        startdate: "",
        submitdate: "",
        defenddate: "",
    };

    const degree = {
        name: "",
        discipline: "",
        university: "",
        startdate: "",
        enddate: "",
        division: "",
        system: "",
        marks: "",
        college: "",
        others: "",
    };

    const education = {
        phd: { ...phd },
        masters: { ...degree },
        bachelors1: { ...degree },
        bachelors2: { ...degree },
        other: { ...degree },
    };

    const empdetails = {
        employer: "",
        department: "",
        position: "",
        nature: "",
        startdate: "",
        enddate: "",
    };

    // const employment = {
    //     prephd: { ...empdetails },
    //     postphd: { ...empdetails },
    // };

    const employment = {
        prephd: [],
        postphd: []
    };

    //final state
    const [details, setDetails] = useState({
        ...personal,
        ...education,
        ...employment,
        //Awards and thesis
        awards: [],
        singlySupervisedThesis: null,
        jointlySupervisedThesis: null,
        thesis: [],
        thesisSupervised: null,
        sponsoredRD1: null,
        sponsoredRD2: null,
        sponsoredRD3: null,
        sponsoredRD4: null,
        sponsoredRD5: null,
        projects1: [],
        projects2: [],
        projects3: [],
        projects4: [],
        projects5: [],
        //Books and Publications
        noBooks: 0,
        books: [],
        noPublished1: 0, //No.of papers published as a chapter in a book
        noPublished2: 0,
        noPublished3: 0,
        noPublished4: 0,
        noPublished5: 0,
        publications1: [],
        publications2: [],
        publications3: [],
        publications4: [],
        publications5: [],
        noPatents: 0,
        noFiledPatents: 0,
        patents: [],
        filedPatents: [],
        referee: [],
        formSubmitted: false,
        formno: 1,
    });

    const [formno, setformno] = useState(0);

    useEffect(() => {
        var dbRef = ref(db, "users/" + user.uid);

        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                var arrayObj = {};
                var arrNames = [
                    "postphd",
                    "prephd",
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

                for (var aname of arrNames) {
                    if (snapshot.val()[aname] === undefined) arrayObj[aname] = [];
                }

                // console.log(arrayObj)

                setDetails({
                    ...snapshot.val(),
                    ...arrayObj,
                });

                console.log(snapshot.val().formno);
                setformno(snapshot.val().formno);
                // console.log({
                //     ...snapshot.val(),
                //     ...arrayObj,
                // });
            } else {
                setformno(1);
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     setDetails({
    //         ...details,
    //         formno:formno
    //     })
    // }, [formno])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const saveInfo = (e) => {
        e.preventDefault();
        set(ref(db, "users/" + user.uid), {
            ...details,
        })
            .then(() => {
                alert("Saved successfully");
            })
            .catch(() => {
                alert("Couldnt save data!");
            });
    };

    const nextform = (e) => {
        e.preventDefault();

        setformno(formno + 1);

        set(ref(db, "users/" + user.uid), {
            ...details,
            formno: formno + 1,
        });
        scrollTop();
    };
    const prevform = () => {
        setformno(formno - 1);

        set(ref(db, "users/" + user.uid), {
            ...details,
            formno: formno - 1,
        });
        scrollTop();
    };

    return (
        <>
            {details.formSubmitted ? (
                <AlreadySubmitted />
            ) : (
                <>
                    {formno === 0 || formno === 8 ? (
                        <></>
                    ) : (
                        <>
                            <h1 className="text-4xl text-tertiary font-light mt-8 text-center">
                                Application for MBA Director
                            </h1>
                            <div className="strip">
                                <div className={formno === 1 ? "text-gray-600" : "text-gray-400"}>
                                    <span>1</span>
                                    <span>Personal</span>
                                </div>
                                <div className={formno === 2 ? "text-gray-600" : "text-gray-400"}>
                                    <span>2</span>
                                    <span>Education</span>
                                </div>
                                <div className={formno === 3 ? "text-gray-600" : "text-gray-400"}>
                                    <span>3</span>
                                    <span>Employment</span>
                                </div>
                                <div className={formno === 4 ? "text-gray-600" : "text-gray-400"}>
                                    <span>4</span>
                                    <span>Achievements</span>
                                </div>
                                <div className={formno === 5 ? "text-gray-600" : "text-gray-400"}>
                                    <span>5</span>
                                    <span>Publications</span>
                                </div>
                                <div className={formno === 6 ? "text-gray-600" : "text-gray-400"}>
                                    <span>6</span>
                                    <span>Patents</span>
                                </div>
                                <div className={formno === 7 ? "text-gray-600" : "text-gray-400"}>
                                    <span>7</span>
                                    <span>Referees</span>
                                </div>
                            </div>
                        </>
                    )}
                    {formno === 0 && (
                        <div className="flex-75 flex justify-center items-center">
                            <div className="flex-75 flex justify-center items-center">
                                <div className="text-center h-fit">
                                    <div className="spinner-border" />
                                </div>
                            </div>
                        </div>
                    )}
                    {formno === 1 && (
                        <PersonalDetails
                            nextform={nextform}
                            details={details}
                            setDetails={setDetails}
                            saveInfo={saveInfo}
                        />
                    )}
                    {formno === 2 && (
                        <Education
                            nextform={nextform}
                            prevform={prevform}
                            details={details}
                            setDetails={setDetails}
                            saveInfo={saveInfo}
                        />
                    )}
                    {formno === 3 && (
                        <Employment
                            nextform={nextform}
                            prevform={prevform}
                            details={details}
                            setDetails={setDetails}
                            saveInfo={saveInfo}
                        />
                    )}
                    {formno === 4 && (
                        <Awards
                            nextform={nextform}
                            prevform={prevform}
                            details={details}
                            setDetails={setDetails}
                            saveInfo={saveInfo}
                        />
                    )}
                    {formno === 5 && (
                        <Books
                            nextform={nextform}
                            prevform={prevform}
                            details={details}
                            setDetails={setDetails}
                            saveInfo={saveInfo}
                        />
                    )}
                    {formno === 6 && (
                        <Patents
                            nextform={nextform}
                            prevform={prevform}
                            details={details}
                            setDetails={setDetails}
                            saveInfo={saveInfo}
                        />
                    )}
                    {formno === 7 && (
                        <Referee
                            nextform={nextform}
                            prevform={prevform}
                            details={details}
                            setDetails={setDetails}
                            saveInfo={saveInfo}
                        />
                    )}

                    {formno === 8 && (
                        <GeneratePDF scrollTop={scrollTop} setformno={setformno} details={details} user={user} />
                    )}
                </>
            )}
        </>
    );
}
