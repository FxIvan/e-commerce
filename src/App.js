import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { FormLoad } from './component/loadproduct/formload';
import './component/css/style.css'

function App() {
  return (
   <HashRouter>
     <Routes>
       <Route path={'/gpdloadproduct'} element={<FormLoad/>}  />
     </Routes>
   </HashRouter>
  );
}

export default App;
