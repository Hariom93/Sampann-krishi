import React from "react";

const Careers = () => {
    return (
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
            <form className="border p-4 mt-40">
                <p className="font-semibold  text-xl mt-1">GIVE WINGSTO YOUR DREAMS. WORK WITH THE FUTURE OF INDIA</p>
                <p className="font-semibold  text-xl mt-3">TO JOIN US , SUBMIT YOUR RESUME BY FILLING UP THE FORM BELOW</p>
                <p className="text-xs text-gray-500 mt-3">Your Name (required)</p>
                <input type="text" className="border bg-gray-100 w-[60vw] p-1 mt-1" />
                <p className="text-xs text-gray-500 mt-3">Your Email (required)</p>
                <input type="email" className="border bg-gray-100 w-[60vw] p-1 mt-1" />
                <p className="text-xs text-gray-500 mt-3">Your Phone Number (required)</p>
                <input type="text" className="border bg-gray-100 w-[60vw] p-1 mt-1" />
                <p className="text-xs text-gray-500 mt-3">Position Applied For</p>
                <input type="text" className="border bg-gray-100 w-[60vw] p-1 mt-1" />
                <p className="text-xs text-gray-500 mt-3">Attach your CV in pdf, Doc or Docx format</p>
                <p className="text-xs text-gray-500 mt-3">(Not more than 500 kb)</p>
                <input type="file" className="border bg-gray-100 w-[60vw] p-1 mt-2" /><p></p>
                <button className="bg-emerald-900 py-2 px-20 text-white text-lg rounded-lg mt-8 mb-6">Send</button>
            </form>
        </div>
    )
}
export default Careers