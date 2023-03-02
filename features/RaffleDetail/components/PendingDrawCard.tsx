import { Card, Text, Title, Stack, Progress } from "@mantine/core"

const PendingDraw = () => {
    return (
        <Card withBorder shadow="sm" radius="md" h="100%">
            <Stack justify="space-between" h="100%">
            <Title order={3}>Raffle Pending Draw</Title>
                <Text mt="1rem">
                    The raffle is now closed and a winner is being selected.<br />The Chainlink verifiable random number generator will take place in the next few blocks and a winner will be selected
                </Text>
                <Progress radius="xl" size="xl" value={100} animate />
            </Stack>
        </Card>
    )
}

export default PendingDraw