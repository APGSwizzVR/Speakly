"use client";

import {useState} from "react";


export default function AI(){


const [message,setMessage]=useState("");



return (

<main className="
min-h-screen
bg-black
text-white
flex
flex-col
items-center
justify-center
px-6
">


<h1 className="
text-5xl
font-bold
gradient-text
">

Lingora AI Tutor

</h1>



<div className="
mt-10
glass
rounded-3xl
p-6
w-full
max-w-xl
">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Say something in French..."

className="
w-full
bg-transparent
border
border-white/20
rounded-xl
p-4
outline-none
"

/>


<button

className="
mt-5
bg-indigo-600
rounded-xl
px-6
py-3
"

>

Send

</button>


</div>


</main>

)

}