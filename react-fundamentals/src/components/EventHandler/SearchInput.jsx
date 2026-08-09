function SearchInput(){
    function handleKeyDown(e){
        console.log(e.key)
    }
return(
    <div>
        <input placeholder="Search..." onKeyDown={handleKeyDown}/>
    </div>
)

}
export default SearchInput