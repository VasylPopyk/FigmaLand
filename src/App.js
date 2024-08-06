import Page from './templates/page.js'
import './scss/style.scss'
import Banner from './Components/Banner.js';
import Features from './Components/Features.js'
import Contents from './Components/Contents.js'
import Gallery from './Components/Gallery.js'
import Partners from './Components/Partners.js'
import Users from './Components/Users.js'
import OpenType from './Components/OpenType.js'
function App() {
  return (
    <Page>
      <Banner />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Users />
      <OpenType />
    </Page>
  );
}

export default App;
