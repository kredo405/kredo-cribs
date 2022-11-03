import { Routes, Route } from "react-router-dom";
import {useDispatch } from "react-redux";
import React from 'react'
import Velcome from "./pages/Velcome";
import Main from "./pages/main";
import PageSubject from "./pages/PageSubject";
import ShortCource from "./pages/shortCourse";
import Tests from "./pages/tests";
import Test from "./pages/test";
import FinishTest from "./pages/finishTest";


const App = (props) => {
  const dispatch = useDispatch();
  dispatch({
    type: 'DB',
    payload: props.db
  })

  return (
    <div>
      <Routes>
        <Route path="/" element={<Velcome />} />
        <Route path="/main" element={<Main />} />
        <Route path="/pagesubject" element={<PageSubject />} />
        <Route path="/shortCource" element={<ShortCource />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/finishTest" element={<FinishTest />} />
      </Routes>
    </div>
  );
}

export default App;
