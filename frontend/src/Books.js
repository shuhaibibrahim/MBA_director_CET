import React, { useState, useEffect } from "react";

function Books({ nextform, prevform, details, setDetails, saveInfo }) {
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
        // yearheld: "",
        id: 0,
    });
    const [publications5, setPublications5] = useState({
        coauthors: "",
        title: "",
        conferencename: "",
        location: "",
        pages: "",
        month: "",
        // yearheld: "",
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
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.coauthors}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.publisher}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.date}</div>
                    <div className="w-1/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.edition}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "books", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderPublications1(
            details.publications1.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.coauthors}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.publisher}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.date}</div>
                    <div className="w-1/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.edition}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "publications1", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderPublications2(
            details.publications2.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.coauthors}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.journalname}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.publisher}</div>
                    <div className="w-1/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.volumeno}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.date}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.indexedin}</div>
                    <div className="w-1/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.pages}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "publications2", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderPublications3(
            details.publications3.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.coauthors}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.journalname}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.publisher}</div>
                    <div className="w-1/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.volumeno}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.date}</div>
                    <div className="w-1/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.pages}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "publications3", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderPublications4(
            details.publications4.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.coauthors}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.conferencename}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.location}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.month}</div>
                    <div className="w-1/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.pages}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "publications4", item.id);
                            }}
                            className="text-secondary hover:text-secondary-dark transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        );

        setRenderPublications5(
            details.publications5.map((item) => (
                <div key={item.id} className="flex">
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.title}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.coauthors}</div>
                    <div className="w-3/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.conferencename}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.location}</div>
                    <div className="w-2/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.month}</div>
                    <div className="w-1/12 px-1.5 py-4 truncate text-sm text-gray-800">{item.pages}</div>
                    <div className="w-rem w-1/12 py-4 truncate text-center text-sm font-medium">
                        <button
                            onClick={(e) => {
                                removeItem(e, "publications5", item.id);
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
        <div className="w-11/12 md:w-9/12 mx-auto my-6">
            <h2 className="font-bold text-3xl text-secondary">Books and Publications</h2>
            <hr className="my-4" />

            <form className="mt-7 mb-4">
                {/* <<h3 className="section-label pr-2">Publications</h3> */}
                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">Books</h3>
                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="noBooks">
                                No. of books published as author or co-author
                            </label>
                            <input
                                className="form-control w-20"
                                type="number"
                                id="noBooks"
                                name="noBooks"
                                onChange={update}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 pt-4 pb-2">
                        Provide details of up to 4 most significant & recent books
                    </h4>
                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="form-control w-full"
                                type="text"
                                id="title"
                                name="title"
                                value={books.title}
                                onChange={(e) => {
                                    setBooks({ ...books, title: e.target.value });
                                }}
                            />
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="coauthors">
                                    Co-authors
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="coauthors"
                                    name="coauthors"
                                    value={books.coauthors}
                                    onChange={(e) => {
                                        setBooks({ ...books, coauthors: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="date">
                                    Date published
                                </label>
                                <input
                                    className="form-control w-full"
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

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="edition">
                                    Edition
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="edition"
                                    name="edition"
                                    value={books.edition}
                                    onChange={(e) => {
                                        setBooks({ ...books, edition: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field sm:w-8/12 mt-4 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="publisher">
                                    Publisher
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="publisher"
                                    name="publisher"
                                    value={books.publisher}
                                    onChange={(e) => {
                                        setBooks({ ...books, publisher: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.books.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-120 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Publisher
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Edition
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-120 bg-white divide-y divide-gray-200">{renderBooks}</div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between mt-5">
                    <h3 className="section-label pr-2">Publications (chapters in books)</h3>
                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="noPublished1">
                                No.of papers published as a chapter in a book
                            </label>
                            <input
                                className="form-control w-20"
                                type="number"
                                id="noPublished1"
                                name="noPublished1"
                                onChange={update}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between mb-5">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 pt-4 pb-2">
                        Provide details of up to 4 most significant & recent papers published as a book chapter
                    </h4>
                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="form-control w-full"
                                type="text"
                                id="title"
                                name="title"
                                value={publications1.title}
                                onChange={(e) => {
                                    setPublications1({ ...publications1, title: e.target.value });
                                }}
                            />
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="coauthors">
                                    Co-authors
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field mt-4 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="date">
                                    Date published
                                </label>
                                <input
                                    className="form-control w-full"
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

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="edition">
                                    Edition
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field sm:w-8/12 mt-4 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="publisher">
                                    Publisher
                                </label>
                                <input
                                    className="form-control w-full"
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
                        </div>

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.publications1.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-120 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Publisher
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Edition
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-120 bg-white divide-y divide-gray-200">
                                    {renderPublications1}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">Publications (in international journals)</h3>
                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="noPublished2">
                                No. of papers published or accepted for publication in international journals
                            </label>
                            <input
                                className="form-control w-20"
                                type="number"
                                id="noPublished2"
                                name="noPublished2"
                                onChange={update}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between mb-5">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 pt-4 pb-2">
                        Provide details of up to 10 most significant & recent papers
                    </h4>
                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={publications2.title}
                                    onChange={(e) => {
                                        setPublications2({ ...publications2, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:mt-0 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="journalname">
                                    Journal Name
                                </label>
                                <input
                                    className="form-control w-full"
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
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="coauthors">
                                    Co-authors
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field mt-4 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="pages">
                                    Pages
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="pages"
                                    name="pages"
                                    value={publications2.pages}
                                    onChange={(e) => {
                                        setPublications2({ ...publications2, pages: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="volumeno">
                                    Volume
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field sm:w-8/12 mt-4 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="publisher">
                                    Publisher
                                </label>
                                <input
                                    className="form-control w-full"
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
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-5/12 md:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="date">
                                    Date published
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={publications2.date}
                                    onChange={(e) => {
                                        setPublications2({ ...publications2, date: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:w-5/12 md:w-4/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="indexedin">
                                    Indexed in
                                </label>
                                <input
                                    className="form-control w-full"
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

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.publications2.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-200 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Journal Name
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Publisher
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Volume
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Indexed In
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Pages
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-200 bg-white divide-y divide-gray-200">
                                    {renderPublications2}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">Publications (in Indian journals)</h3>
                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="noPublished3">
                                No. of papers published or accepted for publication in Indian journals
                            </label>
                            <input
                                className="form-control w-20"
                                type="number"
                                id="noPublished3"
                                name="noPublished3"
                                onChange={update}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 pt-4 pb-2">
                        Provide details of up to 5 most significant & recent papers
                    </h4>
                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={publications3.title}
                                    onChange={(e) => {
                                        setPublications3({ ...publications3, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:mt-0 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="journalname">
                                    Journal Name
                                </label>
                                <input
                                    className="form-control w-full"
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
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="coauthors">
                                    Co-authors
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field mt-4 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="pages">
                                    Pages
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="pages"
                                    name="pages"
                                    value={publications3.pages}
                                    onChange={(e) => {
                                        setPublications3({ ...publications3, pages: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-4/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="volumeno">
                                    Volume
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field sm:w-8/12 mt-4 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="publisher">
                                    Publisher
                                </label>
                                <input
                                    className="form-control w-full"
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
                        </div>

                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="date">
                                Date published
                            </label>
                            <input
                                className="form-control"
                                type="date"
                                id="date"
                                name="date"
                                value={publications3.date}
                                onChange={(e) => {
                                    setPublications3({ ...publications3, date: e.target.value });
                                }}
                            />
                        </div>

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.publications3.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-160 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Journal Name
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Publisher
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Volume
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Pages
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-160 bg-white divide-y divide-gray-200">
                                    {renderPublications3}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between mt-5">
                    <h3 className="section-label pr-2">Publications (in peer-reviewed conferences held abroad)</h3>
                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="noPublished4">
                                No. of papers published or accepted for publication in refereed conferences held abroad
                            </label>
                            <input
                                className="form-control w-20"
                                type="number"
                                id="noPublished4"
                                name="noPublished4"
                                onChange={update}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between mb-5">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 pt-4 pb-2">
                        Provide details of up to 5 most significant & recent papers
                    </h4>
                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={publications4.title}
                                    onChange={(e) => {
                                        setPublications4({ ...publications4, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:mt-0 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="conferencename">
                                    Conference Name
                                </label>
                                <input
                                    className="form-control w-full"
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
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="coauthors">
                                    Co-authors
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field mt-4 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="pages">
                                    Pages
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="pages"
                                    name="pages"
                                    value={publications4.pages}
                                    onChange={(e) => {
                                        setPublications4({ ...publications4, pages: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-8/12 lg:w-5/12 mt-4 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field sm:w-4/12 mt-4 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="month">
                                    Month & Year
                                </label>
                                <input
                                    className="form-control sm:w-full"
                                    type="month"
                                    id="month"
                                    name="month"
                                    value={publications4.month}
                                    onChange={(e) => {
                                        setPublications4({ ...publications4, month: e.target.value });
                                    }}
                                />
                            </div>
                            {/* <div className="form-field">
                                <label className="form-label mb-1" htmlFor="yearheld">
                                    Year Held
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="number"
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
                            </div> */}
                        </div>

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.publications4.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-160 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Conference Name
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Location
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Year & Month
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Pages
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-160 bg-white divide-y divide-gray-200">
                                    {renderPublications4}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <h3 className="section-label pr-2">
                        Publications / Presentation (in peer-reviewed conferences held in India)
                    </h3>
                    <div className="form-card rounded-xl sm:rounded-bl-none sm:rounded-br-none">
                        <div className="form-field">
                            <label className="form-label mb-1" htmlFor="noPublished5">
                                No.of papers published or accepted for publication or presented in refereed conferences
                                :
                            </label>
                            <input
                                className="form-control w-20"
                                type="number"
                                id="noPublished5"
                                name="noPublished5"
                                onChange={update}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between mb-5">
                    <h4 className="sm:w-2/6 font-bold text-gray-600 pr-2 pt-4 pb-2">
                        Provide details of up to 5 most significant & recent papers
                    </h4>
                    <div className="form-card rounded-xl sm:rounded-tl-none sm:rounded-tr-none">
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-1/2 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={publications5.title}
                                    onChange={(e) => {
                                        setPublications5({ ...publications5, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-field mt-4 sm:mt-0 sm:w-1/2 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="conferencename">
                                    Conference Name
                                </label>
                                <input
                                    className="form-control w-full"
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
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field mt-4 sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="coauthors">
                                    Co-authors
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field mt-4 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="pages">
                                    Pages
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="pages"
                                    name="pages"
                                    value={publications5.pages}
                                    onChange={(e) => {
                                        setPublications5({ ...publications5, pages: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-8/12 lg:w-5/12 mt-4 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    className="form-control w-full"
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
                            <div className="form-field sm:w-4/12 mt-4 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="month">
                                    Month & Year
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="month"
                                    id="month"
                                    name="month"
                                    value={publications5.month}
                                    onChange={(e) => {
                                        setPublications5({ ...publications5, month: e.target.value });
                                    }}
                                />
                            </div>
                            {/* <div className="form-field">
                                <label className="form-label mb-1" htmlFor="yearheld">
                                    Year Held
                                </label>
                                <input
                                    className="form-control w-full"
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
                            </div> */}
                        </div>

                        <div className="text-right mt-5">
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
                                className="btn"
                            >
                                Add to List
                            </button>
                        </div>
                        {details.publications5.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 mt-5 rounded">
                                <div className="px-2.5 min-w-160 bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Conference Name
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Location
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Year & Month
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Pages
                                    </div>
                                    <div className="w-rem w-1/12 py-3">
                                        <span className="sr-only">Remove</span>
                                    </div>
                                </div>
                                <div className="px-2.5 min-w-160 bg-white divide-y divide-gray-200">
                                    {renderPublications5}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                    <button onClick={goPrev} className="btn">
                        Prev
                    </button>
                    <div className="space-x-6">
                        <button className="btn-outline" onClick={saveInfo}>
                            Save
                        </button>
                        <button onClick={saveInfoNext} className="btn-secondary">
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Books;
