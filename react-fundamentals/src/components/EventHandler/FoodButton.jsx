function FoodButton() {
  function chooseFood(food) {
    console.log(food);
  }
  return (
    <>
      <button onClick={()=>{(chooseFood("Pizza"))}}>Pizza</button>
      <button onClick={()=>{(chooseFood("Burger"))}}>Burger</button>
      <button onClick={()=>{(chooseFood("Chips"))}}>Chips</button>
    </>
  );
}
export default FoodButton;
