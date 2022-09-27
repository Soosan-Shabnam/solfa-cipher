import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import FirstCodeCheck from './components/FirstCodeCheck';
import SecondCodeCheck from './components/SecondCodeCheck';
import Result from './components/Results';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/firstcodecheck" element={<FirstCodeCheck />} />
      <Route exact path="/secondcodecheck" element={<SecondCodeCheck />} />
      <Route exact path="/results" element={<Result />} />
    </Routes>
  );
}

export default App;
