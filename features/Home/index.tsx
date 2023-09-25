import { Account, Raffle, TicketBatch } from "@/src/API"
import { Box } from "@mantine/core"
import { RaffleCarousel } from ".."
import { ActiveAccounts, Create, Hero, Intro, Open, Purchases, SupportingCreators, Transparent } from "./components"

const Home = () => {
    return (
        <>
            {/* < HeroSection /> */}
            <Hero />
            <Intro />
            <RaffleCarousel />
            <Transparent />
            <Purchases/>
            <Open />
            <ActiveAccounts />
            <SupportingCreators />
            <Box mb="30vh">
                <Create />
            </Box>
        </>
    )
}

export default Home