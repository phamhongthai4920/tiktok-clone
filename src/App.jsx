import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout children={<Page />} />} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
