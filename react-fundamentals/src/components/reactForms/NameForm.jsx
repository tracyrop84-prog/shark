import { useState } from "react";
function NameForm() {
  const [name, setName] = useState("");
    const [email,setEmail]=useState("")

  function handleOnchange(e) {
    setName(e.target.value);

  }
    function handleOnchangeEmail(e) {
        setEmail(e.target.value);

  }
  return (
    <form>
      <input placeholder="Name"  type="text" value={name} onChange={handleOnchange} />
      <input placeholder="Email" type="text" value={email} onChange={handleOnchangeEmail}/>
      <p>hello {name}</p>
      <p>Your Email is:{email}</p>
    </form>
  );
}
export default NameForm;
