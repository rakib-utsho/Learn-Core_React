function handelClick(event) {
  console.log("hello!");
  console.log(event);
}

function handelMouseOver() {
  console.log("bye!");
}

function handelDblClick() {
  console.log("you double clicked");
}

export default function Button() {
  return (
    <div>
      <button onClick={handelClick}>Click Me</button>
      <p onMouseOver={handelMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nostrum
        excepturi! Ipsa porro aspernatur itaque omnis architecto accusantium
        voluptates eaque!
      </p>
      <button onDoubleClick={handelDblClick}>Double Clicked</button>
    </div>
  );
}
