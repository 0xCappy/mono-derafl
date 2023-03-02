import { SimpleGrid, Skeleton, Stack } from '@mantine/core';
import React from 'react';

const LoadingSkeleton = () => {
    return (
        <Stack>
            {/* <Skeleton
                height="50px"
                width="100px"
                style={{ borderRadius: '100px', marginBottom: '32px' }}
            /> */}
            <Skeleton
                height="40px"
                width="100%"
            />

            <Skeleton
                height="40px"
                width="100%"
            />

            <Skeleton
                height="40px"
                width="100%"
            />

            <Skeleton
                height="40px"
                width="100%"
            />

            <Skeleton
                height="40px"
                width="100%"
            />

            <Skeleton
                height="40px"
                width="100%"
            />

            <Skeleton
                height="40px"
                width="100%"
            />

            {/* <SimpleGrid cols={2}>
                <Skeleton
                    height="120px"
                    width="150px"
                />
                <Skeleton
                    height="120px"
                    width="150px"
                />
            </SimpleGrid>

            <Skeleton
                height="2px"
                width="100%"
            />

            <Skeleton
                height="150px"
                width="100%"
            /> */}

        </Stack>
    );
};

export default LoadingSkeleton;