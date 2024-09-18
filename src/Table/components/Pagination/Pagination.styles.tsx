import styled from 'styled-components';


const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const StyledPageButton = styled.button<{ disabled?: boolean }>`
  margin: 0 5px;
  padding: 8px 16px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#007bff')};
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#0056b3')};
  }
`;



export { StyledPaginationWrapper, StyledPageButton };