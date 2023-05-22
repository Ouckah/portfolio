import { getAxiosInstance } from "../../axiosInstance";

const handler = (req, res) => {

    const { key, job, description, resume } = req.body;
    const client = getAxiosInstance(key);

    // make call to openai 
    const params = {

        prompt: 
        
        `You are a highly experienced job recruiter with expertise in creating and modifying resumes to match specific job requirements. You have been presented with an original resume and have been tasked with customizing it to fit a particular job and job description. Your goal is to enhance the original resume by highlighting the candidate's relevant skills and experiences, ensuring it aligns with the desired position.

        Given the original resume, your task is to make the necessary adjustments and modifications to tailor it to the specific job. Carefully review each section of the resume and incorporate details that best showcase the candidate's qualifications for the position. Emphasize the key skills and experiences that directly relate to the job description provided.
        
        Please convert the revised resume into a professional and well-formatted document, using Markdown. Ensure that the resume is concise, organized, and effectively highlights the candidate's suitability for the job. Your expertise as a recruiter will play a crucial role in optimizing the resume for the targeted position.
        
        Remember, your modifications should only include relevant information, eliminating any unnecessary details. Provide the revised resume in Markdown format, ready to be presented to potential employers. Your expertise and attention to detail will greatly impact the candidate's chances of securing the desired job.

        Here is the needed information:
        Job: ${job},
        Job Description: ${description},
        Resume: (${resume})

        If there is any language used in the original resume that is informal or otherwise not beneficial to getting the wanted ${job} position, rewrite it to a more professional tone and more catered towards the ${job} position. Also fix any grammatical and / or spelling errors in the resume. Keep the formatting in Markdown format.

        At the end of the modified resume, include a section named "Most Relavent Skills for ${job} Position" that includes the most important skills for ${job} from the original resume along with the titles of the experiences and description of how those skills are used in the experiences provided in the original resume. Everything must be in Markdown format. Thank you for your hard work!`,

        model: "text-davinci-003",
        max_tokens: 2000,
        temperature: 0,
    };

    client
        .post("https://api.openai.com/v1/completions", params)
        .then((result) => {
            console.log(result);
            const response = result.data.choices[0].text;
            return res.status(200).json({ response: response });
        })
        .catch((err) => {
            console.error(err);
            return res.status(400).json({ error: err });
        })
}

export default handler;