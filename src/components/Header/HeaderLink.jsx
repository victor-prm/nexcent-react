function HeaderLink(props) {
    let { text, href } = props.data

    return (
        <div>
            <a href={href}>{text}</a>
        </div>
    )
}

export default HeaderLink