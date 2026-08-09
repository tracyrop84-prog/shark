function StudentForm(props){
const [name,setName]=props
function handleChange(){

}
function handleSubmit(){}
    return(
        <main>
            <label>Student Name</label>
            <input type="text" onChange={handleChange}/>
            <buton type="submit" >Submit</buton>
        </main>

    )
}