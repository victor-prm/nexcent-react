import './market-fit-card.sass'
function MarketFitCard(props) {
    let { icon, title, text } = props.data

    return (
        <li className="market-fit-card">
            <img src={icon} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </li>
    )
}

export default MarketFitCard