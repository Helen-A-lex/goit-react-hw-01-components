import PropTypes from 'prop-types';
import { TransactionTable, HeaderTable, TitleTable, TableLine ,TableCell } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <HeaderTable>
                <tr>
                    <TitleTable>Type</TitleTable>
                    <TitleTable>Amount</TitleTable>
                    <TitleTable>Currency</TitleTable>
                </tr>
            </HeaderTable>

            <tbody>
                {items.map(item =>
                { return <TableLine key={item.id}>
                           <TableCell>{ item.type}</TableCell>
                           <TableCell>{item.amount}</TableCell>
                           <TableCell>{item.currency}</TableCell>
                         </TableLine >})}
            </tbody>
        </TransactionTable>
        
    )
};
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
   id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }
))
}