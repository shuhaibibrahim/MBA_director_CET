import React, { useState, useEffect } from "react";

function Books({ nextform, prevform, details, setDetails }) {
    const [books, setBooks] = useState({
        coauthors: "",
        title: "",
        edition: "",
        publisher: "",
        date: "",
        id: 0,
    });
    const [publications1, setPublications1] = useState({
        coauthors: "",
        title: "",
        edition: "",
        publisher: "",
        date: "",
        id: 0,
    });
    const [publications2, setPublications2] = useState({
        coauthors: "",
        title: "",
        journalname: "",
        publisher: "",
        volumeno: "",
        pages: "",
        date: "",
        indexedin: "",
        id: 0,
    });
    const [publications3, setPublications3] = useState({
        coauthors: "",
        title: "",
        journalname: "",
        publisher: "",
        volumeno: "",
        pages: "",
        date: "",
        id: 0,
    });
    const [publications4, setPublications4] = useState({
        coauthors: "",
        title: "",
        conferencename: "",
        location: "",
        pages: "",
        month: "",
        yearheld: "",
        id: 0,
    });
    const [publications5, setPublications5] = useState({
        coauthors: "",
        title: "",
        conferencename: "",
        location: "",
        pages: "",
        month: "",
        yearheld: "",
        id: 0,
    });

    const [renderBooks, setRenderBooks] = useState(null);
    const [renderPublications1, setRenderPublications1] = useState(null);
    const [renderPublications2, setRenderPublications2] = useState(null);
    const [renderPublications3, setRenderPublications3] = useState(null);
    const [renderPublications4, setRenderPublications4] = useState(null);
    const [renderPublications5, setRenderPublications5] = useState(null);

    useEffect(() => {
        setRenderBooks(
            details.books.map((item) => (
                <div key={item.id} className="flex items-center border-2 border-black mb-2 justify-between">
                    <div className="flex flex-col">
                        <div>Co-authors: {item.coauthors}</div>
                        <div>Title: {item.title}</div>
                        <div>Edition: {item.edition}</div>
                        <div>Edition: {item.publisher}</div>
                        <div>Date published: {item.date}</div>
                    </div>

                    <button
                        className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
                        onClick={(e) => {
                            removeItem(e, "books", item.id);
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))
        );

        setRenderPublications1(
            details.publications1.map((item) => (
                <div key={item.id} className="flex items-center border-2 border-black mb-2 justify-between">
                    <div className="flex flex-col">
                        <div>Co-authors: {item.coauthors}</div>
                        <div>Title: {item.title}</div>
                        <div>Edition: {item.edition}</div>
                        <div>Publisher: {item.publisher}</div>
                        <div>Date published: {item.date}</div>
                    </div>

                    <button
                        className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
                        onClick={(e) => {
                            removeItem(e, "publications1", item.id);
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))
        );

        setRenderPublications2(
            details.publications2.map((item) => (
                <div key={item.id} className="flex items-center border-2 border-black mb-2 justify-between">
                    <div className="flex flex-col">
                        <div>Co-authors: {item.coauthors}</div>
                        <div>Title: {item.title}</div>
                        <div>Journal Name: {item.journalname}</div>
                        <div>Publisher: {item.publisher}</div>
                        <div>Volume No.: {item.volumeno}</div>
                        <div>Pages: {item.pages}</div>
                        <div>Date published: {item.date}</div>
                        <div>Indexed in: {item.indexedin}</div>
                    </div>

                    <button
                        className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
                        onClick={(e) => {
                            removeItem(e, "publications2", item.id);
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))
        );

        setRenderPublications3(
            details.publications3.map((item) => (
                <div key={item.id} className="flex items-center border-2 border-black mb-2 justify-between">
                    <div className="flex flex-col">
                        <div>Co-authors: {item.coauthors}</div>
                        <div>Title: {item.title}</div>
                        <div>Journal Name: {item.journalname}</div>
                        <div>Publisher: {item.publisher}</div>
                        <div>Volume No.: {item.volumeno}</div>
                        <div>Pages: {item.pages}</div>
                        <div>Date published: {item.date}</div>
                    </div>

                    <button
                        className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
                        onClick={(e) => {
                            removeItem(e, "publications3", item.id);
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))
        );

        setRenderPublications4(
            details.publications4.map((item) => (
                <div key={item.id} className="flex items-center border-2 border-black mb-2 justify-between">
                    <div className="flex flex-col">
                        <div>Co-authors: {item.coauthors}</div>
                        <div>Title: {item.title}</div>
                        <div>Conference Name: {item.conferencename}</div>
                        <div>Location: {item.location}</div>
                        <div>Pages: {item.pages}</div>
                        <div>Month: {item.month}</div>
                        <div>Year Held: {item.yearheld}</div>
                    </div>

                    <button
                        className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
                        onClick={(e) => {
                            removeItem(e, "publications4", item.id);
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))
        );

        setRenderPublications5(
            details.publications5.map((item) => (
                <div key={item.id} className="flex items-center border-2 border-black mb-2 justify-between">
                    <div className="flex flex-col">
                        <div>Co-authors: {item.coauthors}</div>
                        <div>Title: {item.title}</div>
                        <div>Conference Name: {item.conferencename}</div>
                        <div>Location: {item.location}</div>
                        <div>Pages: {item.pages}</div>
                        <div>Month: {item.month}</div>
                        <div>Year Held: {item.yearheld}</div>
                    </div>

                    <button
                        className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
                        onClick={(e) => {
                            removeItem(e, "publications5", item.id);
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [details]);

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

    return (
        <div>
            <form className="flex flex-col">
                <h3 className="font-bold my-5 text-xl text-red-700">Books and Publications</h3>
                <h2 className="font-bold my-3">Publications</h2>
                <h2 className="font-bold my-3">A. Books</h2>
                <label htmlFor="noBooks">
                    No.of books published as author or co-author:
                    <input className="ml-2" type="text" id="noBooks" name="noBooks" onChange={update} />
                </label>
                <h2 className="my-3">Provide details of up to 4 most significant & recent books</h2>
                <div className="transition duration-500 ease-in-out">
                    {renderBooks}
                    <div className="grid gap-3 mb-7">
                        <div className="form-field">
                            <label htmlFor="coauthors">Co-authors</label>
                            <input
                                type="text"
                                id="coauthors"
                                name="coauthors"
                                value={books.coauthors}
                                onChange={(e) => {
                                    setBooks({ ...books, coauthors: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={books.title}
                                onChange={(e) => {
                                    setBooks({ ...books, title: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="edition">Edition</label>
                            <input
                                type="text"
                                id="edition"
                                name="edition"
                                value={books.edition}
                                onChange={(e) => {
                                    setBooks({ ...books, edition: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="publisher">Publisher</label>
                            <input
                                type="text"
                                id="publisher"
                                name="publisher"
                                value={books.publisher}
                                onChange={(e) => {
                                    setBooks({ ...books, publisher: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="date">Date published</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={books.date}
                                onChange={(e) => {
                                    setBooks({ ...books, date: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={(e) => {
                            addToList(e, "books", books);
                            setBooks({
                                coauthors: "",
                                title: "",
                                edition: "",
                                publisher: "",
                                date: "",
                                id: 0,
                            });
                        }}
                        className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
                    >
                        Add to List
                    </button>
                </div>

                <h2 className="font-bold my-3">B. Publications (chapters in books)</h2>
                <label htmlFor="noPublished1">
                    No.of papers published as a chapter in a book:
                    <input className="ml-2" type="text" id="noPublished1" name="noPublished1" onChange={update} />
                </label>
                <h2 className="my-3">
                    Provide details of up to 4 most significant & recent papers published as a book chapter
                </h2>
                <div className="transition duration-500 ease-in-out">
                    {renderPublications1}
                    <div className="grid gap-3 mb-7">
                        <div className="form-field">
                            <label htmlFor="coauthors">Co-authors</label>
                            <input
                                type="text"
                                id="coauthors"
                                name="coauthors"
                                value={publications1.coauthors}
                                onChange={(e) => {
                                    setPublications1({
                                        ...publications1,
                                        coauthors: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={publications1.title}
                                onChange={(e) => {
                                    setPublications1({ ...publications1, title: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="edition">Edition</label>
                            <input
                                type="text"
                                id="edition"
                                name="edition"
                                value={publications1.edition}
                                onChange={(e) => {
                                    setPublications1({
                                        ...publications1,
                                        edition: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="publisher">Publisher</label>
                            <input
                                type="text"
                                id="publisher"
                                name="publisher"
                                value={publications1.publisher}
                                onChange={(e) => {
                                    setPublications1({
                                        ...publications1,
                                        publisher: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="date">Date published</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={publications1.date}
                                onChange={(e) => {
                                    setPublications1({ ...publications1, date: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={(e) => {
                            addToList(e, "publications1", publications1);
                            setPublications1({
                                coauthors: "",
                                title: "",
                                edition: "",
                                publisher: "",
                                date: "",
                                id: 0,
                            });
                        }}
                        className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
                    >
                        Add to List
                    </button>
                </div>

                <h2 className="font-bold my-3">C. Publications (international journals)</h2>
                <label htmlFor="noPublished2">
                    No.of papers published or accepted for publication in international journals:
                    <input className="ml-2" type="text" id="noPublished2" name="noPublished2" onChange={update} />
                </label>
                <h2 className="my-3">Provide details of up to 10 most significant & recent papers </h2>
                <div className="transition duration-500 ease-in-out">
                    {renderPublications2}
                    <div className="grid gap-3 mb-7">
                        <div className="form-field">
                            <label htmlFor="coauthors">Co-authors</label>
                            <input
                                type="text"
                                id="coauthors"
                                name="coauthors"
                                value={publications2.coauthors}
                                onChange={(e) => {
                                    setPublications2({
                                        ...publications2,
                                        coauthors: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={publications2.title}
                                onChange={(e) => {
                                    setPublications2({ ...publications2, title: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="journalname">Journal Name</label>
                            <input
                                type="text"
                                id="journalname"
                                name="journalname"
                                value={publications2.journalname}
                                onChange={(e) => {
                                    setPublications2({
                                        ...publications2,
                                        journalname: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="publisher">Publisher</label>
                            <input
                                type="text"
                                id="publisher"
                                name="publisher"
                                value={publications2.publisher}
                                onChange={(e) => {
                                    setPublications2({
                                        ...publications2,
                                        publisher: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="volumeno">Volume No</label>
                            <input
                                type="text"
                                id="volumeno"
                                name="volumeno"
                                value={publications2.volumeno}
                                onChange={(e) => {
                                    setPublications2({
                                        ...publications2,
                                        volumeno: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="pages">Pages</label>
                            <input
                                type="text"
                                id="pages"
                                name="pages"
                                value={publications2.pages}
                                onChange={(e) => {
                                    setPublications2({ ...publications2, pages: e.target.value });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="date">Date published</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={publications2.date}
                                onChange={(e) => {
                                    setPublications2({ ...publications2, date: e.target.value });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="indexedin">Indexed In</label>
                            <input
                                type="date"
                                id="indexedin"
                                name="indexedin"
                                value={publications2.indexedin}
                                onChange={(e) => {
                                    setPublications2({
                                        ...publications2,
                                        indexedin: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={(e) => {
                            addToList(e, "publications2", publications2);
                            setPublications2({
                                coauthors: "",
                                title: "",
                                journalname: "",
                                publisher: "",
                                volumeno: "",
                                pages: "",
                                date: "",
                                indexedin: "",
                                id: 0,
                            });
                        }}
                        className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
                    >
                        Add to List
                    </button>
                </div>

                <h2 className="font-bold my-3">D. Publications(in Indian journals)</h2>
                <label htmlFor="noPublished3">
                    No.of papers published or accepted for publication in Indian journals:
                    <input className="ml-2" type="text" id="noPublished3" name="noPublished3" onChange={update} />
                </label>
                <h2 className="my-3">Provide details of up to 5 most significant & recent papers </h2>
                <div className="transition duration-500 ease-in-out">
                    {renderPublications3}
                    <div className="grid gap-3 mb-7">
                        <div className="form-field">
                            <label htmlFor="coauthors">Co-authors</label>
                            <input
                                type="text"
                                id="coauthors"
                                name="coauthors"
                                value={publications3.coauthors}
                                onChange={(e) => {
                                    setPublications3({
                                        ...publications3,
                                        coauthors: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={publications3.title}
                                onChange={(e) => {
                                    setPublications3({ ...publications3, title: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="journalname">Journal Name</label>
                            <input
                                type="text"
                                id="journalname"
                                name="journalname"
                                value={publications3.journalname}
                                onChange={(e) => {
                                    setPublications3({
                                        ...publications3,
                                        journalname: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="publisher">Publisher</label>
                            <input
                                type="text"
                                id="publisher"
                                name="publisher"
                                value={publications3.publisher}
                                onChange={(e) => {
                                    setPublications3({
                                        ...publications3,
                                        publisher: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="volumeno">Volume No</label>
                            <input
                                type="text"
                                id="volumeno"
                                name="volumeno"
                                value={publications3.volumeno}
                                onChange={(e) => {
                                    setPublications3({
                                        ...publications3,
                                        volumeno: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="pages">Pages</label>
                            <input
                                type="text"
                                id="pages"
                                name="pages"
                                value={publications3.pages}
                                onChange={(e) => {
                                    setPublications3({ ...publications3, pages: e.target.value });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="date">Date published</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={publications3.date}
                                onChange={(e) => {
                                    setPublications3({ ...publications3, date: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={(e) => {
                            addToList(e, "publications3", publications3);
                            setPublications3({
                                coauthors: "",
                                title: "",
                                journalname: "",
                                publisher: "",
                                volumeno: "",
                                pages: "",
                                date: "",
                                id: 0,
                            });
                        }}
                        className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
                    >
                        Add to List
                    </button>
                </div>

                <h2 className="font-bold my-3">E. Publications (in peer-reviewed conferences held abroad)</h2>
                <label htmlFor="noPublished4">
                    No.of papers published or accepted for publication in refereed conferences held abroad:
                    <input className="ml-2" type="text" id="noPublished4" name="noPublished4" onChange={update} />
                </label>
                <h2 className="my-3">Provide details of up to 5 most significant & recent papers </h2>
                <div className="transition duration-500 ease-in-out">
                    {renderPublications4}
                    <div className="grid gap-3 mb-7">
                        <div className="form-field">
                            <label htmlFor="coauthors">Co-authors</label>
                            <input
                                type="text"
                                id="coauthors"
                                name="coauthors"
                                value={publications4.coauthors}
                                onChange={(e) => {
                                    setPublications4({
                                        ...publications4,
                                        coauthors: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={publications4.title}
                                onChange={(e) => {
                                    setPublications4({ ...publications4, title: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="conferencename">Conference Name</label>
                            <input
                                type="text"
                                id="conferencename"
                                name="conferencename"
                                value={publications4.conferencename}
                                onChange={(e) => {
                                    setPublications4({
                                        ...publications4,
                                        conferencename: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={publications4.location}
                                onChange={(e) => {
                                    setPublications4({
                                        ...publications4,
                                        location: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="pages">Pages</label>
                            <input
                                type="text"
                                id="pages"
                                name="pages"
                                value={publications4.pages}
                                onChange={(e) => {
                                    setPublications4({ ...publications4, pages: e.target.value });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="month">Month</label>
                            <input
                                type="date"
                                id="month"
                                name="month"
                                value={publications4.month}
                                onChange={(e) => {
                                    setPublications4({ ...publications4, month: e.target.value });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="yearheld">Year Held</label>
                            <input
                                type="date"
                                id="yearheld"
                                name="yearheld"
                                value={publications4.yearheld}
                                onChange={(e) => {
                                    setPublications4({
                                        ...publications4,
                                        yearheld: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={(e) => {
                            addToList(e, "publications4", publications4);
                            setPublications4({
                                coauthors: "",
                                title: "",
                                conferencename: "",
                                location: "",
                                pages: "",
                                month: "",
                                yearheld: "",
                                id: 0,
                            });
                        }}
                        className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
                    >
                        Add to List
                    </button>
                </div>

                <h2 className="font-bold my-3">
                    F. Publications/Presentation (in peer-reviewed conferences held in India)
                </h2>
                <label htmlFor="noPublished5">
                    No.of papers published or accepted for publication or presented in refereed conferences :
                    <input className="ml-2" type="text" id="noPublished5" name="noPublished5" onChange={update} />
                </label>
                <h2 className="my-3">Provide details of up to 5 most significant & recent papers </h2>
                <div className="transition duration-500 ease-in-out">
                    {renderPublications5}
                    <div className="grid gap-3 mb-7">
                        <div className="form-field">
                            <label htmlFor="coauthors">Co-authors</label>
                            <input
                                type="text"
                                id="coauthors"
                                name="coauthors"
                                value={publications5.coauthors}
                                onChange={(e) => {
                                    setPublications5({
                                        ...publications5,
                                        coauthors: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={publications5.title}
                                onChange={(e) => {
                                    setPublications5({ ...publications5, title: e.target.value });
                                }}
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="conferencename">Conference Name</label>
                            <input
                                type="text"
                                id="conferencename"
                                name="conferencename"
                                value={publications5.conferencename}
                                onChange={(e) => {
                                    setPublications5({
                                        ...publications5,
                                        conferencename: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={publications5.location}
                                onChange={(e) => {
                                    setPublications5({
                                        ...publications5,
                                        location: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="pages">Pages</label>
                            <input
                                type="text"
                                id="pages"
                                name="pages"
                                value={publications5.pages}
                                onChange={(e) => {
                                    setPublications5({ ...publications5, pages: e.target.value });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="month">Month</label>
                            <input
                                type="date"
                                id="month"
                                name="month"
                                value={publications5.month}
                                onChange={(e) => {
                                    setPublications5({ ...publications5, month: e.target.value });
                                }}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="yearheld">Year Held</label>
                            <input
                                type="date"
                                id="yearheld"
                                name="yearheld"
                                value={publications5.yearheld}
                                onChange={(e) => {
                                    setPublications5({
                                        ...publications5,
                                        yearheld: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={(e) => {
                            addToList(e, "publications5", publications5);
                            setPublications5({
                                coauthors: "",
                                title: "",
                                conferencename: "",
                                location: "",
                                pages: "",
                                month: "",
                                yearheld: "",
                                id: 0,
                            });
                        }}
                        className="my-4 bg-green-700 text-sm px-2 py-1 text-white rounded"
                    >
                        Add to List
                    </button>
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
    );
}

export default Books;
