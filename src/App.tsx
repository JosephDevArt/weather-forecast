import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./index.scss";

import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import MainInfo from "./components/MainInfo/MainInfo";
import UnitsSwitcher from "./components/UnitsSwitcher/UnitsSwitcher";
import SideBar from "./components/SideBar/SideBar";
import Form from "./components/MainInfo/Form/Form";

import { initializeApp } from "./store/app/actions";

import { RootState } from "./store/rootTypes";

const App: FC<any> = () => {
  const { isInitialized, isFetching, isGeoProvided } = useSelector(
    (state: RootState) => ({
      isInitialized: state.app.isInitialized,
      isFetching: state.app.isFetching,
      isGeoProvided: state.app.isGeoProvided,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (isGeoProvided) {
    if (isInitialized) {
      return (
        <main className="App">
          <LoadingSpinner isFetching={isFetching} />
          <MainInfo />
          <UnitsSwitcher />
          <SideBar />
        </main>
      );
    } else {
      return <LoadingSpinner isFetching={isFetching} />;
    }
  } else {
    return <Form />;
  }
};

export default App;
