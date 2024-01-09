import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import LayoutNavbar from './components/LayoutNavbar';
import Information from './pages/Information';
import Description from './pages/Description';
import EditInformation from './pages/EditInformation';
// import { persistor, store } from './storeSlice/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './storeSlice/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              {/* <Route path='/' element={<Information />}> */}
              <Route path='/' element={<Information />} />
              <Route path='description/:id/:name' element={<Description />} />
              <Route path='editInformation/:id/:name' element={<EditInformation />} />
              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
    </div>
  );
}

export default App;
