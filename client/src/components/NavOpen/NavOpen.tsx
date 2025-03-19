
export default function NavOpen() {

  const open = () => {
    document.getElementById("landing")!.className = "landing is-open";
  }

  return (
    <button onClick={open}>Open Nav</button>  
  )
}

