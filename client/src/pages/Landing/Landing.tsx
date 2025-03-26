import { useNavigate } from 'react-router';
import './Landing.scss';
import { useEffect } from 'react';

export default function Landing() {

  const navigate = useNavigate();

  const switchState = (link?: string) => {
    var state = document.getElementById('landing');
    if (!state) return;

    if (!state.className.includes('is-close'))
      state.className = "landing is-close";
    else
      state.className = "landing is-open";

    if (!link) return;
    navigate(link);
  }


  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          return switchState();
        default:
          return
      }
    }
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    }
  }, [])

  return (
    <div className="landing" id="landing">
      <div className="landing-content">
        <div className="bento-grid">
          <div className="box" id="one" onClick={() => switchState('/about')}>
            <p>About</p>
          </div>
          <div className="box" id="two" onClick={() => switchState('/')}>
            <p>Home</p>
          </div>
          <div className="box" id="three" onClick={() => switchState('/blog')}>
            <p>Blog</p>
          </div>
          <div className="box" id="four">
            <p>Text</p>
          </div>
          <div className="box" id="five">
            <p>Text</p>
          </div>
          <div className="box" id="six">
            <p>Text</p>
          </div>
          <div className="box" id="seven">
            <p>Text</p>
          </div>
        </div>
      </div>
    </div>
  )
}
