import {
    Flex,
    Table,
    Progress,
    Icon,
    Button,
    IconButton,
    Tbody,
    Td,
    Text,
    Th,
    Tooltip,
    Thead,
    Tr,
    useColorModeValue
} from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable
} from 'react-table'
import {
    ArrowRightIcon,
    ArrowLeftIcon,
    ChevronRightIcon,
    ChevronLeftIcon
} from "@chakra-ui/icons";

// Custom components
import Card from 'components/card/Card'
import Menu from 'components/menu/MainMenu'
import NextLink from 'next/link'

// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from 'react-icons/md'
import { TableProps } from '../variables/columnsData'

// interface TableProps {
//   pageSize: 3
// }
export default function ColumnsTable(props: TableProps) {
    const pageSize = 3
    const { columnsData, tableData, tableTitle } = props

    const columns = useMemo(() => columnsData, [columnsData])
    const data = useMemo(() => tableData, [tableData])

    const tableInstance = useTable(
        {
            columns,
            data
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        initialState
    } = tableInstance
    initialState.pageSize = 5

    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')

    const [currentPage, setCurrentPage] = useState(0)

    // Calculates the total number of pages
    const totalPages = Math.ceil(data.length / pageSize)

    // Get the current page of data
    const currentData = data.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
    )

    // Go to the next page
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    // Go to the previous page
    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <Card
            flexDirection='column'
            w='100%'
            px='0px'
            overflowX={{ sm: 'scroll', lg: 'hidden' }}
        >
            <Flex px='25px' justify='space-between' mb='10px' align='center'>
                <Text
                    color={textColor}
                    fontSize='22px'
                    fontWeight='700'
                    lineHeight='100%'
                >
                    {tableTitle}
                </Text>

                {/* <Menu /> */}
            </Flex>
            <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
                <Thead>
                    {headerGroups.map((headerGroup, index) => (
                        <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            {headerGroup.headers.map((column, index) => (
                                <Th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    pe='10px'
                                    key={index}
                                    borderColor={borderColor}
                                >
                                    <Flex
                                        justify='space-between'
                                        align='center'
                                        fontSize={{ sm: '10px', lg: '12px' }}
                                        color='gray.400'
                                    >
                                        {column.render('Header')}
                                    </Flex>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {page.map((row, index) => {
                        prepareRow(row)
                        return (
                            <Tr {...row.getRowProps()} key={index}>
                                {row.cells.map((cell, index) => {
                                    let data
                                    if (cell.column.Header === 'NAME') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        )
                                    } else if (cell.column.Header === 'PICKUP') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        )
                                    } else if (cell.column.Header === 'VEHICLE') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        )
                                    } else if (cell.column.Header === 'DESTINATION') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        )
                                    } else if (cell.column.Header === 'STARTED') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        )
                                    } else if (cell.column.Header === 'VEHICLE ID') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        )
                                    } else if (cell.column.Header === 'PAYMENT') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        )
                                    }
                                    return (
                                        <Td
                                            {...cell.getCellProps()}
                                            key={index}
                                            fontSize={{ sm: '14px' }}
                                            maxH='30px !important'
                                            py='8px'
                                            minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                                            borderColor='transparent'
                                        >
                                            {data}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>

        </Card>
    )
}
