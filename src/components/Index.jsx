

const Index = () => {
    const clients = ["Whop", "Aviato", "Tally", "Wish", "Rainbow", "Tiny Wins", "Linktree", "PVP", "Bags", "Surf", "Flooz", "LetsPay", "Candle", "Usual"];
    const workstyles = ["Brand sprints", "Wireframing", "User journeys", "Social assets", "Product design", "UX auditing", "Web design", "Consulting"];
    return (
        <div className="mt-5 space-y-5 cursor-default">
            <div className=" space-y-5">
                <h1 className="text-[22px] font-normal leading-6.75 text-black max-w-[18rem]">Design partner for AI, web3, and ambitious startups</h1>
                <p className="text-[14px]  max-w-68">A dedicated team of passionate designers with over 20 years in the game designing experiences used by millions of users.</p>
            </div>

            <div className=" space-y-5">
                <div className=" space-y-2">
                    <p className="text-[16px] font-normal text-[#737373] ">Past clients include</p>
                    <ul className=" grid grid-cols-2 justify-between items-center gap-y-1 max-w-3/5">
                        {clients.map((client, index) => (
                            <li key={index}>{client}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-x-2">
                    <button className="text-center text-[16px] py-1 px-2 rounded-2xl bg-black text-white hover:bg-gray-950 cursor-pointer">subscribe</button>
                    <button className="text-center text-[16px] py-1 px-2 rounded-2xl bg-[#F5F5F5] text-black hover:bg-[#f2ecec] cursor-pointer">Book a call</button>
                </div>
                
            </div>

            <div className=" space-y-5">
                <p className="text-[16px] max-w-xs font-normal text-[#737373]"><span className=" underline">We charge 10K USD per month. </span>Projects typically take 3-6 weeks. You can pause or cancel anytime for ultimate flexibility.</p>
                <ul className="grid grid-cols-2 justify-between items-center gap-y-1 text-[#737373] max-w-3/5">
                    {workstyles.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Index