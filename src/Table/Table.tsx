import React, { useState } from "react";
import { StyledTableStyled, StyledTableWrapper, StyledTd, StyledTh } from "./Table.styles";
import { ITableProps } from "./Table.types";
import Pagination from "./components/Pagination/Pagination";

 const Table =<T,>({ data, columns, onSort, pagination, loading, exportable }: ITableProps<T>) => {
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [sortKey, setSortKey] = useState<keyof T | null>(null);
  
    const handleSort = (key: keyof T) => {
      const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      setSortDirection(newDirection);
      setSortKey(key);
      if (onSort) onSort(key, newDirection);
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <StyledTableWrapper>
        <StyledTableStyled>
          <thead>
            <tr>
              {columns.map((column) => 
                !column.hidden && (
                  <StyledTh
                    key={String(column.key)}
                    sortable={column.sortable}
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    {column.title}
                    {sortKey === column.key && (sortDirection === 'asc' ? ' 🔼' : ' 🔽')}
                  </StyledTh>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) =>
                  !column.hidden && (
                    <StyledTd key={String(column.key)} >
                            {column.customRenderer ? column.customRenderer(row) : String(row[column.key])}
                    </StyledTd>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </StyledTableStyled>
        {pagination && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={pagination.onPageChange}
        />
      )}
      </StyledTableWrapper>
    );
  };
  


export default Table;
