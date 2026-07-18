"use client";


import {motion} from "framer-motion";


interface Props{

question:string;
options:string[];
select:(answer:string)=>void;

}


export default function QuizCard({
question,
options,
select

}:Props){


return (

<div className="
glass
rounded-3xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-8
">

{question}

</h2>



<div className="
grid
gap-4
">


{

options.map(option=>(

<motion.button

key={option}

whileHover={{
scale:1.03
}}

onClick={()=>select(option)}

className="
rounded-xl
border
border-white/10
p-4
text-left
hover:bg-white/10
transition
"

>

{option}

</motion.button>

))

}


</div>


</div>

)

}