import { getAxiosInstance } from "../../axiosInstance";

const handler = (req, res) => {

    const { key, job, resume } = req.body;
    const client = getAxiosInstance(key);

    // make call to openai 
    const params = {

        prompt: `Given my resume (${resume}), I need your assistance in modifying it to cater to a ${job} position. 
        Please carefully review each section and make adjustments to highlight my relevant skills and experience. 
        Once the revisions are complete, convert the resume to a professional Markdown format suitable for my website, ensuring appropriate headers and lists are used. 
        The revised resume should only include necessary information without any unnecessary details. 
        To further emphasize my suitability for the ${job} position, include a dedicated section titled "Most Relevant For ${job} Position" at the end of the resume, showcasing the key skills from the original resume that are most applicable. 
        I request that you provide the modified resume in Markdown format exclusively. 
        Please do not include a section in the resume stating I have a position as a ${job}, as I am currently applying for this position. 
        Thank you for your assistance!`,

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
            console.log(err);
            return res.status(400).json({ error: err });
        })
}

export default handler;