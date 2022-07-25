import {
  createContext, useContext, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

/**
 * default store
 */
const defaultStore = {
  closeHeaderHandler: null,
};

/**
 * First step：create context
 */
const AppContext = createContext();

/**
 * Second Step：cover componetnes
 */
export const CxtProvider = ({
  children,
}) => {
  const [store, setStore] = useState(defaultStore);

  const value = useMemo(() => ({
    store, setStore,
  }), [store]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

CxtProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Third step  call useContext to use data
 */
export const useAppContext = () => {
  const cxt = useContext(AppContext);
  return [cxt.store, cxt.setStore];
};
