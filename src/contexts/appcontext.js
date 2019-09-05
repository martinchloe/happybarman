import { createContext } from "react";
const AppContext = createContext();
export default AppContext;
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
