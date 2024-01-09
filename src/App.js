import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Information from './pages/Information';
import Description from './pages/Description';
import EditInformation from './pages/EditInformation';
import { Provider } from 'react-redux';
import store from './storeSlice/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path='/' element={<Information />} />
              <Route path='description/:id/:name' element={<Description />} />
              <Route path='editInformation/:id/:name' element={<EditInformation />} />
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
