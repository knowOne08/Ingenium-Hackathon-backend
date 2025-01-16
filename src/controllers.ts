import { Request, Response } from "express";
import { getGroqResponse } from "./getAIReposnse";
// import { renderToStream } from "@react-pdf/renderer";
// import { MyPDF } from "./utils";

export const handleContractData = (req: Request, res: Response) => {
    // res.send("Data avi gayo che");
    console.log(req.body)
        const prompt = `
    You are a legal aid helper which will help me in creation of simple contracts

    Create a simple ${req.body.contract_type} contract 

    
    Make the contract according to these conditons: 
    

    This is the relevant information please include this in the contract 
    ${req.body.general_info}

    ${req.body.prompt  != '' ? 'This is how the contract should be formed so follow these condtions: \n' + req.body.prompt  : ''}

    Properly format this with bold, italics, titles etc.. wherever required using just simple html div
    `
    getGroqResponse(prompt)
        .then(async (htmlResponse) => {

            // res.set({
            //     'Content-Type': 'application/pdf',
            //     'Content-Disposition': 'attachment; filename="output.pdf"',
            // });

            res.json(htmlResponse?.toString())

        })
        .catch((error) => {
            console.error('Error:', error);
        });

//     const testAnswer = `
//       <div>
//         <h1>Power of Attorney Contract</h1>
        
//         <p>This Power of Attorney contract is made on [Date] between:</p>
//                 <p>Grantor: [Full Name of Grantor]</p>
//                 <p>Address: [Grantor's Address]</p>
//                 <p>Phone Number: [Grantor's Phone Number]</p>
//                 <p>And</p>
//                 <p>Attorney-in-Fact: [Full Name of Attorney-in-Fact]</p>
//                 <p>Address: [Attorney-in-Fact's Address]</p>
//                 <p>Phone Number: [Attorney-in-Fact's Phone Number]</p>
//                 <p>The Grantor hereby appoints the Attorney-in-Fact to act on their behalf in legal and financial matters, including but not limited to:</p>
//                 <ul>
//                   <li>Managing bank accounts</li>
//                   <li>Selling or purchasing real estate</li>
//                   <li>Signing legal documents</li>
//                 </ul>
//                 <p>This Power of Attorney shall be effective from [Date] and shall remain in effect until [Date] unless revoked earlier by the Grantor.</p>
//                 <p>Grantor's Signature: ________________________</p>
//                 <p>Date: ________________________</p>
//                 <p>Attorney-in-Fact's Signature: ________________________</p>
//                 <p>Date: ________________________</p>
//       </div>
// `

//     res.json(testAnswer)
}