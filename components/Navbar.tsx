"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function Navbar(){

return (

<motion.nav

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

className="
fixed
top-0
left-0
right-0
z-50
flex
items-center
justify-between
px-8
py-5
backdrop-blur-xl
bg-black/40
border-b
border-white/10
"

>


<h1 className="
text-2xl
font-bold
gradient-text
">

Lingora

</h1>



<div className="
hidden
md:flex
gap-8
text-gray-300
">


<Link href="/">
Home
</Link>


<Link href="/learn">
Learn
</Link>


<Link href="/quiz">
Quiz
</Link>


<Link href="/ai">
AI Tutor
</Link>


</div>



<Link

href="/login"

className="
rounded-full
bg-indigo-600
px-5
py-2
hover:bg-indigo-500
transition
"

>

Login

</Link>


</motion.nav>

)

}