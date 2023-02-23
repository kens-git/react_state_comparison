import { useAtomValue } from 'jotai';
import accountBalanceAtom from '../../store/account';

const UserBalance = () => {
  const accountBalance = useAtomValue(accountBalanceAtom);

  return <span>Account balance: ${accountBalance.toFixed(2)}</span>;
};

export default UserBalance;
