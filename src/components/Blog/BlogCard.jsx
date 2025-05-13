import './blog-card.sass'
function BlogCard(props) {
    let { img, title } = props.data

    return (
        <li className="blog-card">
            <img className="blog-card__img" src={img} alt="" />
            <hgroup className="blog-card__title-container">
                <h3 className="blog-card__title">{title}</h3>
            </hgroup>
        </li>
    )
}

export default BlogCard