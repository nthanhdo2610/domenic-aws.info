import React, {createContext} from 'react';

const AccountContext = createContext(undefined);

const Account = props => {
    return (
        <AccountContext.Provider value={{}}>
            {props.children}
        </AccountContext.Provider>
    );
};

export {Account, AccountContext};