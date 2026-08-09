function EmailInput() {
  function handleFocus() {
    console.log("Email filed selected");
  }
  function handleBlur() {
    console.log("Email fiels left");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your Email"
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </div>
  );
}
export default EmailInput;
