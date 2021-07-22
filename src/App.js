// import './App.css';
import './assets/styles/container.css'
import MemberDetail from './components/MemberDetail';
import TaskControl from './components/TaskControl';
import NavBar from './layouts/navigation_bar/NavBar'
import Test from './components/Test';
function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
   
      <div className="container">
        <TaskControl></TaskControl>
        <MemberDetail></MemberDetail>
        <Test></Test>
      </div>
      </div>
  );
}

export default App;
