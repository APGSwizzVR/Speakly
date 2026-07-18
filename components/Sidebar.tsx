"use client";

import Link from "next/link";
import {
BookOpen,
Brain,
Trophy,
User
} from "lucide-react";


export default function Sidebar(){

const links=[

{
name:"Learn",
icon:<BookOpen/>,
url:"/learn"
},

{
name:"AI Tutor",
icon:<Brain/>,
url:"/ai"
},

{
name:"Leaderboard",
icon:<Trophy/>,
url:"/leaderboard"
},

{
name:"Profile",
icon:<User/>,
url:"/profile"
}

];


return (

<aside className="
hidden
md:flex
fixed
left-0
top-0
h-screen
w-72
flex-col
p-6
bg-black/50
backdrop-blur-xl
border-r
border-white/10
">


<h1 className="
text-3xl
font-bold
gradient-text
mb-12
">

Lingora

</h1>


{

links.map((item)=>(

<Link

key={item.name}

href={item.url}

className="
flex
items-center
gap-4
p-4
rounded-xl
text-gray-300
hover:bg-white/10
transition
"

>

{item.icon}

{item.name}

</Link>

))

}


</aside>

)

}