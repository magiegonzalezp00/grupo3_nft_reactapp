import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';
import ContentRowMovies from './ContentRowMovies';
import AboutPage from './AboutPage';
import UserList from './UserList';
import NotFound from './NotFound';


function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path='/' exact element={<ContentWrapper />} />
          <Route path='/categories' element={<CategoriesInDb />} />
          <Route path='/users' element={<UserList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
