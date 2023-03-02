import { RaffleState } from "types";
import { useEffect, useState } from "react";
import { RaffleFilter, raffleFilterOptions, raffleSortOptions } from "../types";
import { Group, Select, Stack, Title, Text } from "@mantine/core";
import { IconFilter, IconSort09, IconSortAscending } from "@tabler/icons";

interface RafflesTopBarProps {
    filter: RaffleFilter
    onFilterChange: (filter: RaffleFilter) => void
}

const RafflesTopBar = ({ onFilterChange, filter }: RafflesTopBarProps) => {
    return (
        <Stack justify="space-between">
            <Title>Explore Raffles</Title>
            <Group>
                <Select
                    label="Filter"
                    placeholder="Filter"
                    value={filter.filter.value}
                    data={raffleFilterOptions}
                    icon={<IconFilter size={14} />}
                    onChange={(value) => onFilterChange({...filter, filter: raffleFilterOptions.find(f => f.value === value) || raffleFilterOptions[0]})}
                />

                <Select
                    label="Sort"
                    placeholder="Sort"
                    value={filter.sort.value}
                    data={raffleSortOptions}
                    icon={<IconSortAscending size={14} />}
                    onChange={(value) => onFilterChange({...filter, sort: raffleSortOptions.find(f => f.value === value) || raffleSortOptions[0]})}
                />
            </Group>
        </Stack>
    );
};

export default RafflesTopBar;