import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialstate={
        transactions:[]
}

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD TRANSACTION',
            payload:transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}