import './hero.sass'
import illustration from '../assets/Illustration.svg'

function Hero() {

    return (
        <section className='hero'>
            <hgroup>
                <h1 className='hero__title'>Lessons and insights <span className='hero__title-highlight'>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className='hero__btn btn-primary'>Register</button>
            </hgroup>
            <img className="hero__illustration" src={illustration} alt="" />
        </section>
    )
}

export default Hero