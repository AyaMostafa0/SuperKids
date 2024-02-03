import { Link } from 'react-router-dom';
import '../css/Registration.css'


function Registration(props){

    const handleSignUp = () => {
        props.setSignedUp(true);
    }

    return(
        <section className="form registration">
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="text-center my-5">
                        Registration
                    </h2>
                    <form className="col-md-5">
                        <div className="row mt-3">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group mt-3">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="row mt-3">
                            <div className="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip"/>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" for="gridCheck">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <Link to='/home' onClick={handleSignUp}
                        className="btn btn-primary text-light mt-3">
                            Sign Up
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Registration;

