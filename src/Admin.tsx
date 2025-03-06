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
import {   admin_withdraw, create_pool, admin_mint, add_liquidity, swap_sui_for_isg, swap_isg_for_sui } from "./lib/web3";
import { firstTargetSupply, launchpadCoinType, launchpadPackageId, totalSaleSupply, treasuryObjectId } from "./config";
import axios from "axios";

function App() {
  const wallet = useWallet();
  const client = useSuiClient();
  const [mintAmount, setMintAmount] = useState(1_000_000_00);
  const [suiAmount, setSuiAmount] = useState(500_000_000);
  const [isgAmount, setIsgAmount] = useState(1_000_000);
  const [swapIsgAmount, setSwapIsgAmount] = useState(1_000_00);
  const [swapSuiAmount, setSwapSuiAmount] = useState(1_000_000);
  const [balance, setBalance] = useState<any>(0);
  const [liveTime, setLiveTime] = useState<any>();
  const [coinType, setCoinType] = useState<any>(launchpadCoinType);
  const [progress, setProgress] = useState<any>(130);
  

  const [treasuryObject, setTreasuryObject] = useState<any>();
  const totalSupply = 500_000_000; // 500M VTMT
  const price = 0.0025; // Current price
  const futurePrice = 0.003; // Future price
  const fdv = totalSupply * futurePrice;

  useEffect(() => {
    axios.get("https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam")
    .then(data=>{
      const dateA: any = new Date('2025-02-20T12:00:00'); // Example future date
      const dateB: any = new Date(data.data?.dateTime); // Example past date

      // Calculate the initial difference in seconds
      const initialDifference = Math.floor((dateA - dateB) / 1000); // Difference in seconds
  
      setLiveTime(initialDifference)
    })
  }, [])

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
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  const createPoolHandle = async () => {
    try{
      if(!wallet?.account?.address){
        return toast.error("Wallet Connect");
      }

      const tt = toast.loading("create pool ...");

      if(await create_pool(wallet, client)){
        toast.success("created pool successfully", { id: tt });
      }else{
        toast.error("create pool Error", { id: tt });
      }
    }catch(err){
      console.log(err)
    }
  }

  const withdrawPoolHandle = async () => {
    try{
      if(!wallet?.account?.address){
        return toast.error("Wallet Connect");
      }

      const tt = toast.loading("Withdrawing ...");

      if(await admin_withdraw(wallet, client)){
        toast.success("withdraw successfully", { id: tt });
      }else{
        toast.error("withdraw Error", { id: tt });
      }
    }catch(err){
      console.log(err)
    }
  }

  const adminMintHandle = async () => {
    try{
      if(!wallet?.account?.address){
        return toast.error("Wallet Connect");
      }

      const tt = toast.loading("Minting...");
      
      if(await admin_mint(wallet, client, 2000_000_000_000, wallet?.account?.address)){
        toast.success("Minted successfully", { id: tt });
      }else{
        toast.error("Mint Error", { id: tt });
      }
    }catch(err){
      console.log(err) 
    }
  }

  const addLiquidityHandle = async () => {
    try{
      if(!wallet?.account?.address){
        return toast.error("Wallet Connect");
      }

      const tt = toast.loading("Add liquiditing...");
      
      if(await add_liquidity(wallet, client)){
        toast.success("Add Liquidity successfully", { id: tt });
      }else{
        toast.error("Add Liqudity Error", { id: tt });
      }
    }catch(err){
      console.log(err)
    }
  }

  const suiForIsgHandle = async () => {
    try{
      if(!wallet?.account?.address){
        return toast.error("Wallet Connect");
      }

      const tt = toast.loading("Swapping...");
      
      if(await swap_sui_for_isg(wallet, client)){
        toast.success("Swapped successfully", { id: tt });
      }else{
        toast.error("Swap Error", { id: tt });
      }
    }catch(err){
      console.log(err)
    }
  }

  const isgForSuiHandle = async () => {
    try{
      if(!wallet?.account?.address){
        return toast.error("Wallet Connect");
      }

      const tt = toast.loading("Swapping...");
      
      if(await swap_isg_for_sui(wallet, client)){
        toast.success("Swapped successfully", { id: tt });
      }else{
        toast.error("Swap Error", { id: tt });
      }
    }catch(err){
      console.log(err)
    }
  }

 


  useEffect(() => {
    if(wallet){
      client.getObject({
        id: treasuryObjectId,
        options: {
          showContent: true
        }
      }).then((data: any) => {
        console.log("treauryObject ", data);
        const vitalTreasury = Number(data?.data?.content?.fields?.vitalTreasury)
        console.log("participants len ", data?.data?.content?.fields.balanceOf?.fields?.contents.length)
        console.log("progress ", Number(data?.data?.content?.fields?.totalSoldVital) / totalSaleSupply)
        const decimal = 1_000_000;
        setProgress(((Number(data?.data?.content?.fields?.totalSoldVital) / totalSaleSupply) / decimal * 100).toFixed(6))
        setTreasuryObject(data) 
      })     
    }
  }, [client, wallet])

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
                coins.push(item.data);
        })
        cursor = objects.nextCursor;
        if(!objects.hasNextPage){
            break;
        }
    }
    console.log(coins)
    const filtered = coins.filter((item : any)=>item.type.includes(launchpadPackageId))
    console.log("coins ", filtered)
  }

  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      {/* Admin Form */}
      <div className="bg-green-900/30 md:p-6 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="space-y-1">
                <div className="text-lg font-semibold text-white">
                  Fair launch
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white">Balance</div>
                <div className="font-semibold text-white">{balance} SUI</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button onClick={createPoolHandle} className="w-full sm:w-auto bg-accent-green hover:bg-accent-green-light text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Create pool
              </button>
              <button onClick={withdrawPoolHandle} className="w-full sm:w-auto bg-accent-green hover:bg-accent-green-light text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Withdraw pool(admin)
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="text-white"> mint amount</label>
                <input
                  type="number"
                  placeholder="Enter mint amount"
                  value={mintAmount}
                  onChange={(e: any)=>setMintAmount(e.target.value)}
                  className="w-full bg-green-900/20 border border-green-800/20 rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-green-500/30"
                />
              </div>
              <button onClick={adminMintHandle} className="w-full sm:w-auto bg-accent-green hover:bg-accent-green-light text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Mint
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="text-white"> SUI amount</label>
                <input
                  type="number"
                  placeholder="Enter SUI amount"
                  value={suiAmount}
                  onChange={(e: any)=>setSuiAmount(e.target.value)}
                  className="w-full bg-green-900/20 border border-green-800/20 rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-green-500/30"
                />
                <label className="text-white"> ISG amount</label>
                <input
                  type="number"
                  placeholder="Enter ISG amount"
                  value={isgAmount}
                  onChange={(e: any)=>setIsgAmount(e.target.value)}
                  className="w-full bg-green-900/20 border border-green-800/20 rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-green-500/30"
                />
              </div>
              <button onClick={addLiquidityHandle} className="w-full sm:w-auto bg-accent-green hover:bg-accent-green-light text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Add liquidity
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="text-white"> sui {"->"} isg </label>
                <input
                  type="number"
                  placeholder="Enter SUI Amount"
                  value={swapSuiAmount}
                  onChange={(e: any)=>setSwapSuiAmount(e.target.value)}
                  className="w-full bg-green-900/20 border border-green-800/20 rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-green-500/30"
                />
              </div>
              <button onClick={suiForIsgHandle} className="w-full sm:w-auto bg-accent-green hover:bg-accent-green-light text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Swap(swap_sui_for_isg)
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="text-white"> isg {"->"} sui</label>
                <input
                  type="number"
                  placeholder="Enter Isg Amount"
                  value={swapIsgAmount}
                  onChange={(e: any)=>setSwapIsgAmount(e.target.value)}
                  className="w-full bg-green-900/20 border border-green-800/20 rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-green-500/30"
                />
              </div>
              <button onClick={isgForSuiHandle} className="w-full sm:w-auto bg-accent-green hover:bg-accent-green-light text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Swap(swap_isg_for_sui)
              </button>
            </div>
      </div>
    </div>
  );
}

export default App;
