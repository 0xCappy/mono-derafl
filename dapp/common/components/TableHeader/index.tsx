import { TableSort } from "@/types"
import { Text } from "@mantine/core"

interface CommonProps {
    title: string
}

type ConditionalProps =
    | {
        canSort?: true,
        sort: TableSort,
        onSort: (sort: TableSort) => void
    }
    | {
        canSort?: false
        sort?: TableSort,
        onSort?: (sort: TableSort) => void
    }

type TableHeaderProps = CommonProps & ConditionalProps

export const TableHeader = ({ title, canSort, sort, onSort }: TableHeaderProps) => {
    return (
        <th>
            <Text><strong>{title}</strong></Text>
        </th>
    )
}

export default TableHeader