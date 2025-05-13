import './stats-item.sass'
function MarketFitCard(props) {
    let { icon, number, text } = props.data
    console.log(props)

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