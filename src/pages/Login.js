import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>

          <div className="signin-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                        <form className="signin-form">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Entrer votre Email" required />
                            </div>
                            <div className="form-group">
                                <label>Mot de passe</label>
                                <input type="password" className="form-control" placeholder="Entrer votre mot de passe" required />
                            </div>
                            <div className="signin-btn text-center">
                                <button type="submit">Se connecter</button>
                            </div>
                            <div className="other-signin text-center">
                                <span>Ou connectez-vous avec</span>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="bx bxl-google"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="create-btn text-center">
                                <p>Vous n'avez pas de compte? 
                                    <Link to="/register">
                                         Créer un compte
                                        <i className="bx bx-chevrons-right bx-fade-right"></i>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>

    </>
  );
}

export default Login;