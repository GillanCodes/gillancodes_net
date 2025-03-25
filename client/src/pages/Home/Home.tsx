import NavOpen from '../../components/NavOpen/NavOpen'
import "./Home.scss";

export default function Home() {
  return (
    <main className='container' id='home'>
      <NavOpen />

      <section className='section home'>
        <div className="home__title">
          <h1><span className="highlight">GillanCodes</span><br/> Full-Stack Web Developer.</h1>
        </div>
        <div className='home__image'>
          <img src="/assets/image_98.jpg" alt="" />
        </div>
      </section>

      <section className='section'>
      </section>

      <section className='section'>
      </section>

      <section className='section'>
      </section>

    </main>
  )
}
