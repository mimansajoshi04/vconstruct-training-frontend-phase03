import './App.css';
import Header from './components/Header.jsx';

const HEADER = "React Fundamentals Training";

function App() {
  return (
    <>
      <Header heading={HEADER}/>
      <p>Welcome to React</p>
    </>
  );
}

export default App;
