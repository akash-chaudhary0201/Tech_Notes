import React, { useState, useEffect } from 'react'

function FCET() {

    const [pdfLink, setPdfLink] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch('https://kiet-ten.vercel.app/api/getpdfs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json();
            console.log(data);
            setPdfLink(data.link);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
            <div className="subject_main_container">
                <div className="subjects_content">
                    <button>
                        <a href={pdfLink} target='_blank'>Syllabus</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default FCET
