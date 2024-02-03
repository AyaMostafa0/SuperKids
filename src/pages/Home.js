import Carousel from '../components/home/Carousel';
import '../css/Home.css'

function Home(props){
    return(
        <section className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Carousel 
                            img1="/images/homePage/school1.jpg"
                            img2="/images/homePage/school2.avif"
                            img3="/images/homePage/school3.jpg"
                        />
                    </div>
                    <div className="brand-box col-md-12">
                        <h1>Shop by Brand</h1>
                        <div className="brands text-center">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="/images/homePage/logo1.png"
                                    className="w-100"/>
                                </div>
                                <div className="col-md-3">
                                    <img src="/images/homePage/logo2.jpg"
                                    className="w-75"/>
                                </div>
                                <div className="col-md-3">
                                    <img src="/images/homePage/logo3.png"
                                    className="w-75"/>
                                </div>
                                <div className="col-md-3">
                                    <img src="/images/homePage/logo4.png"
                                    className="w-75"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer w-100 mt-5 py-3 text-center ">
                        Join our Global Community <br></br>
                        <a href="mailto:info@superkids.@gmail.com">Contact US</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
