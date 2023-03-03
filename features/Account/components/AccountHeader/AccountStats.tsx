import { Account } from "@/src/API"
import { Box, Card, createStyles, SimpleGrid, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        // backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]
        //     } 100%)`,
        padding: theme.spacing.xl * 1.5,
        borderRadius: theme.radius.md,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    title: {
        // color: theme.white,
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: theme.fontSizes.sm,
    },

    count: {
        // color: theme.white,
        fontSize: 32,
        lineHeight: 1,
        fontWeight: 700,
        marginBottom: theme.spacing.md,
    },

    description: {
        // color: theme.colors[theme.primaryColor][0],
        fontSize: theme.fontSizes.sm,
        marginTop: 5,
    },

    stat: {
        flex: 1,

        // '& + &': {
        //     paddingLeft: theme.spacing.xl,
        //     marginLeft: theme.spacing.xl,
        //     // borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

        //     [theme.fn.smallerThan('sm')]: {
        //         paddingLeft: 0,
        //         marginLeft: 0,
        //         borderLeft: 0,
        //         paddingTop: theme.spacing.xl,
        //         marginTop: theme.spacing.xl,
        //         // borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
        //     },
        // },
    },
}));

interface Stat {
    title: string
    amount: string
    description: string
}

interface AccountStatsProps {
    account: Account
}

const mapStats = (account: Account): Stat[] => {
    return [
        {
            title: 'Raffles Entered',
            amount: account.rafflesEntered.toLocaleString(),
            description: 'The amount of raffles this account has entered'
        },
        {
            title: 'Tickets Bought',
            amount: account.ticketsBought.toLocaleString(),
            description: 'The amount of tickets this account has bought'
        },
        {
            title: 'Raffles Won',
            amount: account.rafflesWon.toLocaleString(),
            description: 'The amount of raffles this account has won'
        },
        {
            title: 'Raffles Created',
            amount: account.rafflesCreated.toLocaleString(),
            description: 'The amount of raffles this account has created'
        }
    ]
}
const AccountStats = ({ account }: AccountStatsProps) => {
    const { classes } = useStyles();
    const data: Stat[] = mapStats(account)

    const stats = data.map((stat, index) => (
        <Box
            // sx={(theme) => ({
            //     borderLeft:
            //         theme.fn.smallerThan('sm') ? index > 0 ? '1px solid blue' : 'inherit'
            //             : index === 1 || index === 3 ? '1px solid blue' : 'inherit'
            // })}
            key={stat.title} className={classes.stat}>
            <Text align="center" className={classes.count}>{stat.amount}</Text>
            <Text align="center" className={classes.title}>{stat.title}</Text>
            {/* <Text className={classes.description}>{stat.description}</Text> */}
        </Box>
    ));
    return (
        <Card withBorder shadow="sm" radius="md">
            <SimpleGrid cols={2} breakpoints={[
                { minWidth: 'sm', cols: 4 },
            ]}>
                {stats}
            </SimpleGrid>
            {/* <div className={classes.root}>{stats}</div> */}
        </Card>
    )
}

export default AccountStats
