import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});



export async function frenchTutor(
  message:string,
  level:string = "A1"
){


const response =
await openai.chat.completions.create({

model:"gpt-4.1-mini",


messages:[

{
role:"system",

content:
`
You are Lingora AI,
a friendly French teacher.

Help users learn French.

Student level:
${level}

Rules:
- Reply mainly in French
- Explain mistakes in English
- Correct grammar
- Teach naturally
`
},


{
role:"user",
content:message
}

]


});


return (
response
.choices[0]
.message
.content 
?? 
""
);


}