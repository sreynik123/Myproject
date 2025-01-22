export  default function Myappbutton({onClick,icon}) {
     return (
         <button
             onClick={onClick}
             className=" px-4 py-4 text-indigo-600 duration-1000 bg-red-950 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
         >
             {icon}
         </button>
     )
 }