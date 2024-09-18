import React from 'react';
import { StyledPageButton, StyledPaginationWrapper } from "./Pagination.styles";
import { IPaginationProps } from './Pagination.types';

const Pagination: React.FC<IPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
  
    return (
      <StyledPaginationWrapper>
        <StyledPageButton onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </StyledPageButton>
        <span>{`${currentPage} / ${totalPages}`}</span>
        <StyledPageButton onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </StyledPageButton>
      </StyledPaginationWrapper>
    );
  };
  
  export default Pagination;