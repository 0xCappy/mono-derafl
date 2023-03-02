import { IconSortAscending, IconSortDescending, IconArrowsSort } from "@tabler/icons"
import { SortType } from "rsuite-table"

const renderSortIcon = (type?: SortType) => {
    if (type === 'asc') {
        return <IconSortAscending size={18} style={{ marginBottom: '3px', marginLeft: '8px' }} />
    } else if (type === 'desc') {
        return <IconSortDescending size={18} style={{ marginBottom: '3px', marginLeft: '8px' }} />
    }
    return <IconArrowsSort size={18} style={{ marginBottom: '3px', marginLeft: '8px' }} />
}

export default renderSortIcon