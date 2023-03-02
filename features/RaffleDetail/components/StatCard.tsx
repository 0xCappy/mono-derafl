import { Card, Group, Stack, Title, Text } from '@mantine/core';

interface StatCardProps {
    title: string
    content: React.ReactNode
}

const StatCard = ({ title, content }: StatCardProps) => {
    return (
        <Card withBorder shadow="sm" radius="md" style={{overflow: 'initial'}}>
                <Stack justify="space-between" h="100%" spacing={10}>
                    <Title align="center" order={4}>{title}</Title>
                    <Stack justify="end" align="center">
                        {content}
                    </Stack>
                </Stack>
        </Card>
    )
}

export default StatCard