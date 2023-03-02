import React, { useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

type WalletContextState = {
    walletOpen: boolean
    toggleWalletOpen: () => void
    address: `0x${string}` | undefined
};

const initialValue: WalletContextState = {
    walletOpen: false,
    toggleWalletOpen: () => { },
    address: undefined
};

export const WalletContext = React.createContext<WalletContextState>(initialValue);

interface AuthProviderProps {
    children: any;
}

const WalletContextProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
    const [walletOpen, setWalletOpen] = useState(false)
    const [address, setAddress] = useState<`0x${string}` | undefined>()
    const account = useAccount()

    useEffect(() => {
        if (account.address) {
            setAddress(account.address)
        } else {
            setAddress(undefined)
        }
    }, [account.address]);

    const toggleWalletOpen = () => {
        setWalletOpen(!walletOpen)
    }

    return (
        <WalletContext.Provider value={{ walletOpen, toggleWalletOpen, address }}>
            {children}
        </WalletContext.Provider>
    );
};

export default WalletContextProvider;

export const useWallet = () => useContext(WalletContext);
