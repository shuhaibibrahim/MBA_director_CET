import React from 'react'

function Books(props) {
    
    const[books,setBooks]=useState([
        {coauthors:'',title:'',edition:'',publisher:'',date:''},
    ]);

    const addBook = (e)=>{
        e.preventDefault();
        setProjects1([...books,{coauthors:'',title:'',edition:'',publisher:'',date:''}])
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
                <h2 className="my-3">Provide details of up to 4 most significant & recent books</h2>
                <div className="transition duration-500 ease-in-out">
                {
                    books.map(item=>{ 
                        return(
                            <div className="grid gap-3 mb-7">
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
