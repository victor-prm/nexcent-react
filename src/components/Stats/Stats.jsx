import './stats.sass'
import icon4 from '../../assets/Icon4.svg'
import icon5 from '../../assets/Icon5.svg'
import icon6 from '../../assets/Icon6.svg'
import icon7 from '../../assets/Icon7.svg'

import MarketFitCard from './StatsItem'

function Stats() {
    let stats = [
        {
            icon: icon4,
            number: "2,245,341",
            text: "Members",
        },
        {
            icon: icon5,
            number: "46,328",
            text: "Clubs",
        },
        {
            icon: icon6,
            number: "828,867",
            text: "Event Bookings",
        },
        {
            icon: icon7,
            number: "1,926,436",
            text: "Payments",
        },
    ]



    return (
        <section className='stats'>
            <hgroup className='stats__text-container'>
                <h2>Helping a local <span className='title-highlight'>business reinvent itself</span></h2>
                <p>We reached here with our hard work and dedication</p>
            </hgroup>
            <ul className='stats__list'>
                {stats.map(stat => (<MarketFitCard data={stat} />))}
            </ul>
        </section>
    )
}



export default Stats