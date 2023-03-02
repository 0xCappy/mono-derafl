import React from 'react';
import { Stack, Skeleton } from '@mantine/core';

const TableLoader = () => {
    return (
        <Stack>
            <Skeleton width="100%" style={{ borderRadius: '16px', overflow: 'hidden', height: '100%', paddingTop: '100%' }} />
        </Stack>
    );
};

export default TableLoader;