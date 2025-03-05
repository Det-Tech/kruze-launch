import preSale from "../assets/presale/1.png"

const PreSale = () => {
    return (
        // <section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between flex-col px-[28px] py-[31px] background">
        <section className="w-full text-white flex justify-between flex-row px-[128px] background py-[37px] gap-[32px] transition-all max-[1200px]:px-[90px] max-lg:px-[50px] max-lg:flex-col max-md:px-[20px]">
            <div className="flex flex-col gap-[21px] w-[70%] max-lg:w-full">
                <div className="bg-[#00617B] rounded-[15px] w-full flex flex-row gap-[53px] px-[36px] py-[24px] items-center max-sm:flex-col max-md:px-[15px] max-md:py-[10px] max-md:gap-[20px] ">
                    <img src={preSale} alt="preSale" className="w-[190px] h-[190px] rounded-2xl max-md:w-[150px] max-md:h-[150px]" />
                    <div className="flex flex-col gap-[15px]">
                        <h1 className="exp-2 font-bold text-[40px] leading-[48px] text-start max-md:text-[30px] max-md:leading-[30px]">
                            VTMT Presale/ICO
                        </h1>
                        <p className="text-start exo-2 font-normal text-[20px] leading-[24px] max-md:text-[15px] max-md:leading-[20px]">
                            Join the Vitalment ($VTMT) presale on SUI Network. Best price before launch!
                        </p>
                        <div className="flex flex-row gap-[23px] justify-between items-center max-md:gap-[15px]">
                            <div className="flex w-[47%] flex-col px-[20px] pt-[10px] pb-[20px] items-start bg-[#047DA9] rounded-2xl">
                                <p className="exo-2 font-normal text-[20px] leading-[24px] max-md:text-[15px] max-md:leading-[20px]">
                                    Network
                                </p>
                                <p className="exo-2 font-bold text-[20px] leading-[24px] mt-[6px] max-md:text-[15px] max-md:leading-[20px]">
                                    SUI Chain
                                </p>
                            </div>
                            <div className="flex w-[47%] flex-col px-[20px] pt-[10px] pb-[20px] items-start bg-[#047DA9] rounded-2xl">
                                <p className="exo-2 font-normal text-[20px] leading-[24px] max-md:text-[15px] max-md:leading-[20px]">
                                    Total Supply
                                </p>
                                <p className="exo-2 font-bold text-[20px] leading-[24px] mt-[6px] max-md:text-[15px] max-md:leading-[20px]">
                                    5 Billion $VTMT
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#00617B] rounded-2xl w-full flex flex-col gap-[19px] px-[36px] py-[33px]">
                    <div className="flex flex-row justify-between gap-[23px] w-full max-lg:gap-[15px] max-sm:flex-col">
                        <div className="w-[33%] flex flex-col pt-[8px] pb-[15px] px-[16px] items-start bg-[#047DA9] rounded-2xl gap-[10px] max-lg:gap-[5px] max-sm:w-full">
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-lg:text-[15px] max-lg:leading-[20px]">Current Price</p>
                            <p className="exo-2 font-extrabold text-[24px] leading-[28.8px] text-[#76DBFF] max-lg:text-[20px] max-lg:leading-[24px]">$0.00</p>
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-lg:text-[15px] max-lg:leading-[20px]">per $VTMT</p>
                        </div>
                        <div className="w-[33%] flex flex-col pt-[8px] pb-[15px] px-[16px] items-start bg-[#047DA9] rounded-2xl gap-[10px] max-lg:gap-[5px] max-sm:w-full">
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-lg:text-[15px] max-lg:leading-[20px]">Future Price</p>
                            <p className="exo-2 font-extrabold text-[24px] leading-[28.8px] text-[#76DBFF] max-lg:text-[20px] max-lg:leading-[24px]">$0.00</p>
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-lg:text-[15px] max-lg:leading-[20px]">per $VTMT</p>
                        </div>
                        <div className="w-[33%] flex flex-col pt-[8px] pb-[15px] px-[16px] items-start bg-[#047DA9] rounded-2xl gap-[10px] max-lg:gap-[5px] max-sm:w-full">
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-lg:text-[15px] max-lg:leading-[20px]">FDV</p>
                            <p className="exo-2 font-extrabold text-[24px] leading-[28.8px] text-[#76DBFF] max-lg:text-[20px] max-lg:leading-[24px]">$1.5M</p>
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-lg:text-[15px] max-lg:leading-[20px]">Fully Diluted Value</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#047DA9] rounded-2xl gap-[8px] pt-[33px] pb-[23px] px-[34px]">
                        <div className="flex flex-row justify-between w-full">
                            <h2 className="exo-2 font-extrabold text-[24px] leading-[28.8px] max-sm:text-[20px] max-sm:leading-[24px]">Buy $VTMT</h2>
                            <span className="exo-2 font-normal text-[20px] leading-[24px] max-sm:text-[15px] max-sm:leading-[20px]">Balnace</span>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-sm:text-[15px] max-sm:leading-[20px]">1 SUI = 370 $VTMT</p>
                            <h2 className="exo-2 font-extrabold text-[24px] leading-[28.8px] max-sm:text-[20px] max-sm:leading-[24px]">0 SUI</h2>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-[32px] max-sm:flex-col max-sm:gap-[15px]">
                            <input type="text" className="w-[70%] rounded-2xl max-sm:min-w-[280px] bg-[#0592C6] max-md:h-[50px] pl-[25px] max-md:placeholder:text-[15px] border-none outline-none h-[70px] placeholder:font-bold placeholder:text-[20px] placeholder:leading-[24px] placeholder:text-white" placeholder="Enter SUI amount" />
                            <button className="w-[30%] bg-[#12FF89] max-sm:min-w-[100px] text-black rounded-2xl h-[70px] max-md:h-[50px] exo-2 font-bold text-[20px] max-md:text-[15px] leading-[24px]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-[36px] pt-[20px] pb-[37px] bg-[#00617B] rounded-2xl gap-[15px]">
                    <div className="flex flex-row justify-between text-white w-full">
                        <p className="exo-2 font-bold text-[20px] leading-[24px]">
                            Sale Progress
                        </p>
                        <p className="exo-2 font-bold text-[20px] leading-[24px]">
                            100%
                        </p>
                    </div>
                    <span className="w-full bg-[#12FF89] rounded-2xl h-[30px]"></span>
                </div>
            </div>
            <div className="flex flex-col gap-[24px] w-[30%] max-lg:flex-row max-lg:w-full max-md:flex-col">
                <div className="flex flex-col rounded-2xl p-[30px] gap-[22px] bg-[#00617B]">
                    <div className="flex flex-row justify-between max-sm:flex-col max-sm:items-start">
                        <h3 className="text-[#12FF89] exo-2 font-extrabold text-[24px] leading-[28.8px]">LIVE NOW</h3>
                        <span className="exo-2 font-medium text-[24px] leading-[28.8px] text-right">07:22:44:20</span>
                    </div>
                    <div className="flex flex-col px-[17px] pt-[8px] pb-[22px] w-full rounded-2xl items-start bg-[#047DA9]">
                        <p className="exo-2 !font-normal text-[20px] leading-[24px]">
                            Min Purchase
                        </p>
                        <h2 className="exo-2 font-extrabold text-[20px] leading-[24px] mt-[10px]">
                            10 SUI
                        </h2>
                    </div>
                    <div className="flex flex-col px-[17px] pt-[8px] pb-[22px] w-full rounded-2xl items-start bg-[#047DA9]">
                        <p className="exo-2 !font-normal text-[20px] leading-[24px]">
                            Max Purchase
                        </p>
                        <h2 className="exo-2 font-extrabold text-[20px] leading-[24px] mt-[10px]">
                            1000 SUI
                        </h2>
                    </div>
                    <div className="flex flex-col px-[17px] pt-[8px] pb-[22px] w-full rounded-2xl items-start bg-[#047DA9]">
                        <p className="exo-2 !font-normal text-[20px] leading-[24px]">
                            Participants
                        </p>
                        <h2 className="exo-2 font-extrabold text-[20px] leading-[24px] mt-[10px]">
                            1,234
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col px-[17px] py-[25px] w-full rounded-2xl items-start bg-[#00617B]">
                    <h1 className="exo-2 font-bold text-[24px] leading-[28.8px] text-start">
                        Important Information
                    </h1>
                    <p className="exo-2 font-medium text-[20px] leading-[24px] mt-[15px] text-start">
                        Tokens will be distributed after the sale ends
                    </p>
                    <p className="exo-2 font-medium text-[20px] leading-[24px] mt-[15px] text-start">
                        Price will increase to $0.003 after presale.
                    </p>
                    <p className="exo-2 font-medium text-[20px] leading-[24px] mt-[15px] text-start">
                        Max Supply wont be reached for 8 to 10 years
                    </p>
                    <p className="exo-2 font-medium text-[20px] leading-[24px] mt-[15px] text-start">
                        700M Coins minted at TGE
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PreSale;