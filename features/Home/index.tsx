import { Account, Raffle, TicketBatch } from "@/src/API"
import { Box } from "@mantine/core"
import { RaffleCarousel } from ".."
import { ActiveAccounts, Create, Hero, Intro, Open, Purchases, SupportingCreators, Transparent } from "./components"

interface HomePageProps {
    raffles: Raffle[]
    purchases: TicketBatch[]
    accounts: Account[]
}

const Home = ({ raffles, purchases, accounts}: HomePageProps) => {
    return (
        <>
            {/* < HeroSection /> */}
            <Hero />
            <Intro />
            <RaffleCarousel raffles={raffles} />
            <Transparent />
            <Purchases ticketBatches={purchases}/>
            <Open />
            <ActiveAccounts accounts={accounts} />
            <SupportingCreators />
            <Box mb="30vh">
                <Create />
            </Box>
        </>
    )
}

export default Home