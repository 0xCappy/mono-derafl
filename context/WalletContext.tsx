import { useModal } from 'connectkit';
import React, { useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

type WalletContextState = {
    walletOpen: boolean
    toggleWalletOpen: () => void
    address: `0x${string}` | undefined
    setWalletOpen: (open: boolean) => void
};

const initialValue: WalletContextState = {
    walletOpen: false,
    toggleWalletOpen: () => { },
    address: undefined,
    setWalletOpen: (open: boolean) => {}
};

export const WalletContext = React.createContext<WalletContextState>(initialValue);

interface AuthProviderProps {
    children: any;
}

const WalletContextProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
    const [walletOpen, setWalletOpen] = useState(false)
    const [address, setAddress] = useState<`0x${string}` | undefined>()
    const account = useAccount()
    const { setOpen: openConnectKit, open: connectKitOpen } = useModal()

    useEffect(() => {
        console.log("ACCOUNT: ", account)
        if (account.address) {
            setAddress(account.address)
            openConnectKit(false)
        } else {
            setAddress(undefined)
        }
    }, [account.address]);

    const toggleWalletOpen = () => {
        if (address) {
            setWalletOpen(!walletOpen)
        } else {
            openConnectKit(!connectKitOpen)
        }
    }

    const onOpenWalletClick = (open: boolean) => {
        if (walletOpen) {
            setWalletOpen(false)
            return
        }
        if (!address) {
            openConnectKit(true)
            return
        }
        setWalletOpen(true)
    }

    return (
        <WalletContext.Provider value={{ walletOpen, toggleWalletOpen, address, setWalletOpen: onOpenWalletClick }}>
            {children}
        </WalletContext.Provider>
    );
};

export default WalletContextProvider;

export const useWallet = () => useContext(WalletContext);
