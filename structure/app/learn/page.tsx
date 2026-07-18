"use client";

import lessons from "@/data/lessons.json";
import LessonCard from "@/components/LessonCard";
import Navbar from "@/components/Navbar";


export default function Learn(){

return (

<main className="
min-h-screen
bg-black
text-white
pt-32
px-8
">


<Navbar/>


<h1 className="
text-5xl
font-bold
">

French Lessons

</h1>


<p className="
text-gray-400
mt-3
">

Choose a lesson and start learning.

</p>



<div className="
mt-10
grid
md:grid-cols-3
gap-6
">


{

lessons.map((lesson)=>(

<LessonCard

key={lesson.id}

title={lesson.title}

description={lesson.description}

level={lesson.level}

xp={lesson.xp}

/>

))

}


</div>


</main>

)

}