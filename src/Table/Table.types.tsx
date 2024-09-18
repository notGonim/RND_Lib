interface IColumn<T> {
    title: string;
    key: keyof T;
    sortable?: boolean;
    hidden?: boolean;
    customRenderer?: (data: T) => React.ReactNode;
  }
  
  interface ITableProps<T> {
    data: T[];
    columns: IColumn<T>[];
    onSort?: (key: keyof T, direction: 'asc' | 'desc') => void;
    onRowSelect?: (row: T) => void;
    pagination?: {
      currentPage: number;
      totalPages: number;
      onPageChange: (page: number) => void;
    };
    loading?: boolean;
    exportable?: boolean;
  }

  export type { IColumn, ITableProps };

