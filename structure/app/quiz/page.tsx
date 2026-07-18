"use client";

import QuizCard from "@/components/QuizCard";


export default function Quiz(){

function answer(option:string){

console.log(option);

}


return (

<main className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
px-6
">


<QuizCard

question="What does Bonjour mean?"

options={[
"Hello",
"Goodbye",
"Thanks",
"Please"
]}

select={answer}

/>


</main>

)

}