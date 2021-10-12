import React,{useState} from 'react'

function Books(props) {
    
    const[books,setBooks]=useState([
        {coauthors:'',title:'',edition:'',publisher:'',date:''},
    ]);

    const[publications1,setPublications1]=useState([
        {coauthors:'',title:'',edition:'',publisher:'',date:''},
    ]);

    const[publications2,setPublications2]=useState([
        {coauthors:'',title:'',edition:'',publisher:'',date:''},
    ]);

    const[publications3,setPublications3]=useState([
        {coauthors:'',title:'',edition:'',publisher:'',date:''},
    ]);

    const[publications4,setPublications4]=useState([
        {coauthors:'',title:'',edition:'',publisher:'',date:''},
    ]);

    const[publications5,setPublications5]=useState([
        {coauthors:'',title:'',edition:'',publisher:'',date:''},
    ]);

    

    const addBook = (e)=>{
        e.preventDefault();
        setBooks([...books,{coauthors:'',title:'',edition:'',publisher:'',date:''}])
    }

    const addPublication1 = (e)=>{
        e.preventDefault();
        setPublications1([...publications1,{coauthors:'',title:'',edition:'',publisher:'',date:''}])
    }

    const addPublication2 = (e)=>{
        e.preventDefault();
        setPublications2([...publications2,{coauthors:'',title:'',edition:'',publisher:'',date:''}])
    }

    const addPublication3 = (e)=>{
        e.preventDefault();
        setPublications3([...publications3,{coauthors:'',title:'',edition:'',publisher:'',date:''}])
    }
    const addPublication4 = (e)=>{
        e.preventDefault();
        setPublications4([...publications4,{coauthors:'',title:'',edition:'',publisher:'',date:''}])
    }
    const addPublication5 = (e)=>{
        e.preventDefault();
        setPublications5([...publications5,{coauthors:'',title:'',edition:'',publisher:'',date:''}])
    }



    const saveInfoNext = (e)=>{
        e.preventDefault();
        props.nextform();
    }

    const goPrev = (e)=>{
        e.preventDefault();
        props.prevform();
    }


    return (
        <div>
            <form className="flex flex-col">
                <h3 className="font-bold my-5 text-xl text-red-700">Books and Publications</h3>
                <h2 className="font-bold my-3">Publications</h2>
                <h2 className="font-bold my-3">A. Books</h2>
                <label htmlFor="">No.of books published as author or co-author: 
                <input className="ml-2" type="text"/>
                </label>
                <h2 className="my-3">Provide details of up to 4 most significant & recent books</h2>
                <div className="transition duration-500 ease-in-out">
                {
                    books.map((item,index)=>{ 
                        return(
                            <div key={index} className="grid gap-3 mb-7">
                            <div className="form-field">
                                <label htmlFor="">
                                    Co-authors
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Title
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Edition
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Publisher
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Date published
                                </label>
                                <input type="date" />
                            </div>
                            </div>
                        )
                    })
                }
                </div>
                
                <div className="text-center">
                <button onClick={addBook} className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded">Add Another</button>
                </div>

                <h2 className="font-bold my-3">B. Publications (chapters in books)</h2>
                <label htmlFor="">No.of papers published as a chapter in a book:
                <input className="ml-2" type="text"/>
                </label>
                <h2 className="my-3">Provide details of up to 4 most significant & recent papers published as a book chapter</h2>
                <div className="transition duration-500 ease-in-out">
                {
                    publications1.map((item,index)=>{ 
                        return(
                            <div key={index} className="grid gap-3 mb-7">
                            <div className="form-field">
                                <label htmlFor="">
                                    Co-authors
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Title
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Edition
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Publisher
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Date published
                                </label>
                                <input type="date" />
                            </div>
                            </div>
                        )
                    })
                }
                </div>
                
                <div className="text-center">
                <button onClick={addPublication1} className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded">Add Another</button>
                </div>

                <h2 className="font-bold my-3">B. Publications (chapters in books)</h2>
                <label htmlFor="">No.of papers published as a chapter in a book:
                <input className="ml-2" type="text"/>
                </label>
                <h2 className="my-3">Provide details of up to 4 most significant & recent papers published as a book chapter</h2>
                <div className="transition duration-500 ease-in-out">
                {
                    publications1.map((item,index)=>{ 
                        return(
                            <div key={index} className="grid gap-3 mb-7">
                            <div className="form-field">
                                <label htmlFor="">
                                    Co-authors
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Title
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Edition
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Publisher
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Date published
                                </label>
                                <input type="date" />
                            </div>
                            </div>
                        )
                    })
                }
                </div>
                
                <div className="text-center">
                <button onClick={addPublication1} className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded">Add Another</button>
                </div>

                <h2 className="font-bold my-3">C. Publications (ininternational journals)</h2>
                <label htmlFor="">No.of papers published or accepted for publication in international journals:
                <input className="ml-2" type="text"/>
                </label>
                <h2 className="my-3">Provide details of up to 10 most significant & recent papers </h2>
                <div className="transition duration-500 ease-in-out">
                {
                    publications2.map((item,index)=>{ 
                        return(
                            <div key={index} className="grid gap-3 mb-7">
                            <div className="form-field">
                                <label htmlFor="">
                                    Co-authors
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Title
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Edition
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Publisher
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Date published
                                </label>
                                <input type="date" />
                            </div>
                            </div>
                        )
                    })
                }
                </div>
                
                <div className="text-center">
                <button onClick={addPublication2} className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded">Add Another</button>
                </div>

                <h2 className="font-bold my-3">D. Publications(in Indian journals)</h2>
                <label htmlFor="">No.of papers published or accepted for publication in Indian journals:
                <input className="ml-2" type="text"/>
                </label>
                <h2 className="my-3">Provide details of up to 5 most significant & recent papers </h2>
                <div className="transition duration-500 ease-in-out">
                {
                    publications1.map((item,index)=>{ 
                        return(
                            <div key={index} className="grid gap-3 mb-7">
                            <div className="form-field">
                                <label htmlFor="">
                                    Co-authors
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Title
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Edition
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Publisher
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    Date published
                                </label>
                                <input type="date" />
                            </div>
                            </div>
                        )
                    })
                }
                </div>
                
                <div className="text-center">
                <button onClick={addPublication1} className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded">Add Another</button>
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

export default Books
