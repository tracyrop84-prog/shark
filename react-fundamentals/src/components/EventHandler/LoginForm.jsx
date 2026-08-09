function LoginForm(){
    function handleSubmit(e){
        e.preventDefault()
        console.log("User logged in!")

    }
return(
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text"/>
<button  type="submit">Login</button>
</form>
    </div>
)


}
export default LoginForm