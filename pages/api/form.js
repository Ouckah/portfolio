import { getAxiosInstance } from "../../axiosInstance";

const handler = (req, res) => {

    const { key, job, resume } = req.body;
    const client = getAxiosInstance(key);

    // make call to openai 
    const params = {

        prompt: `Sure! Here's my resume: ${resume}. I'm targeting a ${job} position. 
                Can you help me make the necessary adjustments to highlight my relevant skills and experience for that role?
                Also, I need this response to be in Markdown so I can implement it into my website.
                And do not respond to this message with a friendly response, only put the new resume in Markdown.`,

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