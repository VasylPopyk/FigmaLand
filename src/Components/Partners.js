import partnersIcon1 from '../media/partners/logos_airbnb.png'
import partnersIcon2 from '../media/partners/logos_android-icon.png'
import partnersIcon3 from '../media/partners/logos_apiary.png'
import partnersIcon4 from '../media/partners/logos_apple-app-store.png'
import partnersIcon5 from '../media/partners/logos_basecamp.png'
import partnersIcon6 from '../media/partners/logos_ibm.png'
export default function Partners(){
    return(
        <section className="partners container section">
            <header className="parthners_header">
                <h1>Partners</h1>
                <p>We focus on ergonomics and meeting you where you work. <br />It`s only a keystroke away.</p>
            </header>
            <main className="parthners_content">
                <img src={partnersIcon1}/>
                <img src={partnersIcon2}/>
                <img src={partnersIcon3}/>
                <img src={partnersIcon4}/>
                <img src={partnersIcon5}/>
                <img src={partnersIcon6}/>
            </main>
            <button>All Partners</button>
        </section>
    )
}