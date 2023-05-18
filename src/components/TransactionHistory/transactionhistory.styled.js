import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin: 40px auto;
  padding: 5px;

  border-collapse: collapse;
  table-layout: auto;
  border: 2px solid silver;
  box-shadow: 10px 10px 16px -5px rgba(0, 0, 0, 0.75);
  width: 400px;
  background-color: #f5fffa;
`;

export const TheadTitle = styled.th`
  padding: 10px 80px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: #00ced1;
  color: #ffffff;
  :not(:last-child) {
    border-right: 2px solid #ffff;
  }
`;

export const TableRow = styled.tr`
  cursor: pointer;

  :nth-of-type(even) {
    background-color: #d3d3d3;
  }

  :hover,
  :focus {
    background-color: #87ceeb;
    transition: background-color 0.5s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;
export const TableData = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  :not(:last-child) {
    border-right: 2px solid #778899;
  }
`;
