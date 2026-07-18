"use client";


import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  MessageCircle,
  Trophy,
  ArrowRight
} from "lucide-react";


export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white overflow-hidden">


      {/* Background */}

      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-indigo-900/30
        via-black
        to-purple-900/30
      "/>


      <section className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-6
        text-center
      ">


        <motion.div
          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}
        >


          <h1 className="
            text-6xl
            md:text-8xl
            font-bold
            tracking-tight
          ">

            Learn French

            <br/>

            <span className="gradient-text">
              Smarter.
            </span>

          </h1>


          <p className="
            mt-8
            max-w-xl
            text-lg
            text-gray-400
          ">

            Master French with interactive lessons,
            AI conversations, quizzes and personalised
            learning paths.

          </p>



          <div className="
            mt-10
            flex
            justify-center
            gap-5
          ">


            <button
              className="
                button-glow
                flex
                items-center
                gap-2
                rounded-full
                bg-indigo-600
                px-8
                py-4
                font-semibold
              "
            >

              Start Learning

              <ArrowRight size={20}/>

            </button>


            <button
              className="
                rounded-full
                border
                border-white/20
                px-8
                py-4
                hover:bg-white/10
                transition
              "
            >

              Explore Lessons

            </button>


          </div>


        </motion.div>



        {/* Feature cards */}


        <div className="
          mt-24
          grid
          md:grid-cols-4
          gap-6
          max-w-6xl
          w-full
        ">


          <Feature
            icon={<BookOpen/>}
            title="Lessons"
            text="Structured courses from beginner to fluent."
          />


          <Feature
            icon={<Brain/>}
            title="AI Tutor"
            text="Practice real conversations."
          />


          <Feature
            icon={<MessageCircle/>}
            title="Speaking"
            text="Improve your pronunciation."
          />


          <Feature
            icon={<Trophy/>}
            title="Progress"
            text="Earn XP and track your skills."
          />


        </div>


      </section>


    </main>

  );
}



function Feature({
  icon,
  title,
  text
}:{
  icon:React.ReactNode,
  title:string,
  text:string
}) {


return (

<motion.div

whileHover={{
  y:-8
}}

className="
glass
rounded-3xl
p-6
text-left
transition
"

>

<div className="
text-indigo-400
mb-4
">

{icon}

</div>


<h3 className="
font-bold
text-xl
">

{title}

</h3>


<p className="
mt-2
text-gray-400
">

{text}

</p>


</motion.div>

)

}