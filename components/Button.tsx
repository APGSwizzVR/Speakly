"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}


export default function Button({
  children,
  onClick,
  className = ""
}: ButtonProps) {

return (

<motion.button

whileHover={{
  scale:1.05
}}

whileTap={{
  scale:0.95
}}

onClick={onClick}

className={`
rounded-full
bg-indigo-600
px-6
py-3
font-semibold
text-white
transition
shadow-lg
hover:shadow-indigo-500/40
${className}
`}

>

{children}

</motion.button>

);

}