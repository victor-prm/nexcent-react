function HeaderLink(props) {
    let { text, href } = props.data
    console.log(props)

    return (
        <div>
            <a href={href}>{text}</a>
        </div>
    )
}

export default HeaderLink