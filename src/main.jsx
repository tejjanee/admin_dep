import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({
  isAuthenticated: false,
  admin: {},
  noDoctors: 0,
  noAppointments: 0,
});

const AppWrapper = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({});
  const [noDoctors, setNoDoctors] = useState(0);
  const [noAppointments, setNoAppointments] = useState(0);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        admin,
        setAdmin,
        noDoctors,
        setNoDoctors,
        noAppointments,
        setNoAppointments,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
