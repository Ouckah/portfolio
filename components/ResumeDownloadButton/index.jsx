import React from 'react';

import axios from 'axios';

const ResumeDownloadButton = ({ markdown }) => {

    const handleDownload = async () => {

        const response = axios.post("http://localhost:3000/api/pdf", {
            markdown: markdown,
        })
        .then((res) => {
            const data = res.data || {};
            const response = data.response;

            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        // Create a temporary link element and trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume.pdf';
        link.click();

        // Clean up the temporary link
        URL.revokeObjectURL(url);
    };

    return (
        <button onClick={handleDownload}>
            Download PDF
        </button>
    );

};

export default ResumeDownloadButton;