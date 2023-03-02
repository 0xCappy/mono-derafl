import { RaffleState } from "types";

export const raffleSortOptions: RaffleSortOption[] = [
    {value: '1', label: 'Progress (Hig - Low)', key: 'progress', asc: false},
    {value: '2', label: 'Progress (Low - High)', key: 'progress', asc: true},
    {value: '3', label: 'Recently Started', key: 'createdAt', asc: false},
    {value: '4', label: 'Closing Soon', key: 'expires', asc: true},
    {value: '5', label: 'Ticket Allocation (Low - High)', key: 'ticketsAvailable', asc: true},
    {value: '6', label: 'Ticket Allocation (High - Low)', key: 'ticketsAvailable', asc: false},
]

export const raffleFilterOptions: RaffleFilterOption[] = [
    {label: 'Active', value: 'active'},
    {label: 'Closed', value: 'closed'}
]

export interface RaffleSortOption {
    label: string
    key: string
    asc: boolean
    value: string
}

export interface RaffleFilterOption {
    label: string
    value: string
}

export interface RaffleFilter {
    sort: RaffleSortOption,
    filter: RaffleFilterOption,
    page: number
}