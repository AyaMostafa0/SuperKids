import { Link } from "react-router-dom";

function MustSignUp(props){
    return(
        <section className="must-sign-up">
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-md-7">
                        <h5 style={{marginTop: '200px'}}>
                            You must sign up before accessing products or cart page
                        </h5>
                        <Link to='/registration'
                        className="btn btn-primary text-light mt-3">
                            Go To Sign Up Page
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MustSignUp;
