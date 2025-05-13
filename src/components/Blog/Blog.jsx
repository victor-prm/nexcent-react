import './blog.sass'
import image1 from '../../assets/Image1.jpg'
import image2 from '../../assets/Image2.jpg'
import image3 from '../../assets/Image3.jpg'
import BlogCard from './BlogCard'

function Blog() {
    let cards = [
        {
            img: image1,
            title: "Creating Streamlined Safeguarding Processes with OneRen"
        },
        {
            img: image2,
            title: "National What are your safeguarding responsibilities and how can you manage them?"
        },
        {
            img: image3,
            title: "Revamping the Membership Model with Triathlon Australia"
        },
    ]

    return (
        <section className='blog'>
            <hgroup className='section-headline'>
                <h2>Caring is the new marketing</h2>
                <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </hgroup>
            <ul className='blog__list'>
                {cards.map((card, index) => (<BlogCard key={index} data={card} />))}
            </ul>
        </section>
    )
}

export default Blog