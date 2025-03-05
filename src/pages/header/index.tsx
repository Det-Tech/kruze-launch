import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isShow, setIsShow] = useState(false);
    const setShowBtn = () => {
        setIsShow(!isShow);
    }

    useEffect(() => {
        console.log(location, 'location');
    }, [location])

    return (
        <nav className={`relative py-4 md:px-8 lg:px-16 flex items-center justify-between h-[120px] w-full max-md:px-[20px] transition-all ${location.pathname === '/pre-sale' ? 'bg-[#05122de3]' : ''}`}>
            <div className="flex items-center">
                <img src={logo} alt="logo" className='w-[286px] h-[57px] max-md:w-[200px] max-md:h-fit max-sm:w-[180px] transition-all' />
            </div>

            <div className="hidden xl:flex space-x-8">
                <a href="/" className="underline text-white font-semibold text-[20px] leading-[24.2px]">Home</a>
                <a href="#" className="underline text-white font-semibold text-[20px] leading-[24.2px]">Staking</a>
                <a href="#" className="underline text-white font-semibold text-[20px] leading-[24.2px]">NFT's</a>
                <a href="#" className="underline text-white font-semibold text-[20px] leading-[24.2px]">Marketplace</a>
            </div>

            <div className="flex space-x-3 items-center relative">
                <button
                    className="bg-yellow-400 cursor-pointer max-lg:w-[130px] max-lg:text-[18px] hover:bg-yellow-500 text-black underline rounded-2xl h-[64px] max-h-[64px] max-md:h-[50px] max-md:w-[120px] w-[200px] max-w-[200px] font-semibold text-[20px] max-sm:h-[45px] max-sm:w-[110px] max-md:text-[18px] leading-[24.2px] tracking-normal text-center transition-all"
                    onClick={() => navigate("/pre-sale")}
                >
                    Buy Now
                </button>
                <button className="bg-green-400 cursor-pointer max-lg:w-[130px] max-lg:text-[18px] hover:bg-green-500 text-black text-navy-900 rounded-2xl hidden xl:block h-[64px] max-h-[64px] w-[200px] max-w-[200px] font-semibold text-[20px] leading-[24.2px] tracking-normal text-center">
                    Connect Wallet
                </button>
                <button
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => { setShowBtn() }}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div className={`w-full absolute xl:!hidden left-0 top-[80px] justify-center ${isShow ? 'flex' : 'hidden'}`}>
                <div className={`block w-[90%]`}>
                    <ul className="font-medium flex flex-col justify-center w-full items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-800 dark:bg-gray-900 dark:border-gray-700">
                        <li className="w-full">
                            <a href="/" className={`block py-2 px-3 text-white rounded-sm dark:text-white ${location.pathname === '/' ? 'bg-blue-700' : ''}`}>Home</a>
                        </li>
                        <li className="w-full">
                            <a href="/staking" className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ${location.pathname === '/staking' ? 'bg-blue-700' : ''}`}>Staking</a>
                        </li>
                        <li className="w-full">
                            <a href="/nft" className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ${location.pathname === '/nft' ? 'bg-blue-700' : ''}`}>NFT's</a>
                        </li>
                        <li className="w-full">
                            <a href="/market-place" className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ${location.pathname === '/market-place' ? 'bg-blue-700' : ''}`}>Marketplace</a>
                        </li>
                        <button className="bg-green-400 mt-[10px] justify-center items-center cursor-pointer hover:bg-green-500 text-white rounded-[5px] block h-[30px] max-h-[30px] w-[200px] max-w-[200px] text-[16px]">
                            Connect Wallet
                        </button>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Header;