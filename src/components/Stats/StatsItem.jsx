import './stats-card.sass'
function MarketFitCard(props) {
    let { icon, number, text } = props.data

    return (
        <li className="stats-card">
            <img className="stats-card__img" src={icon} alt="" />
            <hgroup className="stats-card__text-container">
                <h3>{number}</h3>
                <p>{text}</p>
            </hgroup>
        </li>
    )
}

export default MarketFitCard