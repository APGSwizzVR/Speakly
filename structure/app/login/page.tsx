export default function Login(){

return (

<main className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
">


<div className="
glass
rounded-3xl
p-10
w-full
max-w-md
">


<h1 className="
text-4xl
font-bold
">

Login

</h1>


<input
placeholder="Email"
className="
mt-6
w-full
rounded-xl
bg-white/10
p-4
"
/>


<input
placeholder="Password"
type="password"
className="
mt-4
w-full
rounded-xl
bg-white/10
p-4
"
/>


<button
className="
mt-6
bg-indigo-600
rounded-xl
px-6
py-3
w-full
">

Login

</button>


</div>


</main>

)

}