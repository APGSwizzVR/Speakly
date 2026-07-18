"use client";


import {motion} from "framer-motion";


export default function ProgressBar({
progress
}:{
progress:number
}){


return (

<div className="
w-full
h-3
rounded-full
bg-white/10
overflow-hidden
">


<motion.div

initial={{
width:0
}}

animate={{
width:`${progress}%`
}}

transition={{
duration:1
}}

className="
h-full
bg-gradient-to-r
from-indigo-500
to-purple-500
"

/>


</div>

)

}