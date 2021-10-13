import React from 'react'
import Pdf from "react-to-pdf";

const ref = React.createRef();

function GeneratePDF({details}) {
    return (
        <div>
            <div ref={ref}>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div>

            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => 
                    <button 
                        className="my-4 bg-red-700 text-sm px-2 py-1 text-white rounded ml-2"
                        onClick={e=>{toPdf(e)}}
                    >
                        Submit
                    </button>}
            </Pdf>
        </div>
    )
}

export default GeneratePDF
