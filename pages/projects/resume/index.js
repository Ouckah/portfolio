import { useState } from "react";
import { ResumeDownloadButton } from "../../../components/ResumeDownloadButton";

import axios from "axios";

// markdown
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "../../../styles/markdown.module.css";
import Link from "next/link";

export default function Resume() 
{
    // client key status
    const [key, setKey] = useState(null);

    // store new resume
    const [response, setResponse] = useState(null);

    // handles key submission
    const verifyKeyHandler = () => {
        
        

    }

    // handles form submission
    const submitResumeHandler = async (event) => {

        // prevent page from refreshing
        event.preventDefault();

        console.log(event);

        // get job and resume
        const { job, resume } = event.target;

        // send post req to internal form api
        // TODO: PROD -> localhost:300 to ouckah.dev
        axios.post("http://localhost:3000/api/form", {
            key: key, 
            job: job.value,
            resume: resume.value,
        })
        .then((res) => {
            const data = res.data || {};
            const response = data.response;

            setResponse(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });

    }

    return (
        <>

            <div className='w-full h-screen bg-almost-black-500'>
                { response ? (
                    <>

                        <div className='flex flex-row justify-evenly items-center w-full h-24 bg-almost-black-500'>
                            <Link href="/projects/resume"><button className="w-24 h-12">Back</button></Link>
                            {/* <ResumeDownloadButton markdown={response} /> */}
                        </div>

                        <div className="w-full min-h-full p-10 bg-almost-black-500">
                            <div className="w-full h-full p-10 bg-white rounded-lg">
                                <div className={styles.markdown}>
                                    <ReactMarkdown>{response}</ReactMarkdown>
                                </div>
                            </div>
                        </div>

                    </>
                ) : (

                    <form 
                        className='flex flex-col gap-5 justify-center items-center w-full h-full overflow-hidden'
                        onSubmit={submitResumeHandler}
                    >
                        <input 
                            className="block w-1/2 p-2.5 marker:text-sm bg-white text-almost-black-100 rounded-lg shadow-md" 
                            type="password" 
                            placeholder="OpenAI API key..."
                            name="key"
                            onChange={(e) => setKey(e.target.value)}
                        />
                        <button 
                            className="w-28 h-8 bg-almost-black-100 rounded-lg text-white font-bold shadow-md uppercase transition-all duration-300 hover:shadow-xl" 
                            onClick={verifyKeyHandler}
                        >
                            Verify
                        </button>
                        <input 
                            className="block w-1/2 p-2.5 marker:text-sm bg-white text-almost-black-100 rounded-lg shadow-md" 
                            type="text" 
                            placeholder="Job position..."
                            name="job"
                        />
                        <textarea 
                            id="message" 
                            rows="4" 
                            className="block w-1/2 p-2.5 text-sm bg-white text-almost-black-100 rounded-lg shadow-md" 
                            placeholder="Put your resume here..."
                            name="resume"
                        />
                        <button 
                            className="w-36 h-12 bg-almost-black-100 rounded-lg text-white font-bold shadow-md uppercase transition-all duration-300 hover:shadow-xl" 
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>

                )}
            </div>
        
        </>
    )
}
