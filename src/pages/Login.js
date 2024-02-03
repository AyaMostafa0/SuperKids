import { Link } from 'react-router-dom';
import "../css/Registration.css";

function Login(props) {
  
  const handleSignIn = () => {
    props.setSignedIn(true);
  }

  return (
    <section className="form login">
      <div className="container">
          <div className="row justify-content-center">
              <h2 className="text-center my-5" >
                  Login
              </h2>
              <form className="col-md-4">
                  <div className="form-group mt-3">
                      <label for="inputEmail4">Email</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                  </div>
                  <div className="form-group mt-3">
                      <label for="inputPassword4">Password</label>
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                  </div>
                  <div className="form-group mt-3">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label className="form-check-label" for="gridCheck">
                              Remember me
                          </label>
                      </div>
                  </div>
                  <div className="form-group mt-3">
                    <Link to='/home' onClick={handleSignIn}
                    className="btn btn-primary text-light mt-3">
                        Log In
                    </Link>
                  </div>
              </form>
          </div>
      </div>
    </section>
  );
}

export default Login;