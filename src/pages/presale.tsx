import React, { useState, useEffect } from "react";
import {
  Wallet,
  Clock,
  ExternalLink,
  Lock,
  Info,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useSuiClient, useWallet } from '@suiet/wallet-kit';
import { toast } from "react-hot-toast";
import { admin_deposit, admin_update_launchpad, admin_update_price, admin_withdraw, admin_update_claim_status, claim, buy, newLaunch } from "./../lib/web3";
import { firstTargetSupply, launchpadCoinType, totalSaleSupply, treasuryObjectId } from "./../config";
import axios from "axios";
import preSale from "../assets/presale/1.png"

const PreSale = () => {
    const wallet = useWallet();
    const client = useSuiClient();
    const [isBonus, setIsBonus] = useState(false);
    const [suiAmount, setSuiAmount] = useState(0);
    const [balance, setBalance] = useState<any>(0);
    const [claimableBalance, setClaimableBalance] = useState<any>(0);
    const [reload, setReload] = useState(true);
    const [liveTime, setLiveTime] = useState<any>();
    const [progress, setProgress] = useState<any>(130);
    
  
    const [treasuryObject, setTreasuryObject] = useState<any>();
    const totalSupply = 500_000_000; // 500M VTMT
    const futurePrice = 0.003; // Future price
  
    useEffect(() => {
        axios.get("https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam")
        .then(data=>{
          const dateA: any = new Date('2025-03-08T12:00:00'); // Example future date
          const dateB: any = new Date(data.data?.dateTime); // Example past date
    
          // Calculate the initial difference in seconds
          const initialDifference = Math.floor((dateA - dateB) / 1000); // Difference in seconds
      
          setLiveTime(initialDifference)
        })
      }, [])
    
      // Toggle bonus stage effect
      useEffect(() => {
        const interval = setInterval(() => {
          setIsBonus((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
      }, []);
    
     // live time
      useEffect(() => {
        if(liveTime){
          const interval = setInterval(() => {
            setLiveTime((prevTime) => prevTime - 1);
          }, 1000);
          return () => clearInterval(interval);
        }
      }, [liveTime]);
    
       // Function to format the time left into hh:mm:ss
       const formatTime = (seconds: any) => {
        let hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const days = String(Math.floor(Number(hours) / 24)).padStart(2, '0');
        hours = String(Number(hours) % 24).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${days}:${hours}:${minutes}:${secs}`;
      };
    
      const newLaunchHandle = async () => {
        try{
          if(!wallet?.account?.address){
            return toast.error("Wallet Connect");
          }
    
          const tt = toast.loading("Launching ...");
    
          if(await newLaunch(wallet, client)){
            toast.success("new launched successfully", { id: tt });
          }else{
            toast.error("launched Error", { id: tt });
          }
        }catch(err){
          console.log(err)
        }
      }
    
      const adminDepositHandle = async () => {
        try{
          if(!wallet?.account?.address){
            return toast.error("Wallet Connect");
          }
    
          const tt = toast.loading("Depositing...");
          
          if(await admin_deposit(wallet, client, 2000_000_000_000)){
            toast.success("Deposited successfully", { id: tt });
          }else{
            toast.error("Deposit Error", { id: tt });
          }
        }catch(err){
          console.log(err) 
        }
      }
    
      const adminWithdrawHandle = async () => {
        try{
          if(!wallet?.account?.address){
            return toast.error("Wallet Connect");
          }
    
          const tt = toast.loading("Withdrawing...");
          
          if(await admin_withdraw(wallet, client)){
            toast.success("Withdraw successfully", { id: tt });
          }else{
            toast.error("Withdraw Error", { id: tt });
          }
        }catch(err){
          console.log(err)
        }
      }
    
      const adminUpdateLaunchpadHandle = async () => {
        try{
          if(!wallet?.account?.address){
            return toast.error("Wallet Connect");
          }
    
          const tt = toast.loading("Update launchpad...");
          
          if(await admin_update_launchpad(wallet, client, true)){
            toast.success("Update launchpad successfully", { id: tt });
          }else{
            toast.error("Update launchpad Error", { id: tt });
          }
        }catch(err){
          console.log(err)
        }
      }
    
      const adminUpdatePriceHandle = async () => {
        try{
          if(!wallet?.account?.address){
            return toast.error("Wallet Connect");
          }
    
          const tt = toast.loading("Update launchpad price...");
          
          if(await admin_update_price(wallet, client, 3200)){
            toast.success("Update launchpad price successfully", { id: tt });
          }else{
            toast.error("Update launchpad price Error", { id: tt });
          }
        }catch(err){
          console.log(err)
        }
      }
    
      const adminUpdateClaimStatusHandle = async () => {
        try{
          if(!wallet?.account?.address){
            return toast.error("Wallet Connect");
          }
    
          const tt = toast.loading("Update launchpad ClaimStatus...");
          
          if(await admin_update_claim_status(wallet, client, true)){
            toast.success("Update launchpad ClaimStatus successfully", { id: tt });
          }else{
            toast.error("Update launchpad ClaimStatus Error", { id: tt });
          }
        }catch(err){
          console.log(err)
        }
      }
    
      const buyHandle = async () => {
        try{
          if(!wallet?.account?.address){
            return toast.error("Wallet Connect");
          }
          if(suiAmount == 0){
            return toast.error("Input Amount");
          }
          console.log("balance ", balance)
          if(suiAmount < 1 || Number(balance) < 1) {
            return toast.error("insufficient SUI amount, at least 25 SUI!");
          }
    
          const tt = toast.loading("Buying $VTMT ...");
    
          if(await buy(wallet, client, suiAmount)){
            setReload(!reload);
            toast.success("Bought successfully", { id: tt });
          }else{
            toast.error("Buying $VTMT Error", { id: tt });
          }
        }catch(err){
          console.log(err)
        }
      }
    
      const claimHandle = async () => {
        try{
          if(!wallet?.account?.address){
            return toast.error("Wallet Connect");
          }
    
          if(treasuryObject && treasuryObject?.data.content.fields.claimStatus == false){
            return toast.error("Yet cant claim, plz wait some time...");
          }
    
          const tt = toast.loading("Claim $VTMT ...");
    
          if(await claim(wallet, client)){
            setReload(!reload);
            toast.success("Claimed successfully", { id: tt });
          }else{
            toast.error("Claim $VTMT Error", { id: tt });
          }
        }catch(err){
          console.log(err)
        }
      }
    
    
      useEffect(() => {
        if(wallet?.account?.address){
          client.getObject({
            id: treasuryObjectId,
            options: {
              showContent: true
            }
          }).then((data: any) => {
            console.log("treauryObject ", data);
            const vtmtTreasury = Number(data?.data?.content?.fields?.vitalTreasury)
            console.log("participants len ", data?.data?.content?.fields.balanceOf?.fields?.contents.length)
            console.log("progress ", Number(data?.data?.content?.fields?.totalSoldVital) / totalSaleSupply)
            const decimal = 1_000_000;
            setProgress(((Number(data?.data?.content?.fields?.totalSoldVital) / totalSaleSupply) / decimal * 100).toFixed(6))
            setTreasuryObject(data)
            let temp = data?.data?.content?.fields?.balanceOf.fields.contents.filter((item: any)=> item?.fields?.key.includes(wallet?.account?.address))
            // console.log(temp && temp.length > 0 && temp[0]?.fields.value)
            const sui = temp && temp.length > 0 && (Number(temp[0]?.fields.value)/ 1_000_000).toFixed(2) || 0;
            setClaimableBalance(sui);
            // console.log(data?.data?.content?.fields?.balanceOf.fields.contents) 
          })     
        }
      }, [client, wallet, reload])
     
      useEffect(() => {
        if(wallet.account?.address){
          (client.getBalance({owner:wallet?.account?.address})).then((data: any)=>{
            setBalance((Number(data?.totalBalance)/Number(1000000000)).toFixed(3))
          }).catch((err: any)=>{});
        }
      }, [wallet])
    
    
      useEffect(() => {
        if(wallet.account?.address && client) {
          getAllCoins();
        }
      }, [wallet, client])
    
      const getAllCoins = async () => {
        let cursor = null;
        let coins: any = []
        while (true) {
            const objects: any = await client.getOwnedObjects({
                owner: wallet?.account?.address?.toString()!,
                options: { showType: true, showContent:true, showDisplay:true,  },
                cursor,
            });
            objects.data.map((item: any) => {
                if(item.data?.type?.includes("0x3::staking")){
                    // coins.push(item.data);
                } else if(!item.data?.type?.includes("0x2::coin")){
                    // nft.push(item.data);
                }
                else {
                    coins.push(item.data);
                }
            })
            cursor = objects.nextCursor;
            if(!objects.hasNextPage){
                break;
            }
        }
        const filtered = coins.filter((item : any)=>item.type.includes(launchpadCoinType))
        console.log("coins ", filtered)
    }
    

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
                            <p className="exo-2 font-extrabold text-[24px] leading-[28.8px] text-[#76DBFF] max-lg:text-[20px] max-lg:leading-[24px]">$0.003</p>
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-lg:text-[15px] max-lg:leading-[20px]">per $VTMT</p>
                        </div>
                        <div className="w-[33%] flex flex-col pt-[8px] pb-[15px] px-[16px] items-start bg-[#047DA9] rounded-2xl gap-[10px] max-lg:gap-[5px] max-sm:w-full">
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-lg:text-[15px] max-lg:leading-[20px]">Future Price</p>
                            <p className="exo-2 font-extrabold text-[24px] leading-[28.8px] text-[#76DBFF] max-lg:text-[20px] max-lg:leading-[24px]">$0.1</p>
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
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-sm:text-[15px] max-sm:leading-[20px]">25 SUI = 55,555 $VTMT</p>
                            <h2 className="exo-2 font-extrabold text-[24px] leading-[28.8px] max-sm:text-[20px] max-sm:leading-[24px]">{balance} SUI</h2>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <p className="exo-2 font-normal text-[20px] leading-[24px] max-sm:text-[15px] max-sm:leading-[20px]">Claimable Amount</p>
                            <h2 className="exo-2 font-extrabold text-[24px] leading-[28.8px] max-sm:text-[20px] max-sm:leading-[24px]">{claimableBalance} VTMT</h2>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-[32px] max-sm:flex-col max-sm:gap-[15px]">
                            <input 
                            onChange={(e: any)=>setSuiAmount(e.target.value)}
                            type="text" className="w-[70%] rounded-2xl max-sm:min-w-[280px] bg-[#0592C6] max-md:h-[50px] pl-[25px] max-md:placeholder:text-[15px] border-none outline-none h-[70px] placeholder:font-bold placeholder:text-[20px] placeholder:leading-[24px] placeholder:text-white" placeholder="Enter SUI amount" />
                            <button 
                            onClick={buyHandle}
                            className="w-[30%] bg-[#12FF89] cursor-pointer max-sm:min-w-[100px] text-black rounded-2xl h-[70px] max-md:h-[50px] exo-2 font-bold text-[20px] max-md:text-[15px] leading-[24px]">Buy Now</button>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-[32px] max-sm:flex-col max-sm:gap-[15px]">
                            <button 
                            onClick={claimHandle}
                            className="w-[30%] bg-[#12FF89] cursor-pointer max-sm:min-w-[100px] text-black rounded-2xl h-[70px] max-md:h-[50px] exo-2 font-bold text-[20px] max-md:text-[15px] leading-[24px]">Claim now</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-[36px] pt-[20px] pb-[37px] bg-[#00617B] rounded-2xl gap-[15px]">
                    <div className="flex flex-row justify-between text-white w-full">
                        <p className="exo-2 font-bold text-[20px] leading-[24px]">
                            Sale Progress
                        </p>
                        <p className="exo-2 font-bold text-[20px] leading-[24px]">
                            {progress}%
                        </p>
                    </div>
                    <div className="w-full bg-[#625f59] h-[30px] rounded-full">
                        <div className="w-full bg-[#12FF89] rounded-2xl h-[30px]" style={{ width: `${Math.min(progress, 100)}%` }}></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[24px] w-[30%] max-lg:flex-row max-lg:w-full max-md:flex-col">
                <div className="flex flex-col rounded-2xl p-[30px] gap-[22px] bg-[#00617B]">
                    <div className="flex flex-row justify-between max-sm:flex-col max-sm:items-start">
                        <h3 className="text-[#12FF89] exo-2 font-extrabold text-[24px] leading-[28.8px]">LIVE NOW</h3>
                        <span className="exo-2 font-medium text-[24px] leading-[28.8px] text-right">{liveTime && formatTime(liveTime)}</span>
                    </div>
                    <div className="flex flex-col px-[17px] pt-[8px] pb-[22px] w-full rounded-2xl items-start bg-[#047DA9]">
                        <p className="exo-2 !font-normal text-[20px] leading-[24px]">
                            Min Purchase
                        </p>
                        <h2 className="exo-2 font-extrabold text-[20px] leading-[24px] mt-[10px]">
                            2,250 SUI
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
                        {
                            treasuryObject && treasuryObject?.data?.content?.fields.balanceOf?.fields ? 
                            treasuryObject?.data?.content?.fields.balanceOf?.fields?.contents.length : 0 
                        }
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