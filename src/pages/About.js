import SocialMedia from '../components/about/FontAwesome'
import Footer from '../components/Footer'
import '../css/About.css'

function About(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <div className='container'>
                <h4 className='wel'>Welcome To</h4>
                <h1 style={{textAlign:'center'}}>Super Kids</h1>
                <h1 className='us'>ABOUT US</h1>
                <p className='ab'>Super Kids is aLorem ipsum dolor sit amet consectetur. Integer proin amet risus at nibh viverra dictum facilisi.</p>
                <h1 className='con'>Contact Details</h1>
                <SocialMedia/>
            </div>
            <div className="footer w-100 mt-5 py-3 text-center ">
                Join our Global Community <br></br>
                <a href="mailto:info@superkids.@gmail.com">Contact US</a>
            </div>
        </div>
    );
}



export default About;