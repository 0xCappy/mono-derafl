import { buildTransactionUrl, mapAbi } from '@/common/utils';
import { useWallet } from '@/context/WalletContext';
import Abi from '@/types/Abi';
import { Anchor, Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { showNotification, updateNotification } from '@mantine/notifications';
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core';
import { parseEther } from 'ethers/lib/utils.js';
import { useMemo, useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { useNetwork, useSwitchNetwork } from 'wagmi';

export enum ContractActionState {
    NONE,
    LOADING,
    ERROR,
    COMPLETE
}
interface ContractActionButtonProps {
    buttonTitle: string
    chainId: string
    contractAddress: string
    abi: Abi
    functionName: string
    args: unknown[]
    disabled: boolean
    onContractActionStateChange?: (contractActionState: ContractActionState) => void
}

const ContractActionButton = ({ buttonTitle, chainId, contractAddress, abi, functionName, args, disabled, onContractActionStateChange }: ContractActionButtonProps) => {
    const { address, toggleWalletOpen } = useWallet()
    const { chain } = useNetwork()
    const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
    const id = randomId()
    const [loading, setLoading] = useState(false)

    const isCorrectChain = useMemo<boolean>(() => {
        return chain?.id === parseInt(chainId)
    }, [chainId, chain])

    const performAction = async () => {
        onContractActionStateChange?.(ContractActionState.LOADING)
        setLoading(true)
        showNotification({
            id,
            message: 'Your transaction is pending',
            loading: true,
            disallowClose: true,
            autoClose: false
        });

        try {
            const config = await prepareWriteContract({
                address: contractAddress,
                abi: mapAbi(abi),
                functionName,
                args
            })
            const { hash } = await writeContract(config)

            try {
                const data = await waitForTransaction({
                    hash,
                })
                setLoading(false)
                onContractActionStateChange?.(ContractActionState.COMPLETE)
                updateNotification({
                    id,
                    message: 'Transaction complete',
                    title: 'Success',
                    color: 'green',
                });
            } catch (innerError) {
                onContractActionStateChange?.(ContractActionState.ERROR)
                setLoading(false)
                updateNotification({
                    id,
                    message: <>There was an error with your transaction. <Anchor target="_blank" href={buildTransactionUrl(chainId, hash)}><strong>view on explorer</strong></Anchor></>,
                    title: 'Error',
                    color: 'red',
                    autoClose: false
                });
            }
        } catch (err: any) {
            onContractActionStateChange?.(ContractActionState.ERROR)
            setLoading(false)
            updateNotification({
                id: id,
                message: err.error?.message || 'cancelled',
                title: 'Error',
                color: 'red',
                autoClose: false
            });
        }
    }
    return (
        <>
            {!address &&
                <Button fullWidth onClick={toggleWalletOpen}>Connect Wallet</Button>
            }
            {address && !isCorrectChain &&
                <Button fullWidth onClick={() => switchNetwork?.(parseInt(chainId))}>Switch Network</Button>
            }
            {address && isCorrectChain &&
                <Button fullWidth disabled={disabled} onClick={performAction}>
                    {loading ?
                        <ProgressBar
                            height="50"
                            width="50"
                            ariaLabel="progress-bar-loading"
                            wrapperClass="progress-bar-wrapper"
                            borderColor='white'
                            barColor='white'
                        /> : buttonTitle
                    }
                </Button>
            }
        </>
    )
}

export default ContractActionButton