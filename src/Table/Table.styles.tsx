import styled from 'styled-components';

const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th<{ sortable?: boolean }>`
  padding: 8px;
  cursor: ${(props: { sortable?: boolean }) => (props.sortable ? 'pointer' : 'default')};
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;


export { StyledTableWrapper, StyledTableStyled, StyledTh, StyledTd };