import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Customer from './components/Customer';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import ProfileDeatils from './components/pages/ProfileDeatils';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/'element={<Home />}/> 
        <Route path='/users' element={<Customer />}/> 
        <Route path='/*' element={<ErrorPage />}/> 
        <Route path='/details/:id' element={<ProfileDeatils />}/> 

       
      </Routes>
    </div>
  );
}

export default App;
