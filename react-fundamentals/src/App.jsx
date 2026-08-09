/*
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Student from "./components/Student";
import Card from "./components/card"
import EmployeeList from "./components/EmployeeList";
import Student2 from "./components/Student2";
import StudentList from "./components/StudentList";




function App() {
  const age = 23;
  const student={
    name1:"Tracy Kiprop",
    course:"software engineering",
    level:"react"
  }
  const students = [
  {
    id:1,
    name:"Tracy",
    course:"Software Engineering",
    level:"React"
  },
  {
    id:2,
    name:"Moses",
    course:"Computer Science",
    level:"JavaScript"
  }
]

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
      <Student
        name="Tracy"
        age={age}
        skills={["HTML", "CSS", "React"]}
        country="kenya"
        graduated={true}
      />
      <Student
        name="moses"
        age={age}
        skills={["HTML", "CSS", "React"]}
        country="kenya"
        graduated={true}
      />{" "}
      <Student
        name="john"
        age={age}
        skills={["HTML", "CSS", "React"]}
        country="kenya"
        graduated={true}
      />
      <Card>
        <h2>React Bootcamp</h2>
        <p>Learning React step by step.</p>
      </Card>

      <Card>
        <button>Login</button>
      </Card>
      <EmployeeList/>
      <div>
        <h1>react fundamentals</h1>
        <Student2 student={student}/>
      </div>
      <div>
        <StudentList students={students}/>
      </div>
    </>
  );
}

import Button from "./components/EventHandler/Button.jsx"
import EmailInput from "./components/EventHandler/EmailInput.jsx";
import FoodButton from "./components/EventHandler/FoodButton.jsx";
import HoverButton from "./components/EventHandler/HoverButton.jsx";
import LoginForm from "./components/EventHandler/LoginForm.jsx";
import SearchInput from "./components/EventHandler/SearchInput.jsx";
function App(){
  function handleClick(){
    console.log("button click")
  }
  return(
    <>
    <Button onClick={handleClick}/>
    <FoodButton/>
    <LoginForm/>
    <HoverButton/>
    <EmailInput/>
    <SearchInput/>
    </>
  )
}
  */


/*
import EmployeeForm from "./components/reactForms/EmployeeForm";
import NameForm from "./components/reactForms/NameForm";
import Counter from "./components/state/Counter"
import DarkModeButton from"./components/state/toggleDarkMode /DarkModeButton"
function App(){
  return(
    <div>
      <Counter/>
      <DarkModeButton/>
      <NameForm/>
      <EmployeeForm/>
    </div>
  )
}
*/
//import Dictionary from "../Dictionary/index.js/Dictionary";
import Users from "./dataFetching/Users";
//import StudentManager from "./components/state/studentManager/StudentManager";
function App() {
  return (
    <>
      <Users/>
    </>
  );
}
export default App;
