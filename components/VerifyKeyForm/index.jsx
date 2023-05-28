import { useState } from "react";

const VerifyKeyForm = ({ onChange, onVerify }) => {

    // client key status
    const [key, setKey] = useState(null);
    const [keyStatus, setKeyStatus] = useState(null);

    // handle input changes
    const handleChange = ({ target }) => {  

        // set local key (for verfication)
        setKey(target.value);
        
        if (typeof onChange === 'function') {
            
            // call the callback passing in whatever parameters you decide
            onChange(target.value);

        }    
    }

    const handleVerification = (status) => {

        // set local key status (for rendering)
        setKeyStatus(status);

        console.log(keyStatus);

        if (typeof onVerify === 'function') {
            
            // call the callback passing in whatever parameters you decide
            onVerify(status);

        }  
    }

    // sends a test req with current key
    const sendTestRequest = async () => {
        
        // make request to test api key API
        const data = { key: key };

        try {
            const response = await fetch('../api/testApiKey', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
            });
    
            if (!response.ok) {
                handleVerification("INVALID");
    
                throw new Error("Invalid key given.");
            }
    
            handleVerification("VALID");
        } catch (err) {
            handleVerification("INVALID");

            console.error("There has been a problem with your fetch operation:", err);
        }

    }

    // handles key submission
    const verifyKeyHandler = async (event) => {

        // prevent page from refreshing
        event.preventDefault();
        
        await sendTestRequest();

    }

    return (
        <>

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
                                        className="block w-full p-2.5 marker:text-sm bg-gray-300 text-almost-black-100 rounded-lg shadow-md border-2 border-green-400" 
                                        type="password" 
                                        placeholder="sk-8fds2fhG7sdf9as4G2df1df6G3"
                                        name="key"
                                        onChange={handleChange}
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
                                        onChange={handleChange}
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
                            onChange={handleChange}
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

        </>

    )

}

export default VerifyKeyForm;