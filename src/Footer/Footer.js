import locationImage from '../media/footer/location.png'
import phobeImage from '../media/footer/phone.png'
import twitterImage from '../media/footer/twitter.png'
import facebookImage from '../media/footer/facebook.png'
import licendleImage from '../media/footer/licendle.png'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer_container container'>
                <nav className="footer_container_menu">
                    <div className="footer_container_menu_item">
                        <h1>Fingertipe</h1>
                        <a className="footer_container_menu_item_link">Home</a>
                        <a className="footer_container_menu_item_link">Examples</a>
                        <a className="footer_container_menu_item_link">Pricing</a>
                        <a className="footer_container_menu_item_link">Updates</a>
                    </div>
                    <div className="footer_container_menu_item">
                        <h1>Resources</h1>
                        <a className="footer_container_menu_item_link">Home</a>
                        <a className="footer_container_menu_item_link">Examples</a>
                        <a className="footer_container_menu_item_link">Pricing</a>
                        <a className="footer_container_menu_item_link">Updates</a>
                    </div>
                    <div className="footer_container_menu_item">
                        <h1>About</h1>
                        <a className="footer_container_menu_item_link">Home</a>
                        <a className="footer_container_menu_item_link">Examples</a>
                        <a className="footer_container_menu_item_link">Pricing</a>
                        <a className="footer_container_menu_item_link">Updates</a>
                    </div>
                </nav>
                <div className="footer_container_feedback">
                    <div className="footer_container_feedback_item">
                        <img src={locationImage}/>
                        <h2>7480 Mockingbird Hill undefined </h2>
                    </div>
                    <div className="footer_container_feedback_item">
                        <img src={phobeImage}/>
                        <h2>(239) 555-0108</h2>
                    </div>
                    <nav className="footer_container_feedback_media">
                        <a><img src={twitterImage}/></a>
                        <a><img src={facebookImage}/></a>
                        <a><img src={licendleImage}/></a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}