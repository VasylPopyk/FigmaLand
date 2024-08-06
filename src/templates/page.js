import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"
export default function Page({children}){
    return(
        <div class='wrapper'>
            <Header />
            <main class='page'>
                {children}
            </main>
            <Footer />
        </div>
    )
}