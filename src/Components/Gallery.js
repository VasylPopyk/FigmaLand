import card1 from '../media/galery/card-1.png'
import card2 from '../media/galery/card-2.png'
import card3 from '../media/galery/card-3.png'
import card4 from '../media/galery/card-4.png'
import card5 from '../media/galery/card-5.png'
import card6 from '../media/galery/card-6.png'
import card7 from '../media/galery/card-7.png'

export default function Gallery(){
    return(
        <section className="galery container section">
            <header className="galery_header">
                <h1>Gallery</h1>
                <p>We focus on ergonomics and meeting you where you work. It`s only a keystroke away.</p>
            </header>
            <main className="galery_content">
                <div className="galery_media">
                    <img src={card1}/>
                    <img src={card2}/>
                    <img src={card3}/>
                    <img src={card4}/>
                    <img src={card5}/>
                    <img src={card6}/>
                    <img src={card7}/>
                </div>
                <button>See more</button>
            </main>
        </section>
    )
}
