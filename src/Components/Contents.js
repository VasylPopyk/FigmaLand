import image1 from '../media/contents-1.png'
import image2 from '../media/contents-2.png'

export default function Contentes(){
    return(
        <section className="contents container section">
            <header className="contents_header">
                <h1>Contents</h1>
                <p>We focus on ergonomics and meeting you where you work. <br />It`s only a keystroke away.</p>
            </header>
            <main className="contents_content">
                <div className="contents_content_item">
                    <h3>Work</h3>
                    <p>Ever wondered if you`re too reliant on a client for work? Slate helps you identify</p>
                    <button>Sign Up</button>
                    <img src={image1}/>
                </div>
                <div className="contents_content_item">
                    <h3>Design with real data</h3>
                    <p>Ever wondered if you`re too reliant on a client for work? Slate helps you identify</p>
                    <button>Try For Free</button>
                    <img src={image2}/>
                </div>
            </main>
        </section>
    )
}