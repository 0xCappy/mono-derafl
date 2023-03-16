import { Card, Divider, Flex, Group, Input, Stack, Title, Text, createStyles, ThemeIcon, Box, Switch, Checkbox, Anchor, Center } from '@mantine/core';
import { IconArrowsHorizontal, IconArrowsVertical, IconCurrencyEthereum, IconTicket } from '@tabler/icons';
import { Raffle } from '@/src/API';
import { parseEther } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';
import ContractActionButton from '@/features/ContractActionButton';
import Abi from '@/types/Abi';

interface BuyTicketsCardProps {
    raffle: Raffle
    ticketsRemaining: number
}

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        cursor: 'default',
        overflow: 'hidden',
        transition: 'transform 150ms ease, box-shadow 100ms ease',
        padding: theme.spacing.xl,
        paddingLeft: theme.spacing.xl * 2,

        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.02)',
        },

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[3], theme.colors.blue[9]),
        },
    },
}));

const BuyTicketsCard = ({ raffle, ticketsRemaining }: BuyTicketsCardProps) => {
    const { classes } = useStyles();
    const [ticketAmount, setTicketAmount] = useState('')
    const [ethAmount, setEthAmount] = useState('')
    const [useMax, setUseMax] = useState(false)
    const [hasAgreed, setHasAgreed] = useState(false)

    useEffect(() => {
        if (useMax) {
            onTicketInputChange(ticketsRemaining.toString())
        }
    }, [ticketsRemaining])

    useEffect(() => {
        if (useMax) {
            setTicketAmount(ticketsRemaining.toString())
            setEthAmount((ticketsRemaining * 0.001).toFixed(3))
        }
    }, [useMax])

    const onEthInputChange = (amount: string) => {
        if (amount.includes('.')) {
            const decimals = amount.split('.')
            if (decimals[1].length > 3) {
                return
            }
        }
        if (!amount) {
            setEthAmount('')
            setTicketAmount('')
        } else {
            setEthAmount(amount)
            setTicketAmount(parseEther(amount).div(parseEther('0.001')).toString())
            if (useMax) {
                setUseMax(false)
            }
        }
    }

    const onTicketInputChange = (amount: string) => {
        amount = amount.replace(/\D/g, '');
        if (!amount || amount === '0') {
            setEthAmount('')
            setTicketAmount('')
        } else {
            setTicketAmount(amount)
            setEthAmount(parseFloat((parseInt(amount) * 0.001).toString()).toFixed(3))
            if (useMax) {
                setUseMax(false)
            }
        }
    }

    return (
        <Card withBorder shadow="sm" radius="md" className={classes.card}>
            <Group w="100%" position="apart">
                <Group>
                    <ThemeIcon
                        size="xl"
                        radius="md"
                        variant="gradient"
                        gradient={{ deg: 0, from: '#74C0FC', to: '#1971C2' }}
                    >
                        <IconTicket size={28} />
                    </ThemeIcon>
                    <Title order={3}>Buy tickets</Title>
                </Group>
                {/* <Stack> */}
                    <Switch checked={useMax} onChange={() => setUseMax(!useMax)} label="Max"/>
                {/* </Stack> */}
            </Group>
            <Stack my="1rem">

                <Flex w="100%" direction={{ base: 'column', sm: 'row' }}>
                    <Input.Wrapper label={`Ticket amount (0.001 Eth)`} style={{ flex: 2 }}>
                        <Input
                            style={{ flex: 2 }}
                            value={ticketAmount}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTicketInputChange(e.target.value)}
                            placeholder="Ticket Amount"
                            icon={<IconTicket />}
                        />
                        <Text size="xs" weight="bold">*{ticketsRemaining.toLocaleString()} tickets remaining</Text>
                    </Input.Wrapper>

                    <Group mx="1rem" mt="24px" display={{ base: 'none', sm: 'inherit' }}>
                        <IconArrowsHorizontal />
                    </Group>

                    <Group display={{ base: 'inherit', sm: 'none' }} mt="0.5rem" position="center">
                        <IconArrowsVertical />
                    </Group>

                    <Input.Wrapper label="Ether amount" style={{ flex: 2 }}>
                        <Input
                            style={{ flex: 2 }}
                            type="number"
                            value={ethAmount}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onEthInputChange(e.target.value)}
                            placeholder="Eth Amount"
                            icon={<IconCurrencyEthereum />}
                        />
                    </Input.Wrapper>
                </Flex>
                {/* <Divider /> */}

                {/* <Text size="xs"><strong>*1 ticket = Ξ0.001 Eth</strong></Text> */}
                <Checkbox checked={hasAgreed} onChange={() => setHasAgreed(!hasAgreed)} label={<Box>I agree to the DeRafl <Anchor weight="bold" underline={true} color="primary" target="_blank" href="/terms">Terms of service</Anchor></Box>}/>
            </Stack>

            <ContractActionButton
                chainId={raffle.chainId}
                contractAddress={raffle.contract}
                buttonTitle="Buy Tickets"
                abi={Abi.DERAFL}
                functionName="buyTickets"
                args={[raffle.raffleNonce, ticketAmount, { value: parseEther('0' + ethAmount.toString()) }]}
                disabled={!parseInt(ticketAmount) || !hasAgreed}
            />
        </Card>
    )
}

export default BuyTicketsCard