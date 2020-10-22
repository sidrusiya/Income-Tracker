import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import Transac from './Transac';

const History = () => {

    const {transactions} = useContext(GlobalContext);

    return (
        <div>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction =>(
                <Transac key={transaction.id} transaction={transaction} />
            ))}
        </ul>
        </div>
    )
}

export default History
