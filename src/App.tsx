import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./index.scss";

import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import { initializeApp } from "./store/app/actions";
import MainInfo from "./components/MainInfo/MainInfo";
import UnitsSwitcher from "./components/UnitsSwitcher/UnitsSwitcher";
import SideBar from "./components/SideBar/SideBar";

const App: FC<any> = () => {
  const { isInitialized, isFetching } = useSelector((state: any) => ({
    isInitialized: state.app.isInitialized,
    isFetching: state.app.isFetching,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  return (
    <main className="App">
      <LoadingSpinner isFetching={isFetching} />
      <MainInfo />
      <UnitsSwitcher />
      <SideBar />
    </main>
  );
};

export default App;
