import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>

          <div className="signin-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                        <form className="signin-form">
                            <div className="form-group">
                                <label>Nom et Prénoms</label>
                                <input type="email" className="form-control" placeholder="Entrer votre Nom et prénoms" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Entrer votre Email" required />
                            </div>
                            <div className="form-group">
                                <label>Mot de passe</label>
                                <input type="password" className="form-control" placeholder="Entrer votre mot de passe" required />
                            </div>
                            <div className="form-group">
                                <label>Confirmer le mot de passe</label>
                                <input type="password" className="form-control" placeholder="Entrer votre mot de passe" required />
                            </div>
                            <div className="signin-btn text-center">
                                <button type="submit">S'inscrire'</button>
                            </div>
                            <div className="create-btn text-center">
                                <p>Vous avez déjà un  compte? 
                                    <Link to="/login">
                                         Se connecter
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

export default Register;