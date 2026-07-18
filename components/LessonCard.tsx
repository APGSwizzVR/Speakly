"use client";

import {motion} from "framer-motion";


interface Props {

title:string;
description:string;
level:string;
xp:number;

}


export default function LessonCard({
title,
description,
level,
xp

}:Props){


return (

<motion.div

whileHover={{
y:-8
}}

className="
glass
rounded-3xl
p-6
cursor-pointer
transition
"


>


<div className="
flex
justify-between
">

<h2 className="
text-xl
font-bold
">

{title}

</h2>


<span className="
text-indigo-400
">

{level}

</span>


</div>


<p className="
mt-3
text-gray-400
">

{description}

</p>


<div className="
mt-5
text-sm
text-purple-400
">

+{xp} XP

</div>


</motion.div>

)

}