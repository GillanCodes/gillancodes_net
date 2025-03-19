import './Landing.scss';

export default function Landing() {

  const close = (link: string) => {
    document.getElementById('landing')!.className = "landing is-close" 
  }

  return (
    <div className="landing" id="landing">
      <div className="landing-content">
        <div className="bento-grid">
          <div className="box" id="one" onClick={() => close('/home')}></div>
          <div className="box" id="two"></div>
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
