import accounts from "@/pages/accounts";
import { Account } from "@/src/API";
import { Group, Avatar, Box, Title, Stack, Pagination, Text, MediaQuery } from "@mantine/core";
import { IconSquarePlus, IconTrophy, IconDice5, IconTicket, IconCalendar, IconCalendarTime } from "@tabler/icons";
import makeBlockie from "ethereum-blockies-base64";
import { MRT_ColumnDef, MantineReactTable } from "mantine-react-table";
import { useMemo } from "react";
import AccountAnchor from "../AccountAnchor";
import { DesktopLayout, MobileLayout } from "./components";

interface AccountsTableProps {
    accounts: Account[]
    loading: boolean
    pageLength: number
    count?: number
    showPagination?: boolean
    handlePageChange?: (page: number) => void
}

const AccountsTable = ({ accounts, loading, count, showPagination, handlePageChange, pageLength }: AccountsTableProps) => {
    return (
        <Stack justify="space-between">
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Box>
                    <DesktopLayout loading={loading} accounts={accounts} />
                </Box>
            </MediaQuery>

            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Box>
                    <MobileLayout pageSize={pageLength} loading={loading} accounts={accounts} />
                </Box>
            </MediaQuery>

            {showPagination && count &&
                <Pagination mt="2rem" total={Math.ceil(count / pageLength)} siblings={2} initialPage={1} onChange={handlePageChange} />
            }
        </Stack>
    )
}

export default AccountsTable