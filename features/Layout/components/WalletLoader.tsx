import { Center, Skeleton, Stack } from "@mantine/core"

const WalletLoader = () => {
    return (
        <Stack>
            <Center>
                <Skeleton height="100px" circle={true} />
            </Center>
            <Skeleton height={30} mt={24} radius="xl" />
            <Skeleton height={30} mt={6} radius="xl" />
            <Skeleton height={30} mt={6} radius="xl" />
            <Skeleton height={30} mt={6} radius="xl" />
        </Stack>
    )
}

export default WalletLoader