import React, { useState, useEffect, createContext } from "react";
import { app } from "../FireBase/Base";

const db = app.firestore().collection("AuthUser");
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [current, setCurrent] = useState([]);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user);

      db.doc(user.uid)
        .get()
        .then((doc) => {
          setCurrentData(doc.data());
        });
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        current,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
