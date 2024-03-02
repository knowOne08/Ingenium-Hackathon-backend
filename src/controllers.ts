import { Request, Response } from "express";
import { getChatGPTResponse } from "./getAIReposnse";

export const handleContractData = (req: Request, res: Response) => {
    res.send("Data avi gayo che");
    console.log(req.body)
    const prompt = `
You are a legal aid helper which will help me in creation of simple contracts

Create a simple ${req.body.contract_type} contract using this following information

${req.body.genreal_info}

Make the contract according to these conditons: 

${req.body.prompt}

Give proper format using just simple html and a4 size
`
    getChatGPTResponse(prompt)
        .then((htmlResponse) => {
            // console.log(response);
            res.send(htmlResponse)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}