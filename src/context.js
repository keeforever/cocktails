import useFetch from "./useFetch";
import { useEffect, createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = createContext();

const defaultState = {
  cocktails: ["kali"],
  detail: {},
  searchValue: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { searchValue } = state;
  const dependencies = { searchURL: searchValue };

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;

  const { isError, isLoading, apiData } = useFetch(url, dependencies);

  const searchCocktail = (e) => {
    const value = e.target.value;
    dispatch({ type: "SEARCH_COCKTAIL", payload: value });
  };

  useEffect(() => {
    dispatch({ type: "SET_COCKTAILS", payload: apiData });
  }, [apiData]);

  return (
    <AppContext.Provider
      value={{
        isError,
        isLoading,
        apiData,
        searchCocktail,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
