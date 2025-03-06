import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "@suiet/wallet-kit/style.css";
import { Toaster } from "react-hot-toast";
import {
  AllDefaultWallets,
  defineStashedWallet,
  WalletProvider,
} from "@suiet/wallet-kit";
import {
  Chain,
  SuiDevnetChain,
  SuiTestnetChain,
  SuiMainnetChain,
  DefaultChains,
} from "@suiet/wallet-kit";

const SupportedChains = [
  // ...DefaultChains,
  // SuiDevnetChain,
  SuiTestnetChain,
  // SuiMainnetChain,
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <WalletProvider 
        chains={SupportedChains}
        defaultWallets={[
          ...AllDefaultWallets,
          defineStashedWallet({
            appName: "Suiet Kit Playground",
          }),
        ]}
      >
        <App /> 
        <Toaster position="top-right" reverseOrder={false} />
      </WalletProvider>
  </StrictMode>,
)
