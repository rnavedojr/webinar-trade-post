import { createContext } from 'react';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const errorHandling = (classes, icon, message) => {
    return (
      <div className={classes}>
        <i className={icon}></i>
        <p>{message}</p>
      </div>
    );
  };

  return (
    <UIContext.Provider
      value={{
        errorHandling
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
