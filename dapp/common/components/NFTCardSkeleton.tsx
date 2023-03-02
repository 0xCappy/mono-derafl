import React from 'react';
import { Box, Card, Stack, Skeleton } from '@mantine/core';

const NFTCardSkeleton = () => {
    return (
        <Card w="100%" className='img-zoom' shadow="sm" h="100%">
            <Stack>
                <Skeleton style={{ borderRadius: '16px', overflow: 'hidden', width: '100%', paddingTop: '100%' }} />
                <Skeleton height={8} mt={6} radius="xl" />
                <Skeleton height={8} mt={6} radius="xl" />
            </Stack>
        </Card>
    );
};

export default NFTCardSkeleton;