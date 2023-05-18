import { useState } from "react"

import axios from "axios";

// markdown
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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

                    <div className="text-white">
                        <ReactMarkdown children={response} />
                    </div>

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
