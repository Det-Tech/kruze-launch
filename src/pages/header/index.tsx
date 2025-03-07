import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useLocation } from 'react-router-dom';
import {
    ConnectModal,
    ConnectButton,
    useAccountBalance,
    useWallet,
    SuiChainId,
    ErrorCode,
    formatSUI,
    useSuiClient,
    AccountAssetManager,
    AccountCoinManager
  } from "@suiet/wallet-kit";

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
        <nav className={`justify-center relative py-4 md:px-8 lg:px-16 flex items-center justify-between h-[120px] w-full max-md:px-[20px] transition-all`}>

                <ConnectButton
                            className='wkit-button bg-green-400 cursor-pointer  max-lg:text-[18px] hover:bg-green-500 text-black text-navy-900 rounded-2xl xl:block h-[64px] max-h-[64px] font-semibold text-[20px] leading-[24.2px] tracking-normal text-center'
                            onConnectError={(error) => {
                                if (error.code === ErrorCode.WALLET__CONNECT_ERROR__USER_REJECTED) {
                                    console.warn(
                                        "user rejected the connection to " + error.details?.wallet
                                    );
                                } else {
                                    console.warn("unknown connect error: ", error);
                                }
                            }}
                        >
                            Connect Wallet
            </ConnectButton>
               
        </nav >
    )
}

export default Header;