import { useState } from "react";
import dynamic from 'next/dynamic';

// https://api.openai.com/v1/engines/davinci/completions

// lang chain
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

// markdown
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "../../../styles/markdown.module.css";

// components
import VerifyKeyForm from "../../../components/VerifyKeyForm";
import SubmitButton from "../../../components/SubmitButton";

// lazy loaded components
const MarkdownToPDFButton = dynamic(() =>
  import('../../../components/MarkdownToPDFButton').then((mod) => mod.MarkdownToPDFButton),
  { ssr: false }
);

export default function Resume() 
{
    // form submission status
    const [isSubmitted, setSubmitted] = useState(false);

    // client key status
    const [key, setKey] = useState(null);
    const [keyStatus, setKeyStatus] = useState(null); // 3 STATES -> null, "VALID", "INVALID" 

    // store input text
    const [job, setJob] = useState(null);
    const [description, setDescription] = useState(null);
    const [resume, setResume] = useState(null);

    // store new resume
    const [response, setResponse] = useState("");
    const [isDoneGenerating, setDoneGenerating] = useState(false);

    // TODO: Get controller abort working
    // signal for aborting chat when user exits early
    const controller = new AbortController();

    // handles form submission
    const submitResumeHandler = async (event) => {

        // prevent page from refreshing
        event.preventDefault();

        if (keyStatus === "VALID") {

            // send post req to internal form api
            // only make request if both inputs exist
            if (job && description && resume) {

                // set state to submitted
                setSubmitted(true);
                
                // creates a chat to respond to the user's request
                const chat = new ChatOpenAI({
                    openAIApiKey: key,
                    maxTokens: 1000,
                    streaming: true,
                    maxConcurrency: 5,
                });
                
                // makes an API call to OpenAI with the following context
                await chat.call([
                    
                    // context that the AI is a job recruiter fixing resumes
                    new SystemChatMessage(

                        `You are a highly experienced job recruiter with expertise in creating and modifying resumes to match specific job requirements. You have been presented with an original resume and have been tasked with customizing it to fit a particular job and job description. Your goal is to enhance the original resume by highlighting the candidate's relevant skills and experiences, ensuring it aligns with the desired position.

                        Given the original resume, your task is to make the necessary adjustments and modifications to tailor it to the specific job. Carefully review each section of the resume and incorporate details that best showcase the candidates qualifications for the position. Emphasize the key skills and experiences that directly relate to the job description provided.
        
                        Please convert the revised resume into a professional and well-formatted document, using Markdown. Ensure that the resume is concise, organized, and effectively highlights the candidate's suitability for the job. Your expertise as a recruiter will play a crucial role in optimizing the resume for the targeted position.
        
                        Remember, your modifications should only include relevant information, eliminating any unnecessary details. Provide the revised resume in Markdown format, ready to be presented to potential employers. Your expertise and attention to detail will greatly impact the candidate's chances of securing the desired job`
                    
                    ),
                    
                    // context of a human asking to have their resume rewritten
                    new HumanChatMessage(
                        
                        `Hi there! Here is the needed information:
                        Job: ${job},
                        Job Description: ${description},
                        Resume: (${resume})
            
                        If there is any language used in the original resume that is informal or otherwise not beneficial to getting the wanted ${job} position, rewrite it to a more professional tone and more catered towards the ${job} position. Also fix any grammatical and / or spelling errors in the resume. Keep the formatting in Markdown format.
            
                        At the end of the modified resume, include a section named "Most Relavent Skills for ${job} Position" that includes the most important skills for ${job} from the original resume along with the titles of the experiences and description of how those skills are used in the experiences provided in the original resume. Everything must be in Markdown format. Thank you for your hard work!`
                    
                    ),
                ],
                    { signal: controller.signal },
                    [
                        {
                            // as tokens are fed, append to end of response and display
                            handleLLMNewToken(token) {
                                setResponse((prevText) => prevText + token);
                            },
                        },
                    ]
                );

                // set state for generation
                setDoneGenerating(true);
            }

        }

    }

    // handle clearing the current resume
    const clearResumeHandler = (event) => {

        // prevent page from refreshing
        event.preventDefault();

        // abort current model call
        controller.abort();

        // set states to pre-submission
        setResponse("");
        setSubmitted(false);
        setDoneGenerating(false);

    }

    return (
        <>
            <div className="flex flex-col gap-3 justify-center items-center min-h-[25vh] bg-almost-black-500">
                <h1 className="lg:text-5xl text-3xl font-bold uppercase transition duration-300 hover:drop-shadow-lg">Resume Rewriter</h1>
                <p className="lg:text-xl text-md transition duration-300 opacity-50 hover:drop-shadow-lg">Unlock Your Career Potential. Transforming Resumes for Every Job and Opportunity!</p>
            </div>

            <div className='flex flex-col w-full min-h-[75vh] justify-center items-center bg-almost-black-500'>
                { response.length !== 0 ? (
                    <>

                        <div className='flex flex-row justify-between px-20 items-center w-full h-24 bg-almost-black-500'>
                            <button className="w-24 h-12 bg-almost-black-100 rounded-lg font-bold shadow-md uppercase transition-all duration-300 hover:shadow-xl" onClick={clearResumeHandler}>Back</button>
                            { 
                                isDoneGenerating ? (

                                    <MarkdownToPDFButton 
                                        markdown=
                                        {
                                            <div className={styles.markdown}>
                                                <ReactMarkdown>{response}</ReactMarkdown>
                                            </div>
                                        }
                                        fileName="Resume"
                                    />

                                ) : (<></>)
                            }
                        </div>

                        <div className="w-full min-h-full p-10 bg-almost-black-500">
                            <div className="w-full h-full p-10 bg-white rounded-lg">
                                <div className={styles.markdown}>
                                    <ReactMarkdown id="resume">{response}</ReactMarkdown>
                                </div>
                            </div>
                        </div>

                    </>
                ) : (

                    <form 
                        className='flex flex-col gap-5 justify-center items-center w-1/2 h-full overflow-hidden'
                    >
                        <VerifyKeyForm keyStatus={keyStatus} onChange={setKey} onVerify={setKeyStatus}/>

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
                        
                        <SubmitButton enabled={keyStatus === "VALID"} loading={isSubmitted} onClick={submitResumeHandler} />
                    </form>

                )}
            </div>
        
        </>
    )
}
