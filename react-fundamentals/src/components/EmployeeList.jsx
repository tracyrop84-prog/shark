import employees from "../data/employees";
function EmployeeList(){
    return (
        <div>
            <h1>Employee Directory</h1>
            {employees.map(employee=>{
                return(
                    <p>{employee.name}</p>
                )
            })}
        </div>
    )
}
export default EmployeeList