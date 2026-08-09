import { useState } from "react"
import StudentForm from "./studentForm"
import StudentList from "./StudentList"
function StudentManager(){
    const [students,setStudents]=useState([])
    const [name,setName]=useState("")
    return(
        <>
        <StudentForm name={name} setName={setName}/>
        <StudentList students={students} setStudents={setStudents}/>
        </>
    )
}
export default StudentManager