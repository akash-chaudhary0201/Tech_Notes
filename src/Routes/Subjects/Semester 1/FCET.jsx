import React, { useState, useEffect } from 'react'

function FCET() {

    const [pdfData, setPdfData] = useState([]);

    useEffect(() => {
        fetch('https://kiet-ten.vercel.app/api/getpdfs')
            .then(response => response.json())
            .then(data => setPdfData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <>
            <div className="subject_main_container">
                <div className="subject_main_content">
                    <h1>
                        FCET
                    </h1>
                    <div className="subject_content">

                        {pdfData.map(pdf => (
                            <div key={pdf._id} className='pdf_item'>
                                <h3>{pdf.name}</h3>
                                <a href={pdf.link} target="_blank" rel="noreferrer">
                                    <button>Download</button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FCET
