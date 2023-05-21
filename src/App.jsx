import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {Home, About, Contact, Navigation, MyRoutes} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
