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
          <div className="box" id="one" onClick={() => close('/about')}></div>
          <div className="box" id="two" onClick={() => close('/')}></div>
          <div className="box" id="three"></div>
          <div className="box" id="four"></div>
          <div className="box" id="five"></div>
          <div className="box" id="six"></div>
          <div className="box" id="seven"></div>
        </div>
      </div>
    </div>
  )
}
