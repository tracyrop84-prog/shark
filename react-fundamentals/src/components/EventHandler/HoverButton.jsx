function HoverButton() {
  function mouseEntered() {
    console.log("Mouse Entered");
  }

  function mouseLeft() {
    console.log("Mouse Left");
  }

  return (
    <button onMouseEnter={mouseEntered} onMouseLeave={mouseLeft}>
      Hover Me
    </button>
  );
}
export default HoverButton;
