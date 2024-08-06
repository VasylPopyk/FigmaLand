import image from '../media/Line Chart 1.png'

export default function OpenType(){
    return(
        <section className='opentype container section'>
            <div className="opentype_content">
                <h1>OpenType feature and Variable font</h1>
                <button className='blue'>Try For Free</button>
            </div>
            <div className="opentype_media">
                <img src={image}/>
            </div>
        </section>
    )
}