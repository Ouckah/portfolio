import { getAxiosInstance, deleteAxiosInstance } from "../../axiosInstance";

const handler = (req, res) => {
    
    const { key } = req.body;
    const client = getAxiosInstance(key);

    const params = {
        prompt: "Hello",
        model: "text-davinci-003",
        max_tokens: 5,
        temperature: 0,
    }

    client
        .post('https://api.openai.com/v1/completions', params)
        .then((result) => {
            console.log(result);
            const response = result.data.choices[0].text;
            return res.status(200).json({ response: response });
        })
        .catch((err) => {
            console.error(err);

            // delete the not working axios instance
            deleteAxiosInstance();
            
            return res.status(400).json({ error: err });
        });

}

export default handler;