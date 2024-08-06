import featuresImage from '../media/features.png'
import featuresItemImageOne from '../media/features-item1.png'
import featuresItemImageTwo from '../media/features-item2.png'
import featuresItemImageThree from '../media/features-item3.png'
export default function Features(){
    return(
        <section className="features container section">
            <div className="features_container">
                <header className="features_header">
                    <h1>Featurtes</h1>
                    <p>Most calendars are designed for teams. Slate is designed for <br />freelancers who want a simple way to plain their schedule.</p>
                </header>
                <main className='features_content'>
                    <div className="features_media">
                        <img src={featuresImage} />
                    </div>
                    <div className='features_content_items'>
                        <div className="features_content_item">
                            <div className="features_content_item_header">
                                <img src={featuresItemImageOne}/>
                                <h3>A single source of truth</h3>
                            </div>
                            <div className="features_content_item_content">
                                When you add your work to tour Slate calendar
                            </div>
                        </div>
                        <div className="features_content_item">
                            <div className="features_content_item_header">
                                <img src={featuresItemImageTwo}/>
                                <h3>A single source of truth</h3>
                            </div>
                            <div className="features_content_item_content">
                                When you add your work to tour Slate calendar
                            </div>
                        </div>
                        <div className="features_content_item">
                            <div className="features_content_item_header">
                                <img src={featuresItemImageThree}/>
                                <h3>A single source of truth</h3>
                            </div>
                            <div className="features_content_item_content">
                                When you add your work to tour Slate calendar
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}