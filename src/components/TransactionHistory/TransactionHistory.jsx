import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TheadTitle,
  TableRow,
  TableData,
} from './transactionhistory.styled.js';

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <TheadTitle>Type</TheadTitle>
          <TheadTitle>Amount</TheadTitle>
          <TheadTitle>Currency</TheadTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
