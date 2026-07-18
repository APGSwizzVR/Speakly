"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProgressBar from "@/components/ProgressBar";
import LessonCard from "@/components/LessonCard";


export default function Dashboard(){

return (

<main className="
min-h-screen
bg-black
text-white
">

<Navbar/>

<Sidebar/>


<section className="
md:ml-72
pt-32
px-8
">


<h1 className="
text-5xl
font-bold
">

Welcome back 👋

</h1>


<p className="
text-gray-400
mt-3
">

Keep learning French every day.

</p>



<div className="
mt-10
glass
rounded-3xl
p-8
max-w-xl
">


<h2 className="
text-xl
font-bold
mb-5
">

Daily Goal

</h2>


<ProgressBar
progress={65}
/>


<p className="
mt-4
text-gray-400
">

650 / 1000 XP today

</p>


</div>



<div className="
mt-12
grid
md:grid-cols-3
gap-6
">


<LessonCard

title="Greetings"

description="Learn basic French conversations."

level="A1"

xp={50}

/>


<LessonCard

title="Travel French"

description="Useful phrases for travelling."

level="A1"

xp={75}

/>


<LessonCard

title="Food"

description="Learn restaurant vocabulary."

level="A2"

xp={100}

/>


</div>


</section>

</main>

)

}