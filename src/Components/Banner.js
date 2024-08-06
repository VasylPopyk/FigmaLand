import bannerImage from '../media/banner.png'
import '../scss/style.scss';
export default function Banner(){
    return(
        <section className='banner container section'>
            <main className='banner_content'>
                <h1 className='banner_content_title'>
                    Work of the speed<br/> of thought
                </h1>
                <p className='banner_content_text'>
                    Most calendars are designed for teams. Slate is designed for <br />freelancers who want a simple way to plain their schedule.
                </p>
                <div className='banner_content_buttons'>
                    <button className='blue'>Try For Free</button>
                    <button>Learn More</button>
                </div>
            </main>
            <div className='banner_media'>
                <img src={bannerImage}/>
            </div>
        </section>
    )
}