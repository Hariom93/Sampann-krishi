import React from "react";
const About = () => {
    return (
        <div className="flex justify-center items-center gap-20">
            <div className="mt-40">
                <img src="https://media.istockphoto.com/id/506431017/photo/soybean-field.jpg?s=612x612&w=0&k=20&c=s6gmlFYRIozqDz0_Hy0xm76uvICBGLOwGPVNvIOjrBk="
                    className="h-[20rem] w-[25rem] "></img>
                <img src="https://nationaltoday.com/wp-content/uploads/2020/12/kisan-1.jpg" className="h-[20rem] w-[25rem] mt-10"></img>
            </div>
            <div>
                <h1 className="font-bold text-6xl text-emerald-900 mt-20">About Us</h1>
                <div className=" text-green-900 mt-7 flex gap-4">
                    <input type="checkbox" className="h-10 w-10 rounded-lg mt-4 text-green-300"></input>
                    <p className="w-[25rem] text-lg"><span className="text-lg font-bold">At SAMPANN KRISHI,</span>we are revolutionizing the
                        agricultural market in India. Our mission is to
                        empower farmers by helping them produce
                        high-quality vegetables, fruits, grains, and more,
                        and connect them directly to consumers
                        through leading online grocery platforms</p>
                </div>
                <div className="flex gap-4">
                    <input type="checkbox" className="h-10 w-10 rounded-lg mt-9"></input>
                    <p className="w-[25rem] text-lg mt-5"><span className="text-lg font-bold">Values:</span> Our core values include integrity,
                        innovation, and community engagement,
                        guiding all aspects of our operations and
                        decision-making processes.</p>
                </div>
            </div>
        </div>
    )
}
export default About