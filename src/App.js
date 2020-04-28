import React from 'react';
import './App.css';
import StudentDetails from './components/StudentDetails'
import StudentCards from './components/StudentCards'

function App() {
  return (
    <div className="App">
      <h1>Success Stories</h1>
      <StudentDetails />
      <StudentCards />
    </div>
  );
}

export default App;
