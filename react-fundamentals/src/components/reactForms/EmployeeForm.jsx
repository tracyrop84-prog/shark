import { useState } from "react";
function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    password: "",
  });
  function handleChange(e) {
    const formDataClone={...formData}
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
   <div>
    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
    <input
  type="email"
  required
/>
    <ol>
      <li >{formData.firstName}</li>
    </ol>
   </div>

  );
}
export default EmployeeForm;
