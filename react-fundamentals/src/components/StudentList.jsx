function StudentList({students}){
    return(<div>
        {
        students.length > 6
        ?
        students.map((student)=>{
            return (<div key={students.id}>
            <p>{student.id}</p>
            <p>{student.name}</p>
            <p>{student.course}</p>
            <p>{student.level}</p>
          </div>  )
        })
        :
    <p>No Students Found</p>
    }
    </div>
        
    )
}
    
export default StudentList;