import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { login } from "../features/auth/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Login  ()  {




    const nagivate =useNavigate()
const dispatch = useDispatch ()
const {isAuthenticated} =useSelector (state=> state.auth)
useEffect (()=>{
  console .log ('use effect')
     console.log ('auth ',isAuthenticated)
 if (isAuthenticated){
    //Routh to '/'
    nagivate ('/')
 }
},[nagivate,isAuthenticated])


const formik  =useFormik({
    initialValues:{
        email:'',
        password:'',
    },
    validationSchema: Yup.object({
        password: Yup.string()
         .min (8,'Must be 8 characters up')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        
        email: Yup.string()
                    .email('Invalid email address')
                   .required('Required'),
      }),
   
    onSubmit:value=>{
        console.log('value from formik',value)
         dispatch (login(value))
    }

}
)
    return (
        <main className="flex items-center justify-center min-h-screen ">
            <div className="p-8  rounded-2xl shadow-lg w-96 relative border-2 animate-glow border-green-500">
              
                <div className="px-4  sm:text-center sm:text-4xl sm:px-0">
                    <img src="https://miro.medium.com/v2/resize:fit:400/1*Y9-6_bh5a00rJWWoQ28NMQ.jpeg" width={150} className="mx-auto" />
                    <div className="mt-5">
                        <h3 className="text-center text-blue-600 text-3xl font-bold mb-6">Log in to your account</h3>
                    </div>
                </div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="space-y-5"
                >
                    <div className="mb-4">
                        <label className="block text-blue-700 font-semibold mb-2" >
                            Email
                        </label>
                        <input
                        onChange={formik.handleChange}
                        value={formik.email}
                         id="email"
                         name="email"
                            type="email"
                            className="w-full p-3 rounded bg-transparent text-black  border-2 animate-glow border-yellow-400"
                        />
                        {formik.touched.email && formik.errors.email ? (
                             <div className="text-red-900">{formik.errors.email}</div>
                              ) : null}
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                        onChange={formik.handleChange}
                        value={formik.password}
                         id="password"
                         name="password"
                            type="password"
                          
                            className="w-full p-3 rounded bg-transparent text-black animate-glow  border-2 border-yellow-400"
                        />
                        {formik.touched.password&& formik.errors.password ? (
         <div className="text-red-800">{formik.errors.password}</div>
       ) : null}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-x-3">
                            <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
                            <label
                                htmlFor="remember-me-checkbox"
                                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                            >
                            </label>
                            <span>Remember me</span>
                        </div>
                        <a href="javascript:void(0)" className="text-center text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    <button
                    type="submit"
                        className="w-full p-3 font-bold rounded-lg animate-glow bg-yellow-400 text-black"
                    >
                        LOGIN
                    </button>
                </form>
               
                <p className="text-center">Don't have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
            </div>
        </main>
    )
}