import Router from 'next/router'
import { useState } from "react";
import { ResumeDownloadButton } from "../../../components/ResumeDownloadButton";

// https://api.openai.com/v1/engines/davinci/completions

import axios from "axios";
import { getAxiosInstance } from '../../../axiosInstance';

// material icons
import RefreshIcon from '@mui/icons-material/Refresh';

// markdown
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "../../../styles/markdown.module.css";

export default function Resume() 
{
    // client key status
    const [key, setKey] = useState(null);
    const [keyStatus, setKeyStatus] = useState(null); // 3 STATES -> null, "VALID", "INVALID"

    // form submission status
    const [isSubmitted, setSubmitted] = useState(false);

    // store input text
    const [job, setJob] = useState(null);
    const [description, setDescription] = useState(null);
    const [resume, setResume] = useState(null);

    // store new resume
    const [response, setResponse] = useState(null);

    // sends a test req with current key
    const sendTestRequest = async () => {
        
        // make request to test api key API
        // TODO: PROD -> localhost:300 to ouckah.dev
        axios.post("http://localhost:3000/api/testApiKey", {
            key: key, 
        })

        // change key status based on response
        .then((res) => {
            const data = res.data || {};
            const response = data.response;

            console.log(response);

            setKeyStatus("VALID");
        })
        .catch((error) => {
            console.error(error);
            
            setKeyStatus("INVALID");
        });

        console.log(keyStatus);

    }

    // handles key submission
    const verifyKeyHandler = async (event) => {

        // prevent page from refreshing
        event.preventDefault();

        console.log(event);
        
        await sendTestRequest();

    }

    // handles form submission
    const submitResumeHandler = async (event) => {

        // prevent page from refreshing
        event.preventDefault();

        console.log(event);

        if (keyStatus === "VALID") {

            // send post req to internal form api
            // only make request if both inputs exist
            if (job && description && resume) {

                // set state to submitted
                setSubmitted(true);
                
                // TODO: PROD -> localhost:300 to ouckah.dev
                axios.post("http://localhost:3000/api/form", {
                    key: key, 
                    job: job,
                    description: description,
                    resume: resume,
                })
                .then((res) => {
                    const data = res.data || {};
                    const response = data.response;

                    setResponse(response);
                    return response;
                })
                .catch((error) => {
                    // set state to not submitted
                    setSubmitted(false);

                    console.error(error);
                    return error;
                });
            }

        }

    }

    return (
        <>

            <div className='flex flex-col w-full min-h-screen justify-center items-center bg-almost-black-500'>
                { response ? (
                    <>

                        <div className='flex flex-row justify-evenly items-center w-full h-24 bg-almost-black-500'>
                            <button className="w-24 h-12 bg-almost-black-100 rounded-lg font-bold shadow-md uppercase transition-all duration-300 hover:shadow-xl" onClick={() => Router.reload(window.location.pathname)}>Back</button>
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
                        className='flex flex-col gap-5 justify-center items-center w-1/2 h-full overflow-hidden'
                    >
                        {
                            keyStatus ? (
                                <>

                                    {
                                        keyStatus === "VALID" ? (
                                            <>  
                                                <label className="block place-self-start font-bold uppercase">
                                                    OpenAI Key
                                                </label>    
                                                <input 
                                                    className="block w-full p-2.5 marker:text-sm bg-white text-almost-black-100 rounded-lg shadow-md border-2 border-green-400" 
                                                    type="password" 
                                                    placeholder="sk-8fds2fhG7sdf9as4G2df1df6G3"
                                                    name="key"
                                                    onChange={(e) => setKey(e.target.value)}
                                                    disabled
                                                />

                                            </>
                                        ) : (
                                            <> 
                                                <label className="block place-self-start font-bold uppercase">
                                                    OpenAI Key
                                                </label>
                                                <input 
                                                    className="block w-full p-2.5 marker:text-sm bg-white text-almost-black-100 rounded-lg shadow-md border-2 border-red-400" 
                                                    type="password" 
                                                    placeholder="sk-8fds2fhG7sdf9as4G2df1df6G3"
                                                    name="key"
                                                    onChange={(e) => setKey(e.target.value)}
                                                />
                                                <p className="text-red-400 -translate-y-3">Invalid API Key</p>
                                                <button 
                                                    className="w-28 h-8 bg-almost-black-100 rounded-lg text-white font-bold shadow-md uppercase transition-all duration-300 hover:shadow-xl" 
                                                    onClick={verifyKeyHandler}
                                                >
                                                    Verify
                                                </button>

                                            </>
                                        )
                                    }

                                </>
                            ) : (
                                <>

                                    <label className="block place-self-start font-bold uppercase">
                                        OpenAI Key
                                    </label>
                                    <input 
                                        className="block w-full p-2.5 marker:text-sm bg-white text-almost-black-100 rounded-lg shadow-md" 
                                        type="password" 
                                        placeholder="sk-8fds2fhG7sdf9as4G2df1df6G3"
                                        name="key"
                                        onChange={(e) => setKey(e.target.value)}
                                    />
                                    <button 
                                        className="w-28 h-8 bg-almost-black-100 rounded-lg text-white font-bold shadow-md uppercase transition-all duration-300 hover:shadow-xl" 
                                        onClick={verifyKeyHandler}
                                    >
                                        Verify
                                    </button>

                                </>
                            )
                        }
                        <label className="block place-self-start font-bold uppercase">
                            Job Position
                        </label>
                        <input
                            className="block w-full p-2.5 marker:text-sm bg-white text-almost-black-100 rounded-lg shadow-md"
                            type="text"
                            placeholder="McDonalds Employee"
                            name="job"
                            onChange={(e) => setJob(e.target.value)}
                            required
                        />
                        <label className="block place-self-start font-bold uppercase">
                            Job Description
                        </label>
                        <textarea
                            id="description"
                            rows="3"
                            className="block w-full p-2.5 text-sm bg-white text-almost-black-100 rounded-lg shadow-md"
                            placeholder="As a McDonald's Restaurant Team Member, you will play a crucial role in delivering exceptional service and creating a positive dining..."
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <label className="block place-self-start font-bold uppercase">
                            Resume
                        </label>
                        <textarea
                            id="resume"
                            rows="4"
                            className="block w-full p-2.5 text-sm bg-white text-almost-black-100 rounded-lg shadow-md"
                            placeholder="   John Doe
                                            +1 234 567 8900
                                            1 Terry Lane, Somewhere, Somewhere Else
                            
                                            Objective:
                                            Highly motivated and adaptable individual seeking a challenging position to contribute my skills and expertise in Company. Committed to delivering exceptional results, collaborating effectively with teams, and continuously expanding my knowledge and abilities.
                            
                                            Education:
                                            ...
                                            "
                            name="resume"
                            onChange={(e) => setResume(e.target.value)}
                            required
                        />
                        {
                            keyStatus === "VALID" ? (

                                <button 
                                    className="w-36 h-12 bg-almost-black-100 rounded-lg text-white font-bold shadow-md uppercase transition-all duration-300 hover:shadow-xl" 
                                    type="submit"
                                    onClick={submitResumeHandler}
                                >
                                    {
                                        isSubmitted ? (

                                            <RefreshIcon className="animate-spin"/>

                                        ) : (

                                            "Submit"

                                        )
                                    }
                                </button>

                            ) : (<></>)
                        }
                    </form>

                )}
            </div>
        
        </>
    )
}
