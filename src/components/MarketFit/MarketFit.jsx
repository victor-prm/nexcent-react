import './market-fit.sass'
import icon1 from '../../assets/Icon1.svg'
import icon2 from '../../assets/Icon2.svg'
import icon3 from '../../assets/Icon3.svg'
import MarketFitCard from './MarketFitCard'

function MarketFit() {
    let cards = [
        {
            icon: icon1,
            title: "Membership Organisations",
            text: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            icon: icon2,
            title: "National Associations",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, quas!"
        },
        {
            icon: icon3,
            title: "Clubs And Groups",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit excepturi vitae cum!"
        },
    ]



    return (
        <section className='market-fit'>
            <hgroup className='section-headline'>
                <h2>Manage your entire community in a single system</h2>
                <p>Who is Nextcent suitable for?</p>
            </hgroup>
            <ul className='market-fit__list'>
                {cards.map((card, index) => (<MarketFitCard key={index} data={card} />))}
            </ul>
        </section>
    )
}



export default MarketFit