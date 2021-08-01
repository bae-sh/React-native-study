import React, {createContext, useState} from 'react';

const UserContext = createContext({user: {name: 'Bae'}, dispatch: () => {}});

const UserProvier = ({children}) => {
  const [name, setName] = useState('bae');

  const value = {user: {name}, dispatch: setName};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserComsumer = UserContext.Consumer;

export {UserProvier, UserComsumer};
export default UserContext;
