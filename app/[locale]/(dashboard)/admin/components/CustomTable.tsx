"use client";

import {
  Checkbox,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  CreateComponent?: React.ComponentType;
  filterby?: string;
  filterValue?: string;
}

export function CustomTable<TData, TValue>({
  columns,
  data,
  CreateComponent,
  filterby,
  filterValue,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const pageSize = 15;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      pagination: {
        pageIndex: currentPage - 1, // Adjusted pagination state
        pageSize,
      },
    },
  });

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <TextInput
          placeholder={`Search by ${filterValue}`}
          value={
            (table.getColumn(filterby as string)?.getFilterValue() as string) ??
            ""
          }
          onChange={(event) =>
            table
              .getColumn(filterby as string)
              ?.setFilterValue(event.target.value)
          }
          className="w-1/3"
        />
        {CreateComponent && <CreateComponent />}
      </div>

      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <React.Fragment key={headerGroup.id}>
                <TableHeadCell className="w-1 p-4">
                  <Checkbox />
                </TableHeadCell>
                {headerGroup.headers.map((header) => (
                  <TableHeadCell
                    key={header.id}
                    className={`${
                      header.getSize() ? `w-${header.getSize()}` : ""
                    }`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHeadCell>
                ))}
              </React.Fragment>
            ))}
          </TableHead>
          <TableBody className="divide-y text-gray-900">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="p-4">
                    <Checkbox />
                  </TableCell>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell
                  colSpan={columns.length + 1}
                  className="dark:text-white"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <nav className="flex flex-col items-start justify-between space-y-3 border-t p-4 dark:border-gray-700 md:flex-row md:items-center md:space-y-0">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {table.getRowModel().rows?.length ?? 0}{" "}
            {data.length > 1 ? "rows" : "row"}{" "}
          </span>
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {data.length}
          </span>
        </span>
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.length / pageSize)} // Corrected total pages calculation
            onPageChange={onPageChange}
          />
        </div>
      </nav>
    </div>
  );
}

export default CustomTable;
