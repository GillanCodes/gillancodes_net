import { useNavigate } from 'react-router';
import './Landing.scss';

export default function Landing() {
  
  const navigate = useNavigate();

  const close = (link: string) => {
    document.getElementById('landing')!.className = "landing is-close" 
    if (link) navigate(link); 
  }

  return (
    <div className="landing" id="landing">
      <div className="landing-content">
        <div className="bento-grid">
          <div className="box" id="one" onClick={() => close('/about')}>
            <p>About</p>
          </div>
          <div className="box" id="two" onClick={() => close('/')}>
            <p>Home</p>
          </div>
          <div className="box" id="three">
            <p>Text</p>
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
