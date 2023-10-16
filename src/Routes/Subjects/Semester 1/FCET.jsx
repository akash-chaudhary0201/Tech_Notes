import React, { useState, useEffect } from 'react'

function FCET() {

    const [pdfLink, setPdfLink] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch('https://kiet-ten.vercel.app/api/getpdfs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                    // Add any other headers if needed
                }
            });
            const data = await response.json();
            setPdfLink(data.link);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     fetch('https://kiet-ten.vercel.app/api/getpdfs', {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             setPdfLink(data.link); x
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);


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