function switchState() {
  var state = document.getElementById('landing');
  if (!state) return;

  if (!state.className.includes('is-close')) 
    state.className = "landing is-close";
  else 
    state.className = "landing is-open";

  return;
} // TODO : Better system

export default function NavOpen() {
  return (
    <button onClick={() => switchState()}>Open Nav</button>  
  )
}

