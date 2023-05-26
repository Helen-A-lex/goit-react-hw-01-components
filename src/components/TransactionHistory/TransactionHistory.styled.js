import styled from 'styled-components';
export const TransactionTable = styled.table`
  table-layout: fixed;
  width: 600px;
  margin-right: auto;
  margin-left: auto;
  border-collapse: collapse;
  border: 2px solid #cec6c6;

  box-shadow: -3px 2px 24px 0px rgba(66, 68, 90, 0.34);
`;
export const HeaderTable = styled.thead`
  width: 100%;
  background-color: #2fc9c9;
`;
export const TitleTable = styled.th`
  width: 100%;
  background-color: rgb(47, 201, 201);
  padding: 20px;
  border: 1px solid rgb(246 243 243);
  color: white;
  font-family: sans-serif;
  letter-spacing: 0.2em;
  font-size: 15px;
  text-transform: uppercase;
`;
export const TableLine = styled.tr`
  background-color: white;
  color: rgb(171 161 161);
  font-size: 15px;
  font-weight: 600;

  &:nth-child(even) {
    background-color: rgb(238 238 238);
  }
`;

export const TableCell = styled.td`
  border: 1px solid #e9e9e9;
  padding: 8px;
`;
