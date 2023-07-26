import heroImg from './assets/hero.svg'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Conentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolor facere voluptates! Voluptatibus dicta nobis tenetur. Voluptas
            nobis saepe ad fuga ipsa tempora repellat iusto fugit, pariatur
            quibusdam, voluptatum ex.
          </p>
        </div>
      </div>
      <div className='img-container'>
        <img src={heroImg} alt='woman and the browser' />
      </div>
    </section>
  )
}
export default Hero
