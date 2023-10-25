import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../composents/Footer';

function Index() {
  return (
    <>
          <div className="banner-section">
              <div className="d-table">
                  <div className="d-table-cell">
                      <div className="container">
                          <div className="banner-content text-center">
                              <p>Trouvez des emplois et des opportunités de carrière</p>
                              <h1>Obtenez l'emploi de vos rêves !</h1>
                              <form className="banner-form">
                                  <div className="row">
                                      <div className="col-md-3">
                                          <div className="form-group">
                                              <label for="exampleInputEmail2">Secteur d'activité:</label>
                                              <select class="form-control">
                                                <option data-display="Category">Choisir</option>
                                                <option value="1">Batiment</option>
                                                <option value="2">Informatique</option>
                                                <option value="2">Agronomie</option>
                                                <option value="2">Mécanique</option>
                                            </select>
                                          </div>
                                      </div>
                                      <div className="col-md-3">
                                          <div className="form-group">
                                              <label for="exampleInputEmail2">Type d'offre:</label>
                                              <select class="form-control">
                                                <option data-display="Category">Choisir</option>
                                                <option value="1">Emploi</option>
                                                <option value="2">Stage</option>
                                            </select>
                                          </div>
                                      </div>
                                      <div className="col-md-3">
                                          <div className="form-group">
                                              <label for="exampleInputEmail2">Niveau:</label>
                                              <select class="form-control">
                                                <option data-display="Category">Choisir</option>
                                                <option value="1">BEPC</option>
                                                <option value="2">BAC </option>
                                                <option value="4">BAC + 2</option>
                                                <option value="5">BAC + 3</option>
                                                <option value="6">BAC + 5</option>
                                            </select>
                                          </div>
                                      </div>
                                      <div className="col-md-3">
                                          <button type="submit" className="find-btn">
                                              Recherche
                                              <i className="bx bx-search"></i>
                                          </button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <section class="categories-section pt-100 pb-70">
              <div class="container">
                  <div class="section-title text-center">
                      <h2>Choisir une catégorie</h2>
                  </div>
                  <div class="row">
                      <div class="col-lg-3 col-md-4 col-sm-6">
                          <Link to="/job">
                              <div class="category-card">
                                  <i class="flaticon-accounting"></i>
                                  <h3>Comptabilié</h3>
                              </div>
                          </Link>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6">
                          <Link to="/job">
                              <div class="category-card">
                                  <i class="flaticon-graduation-cap"></i>
                                  <h3>Education</h3>
                              </div>
                          </Link>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6">
                          <Link to="/job">
                              <div class="category-card">
                                  <i class="flaticon-wrench-and-screwdriver-in-cross"></i>
                                  <h3>Automobile</h3>
                              </div>
                          </Link>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6">
                          <Link to="/job">
                              <div class="category-card">
                                  <i class="flaticon-consultation"></i>
                                  <h3>Business</h3>
                              </div>
                          </Link>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6">
                          <Link to="/job">
                              <div class="category-card">
                                  <i class="flaticon-heart"></i>
                                  <h3>Santé</h3>
                              </div>
                          </Link>
                      </div>
                      <div class="col-lg-3  col-md-4 col-sm-6">
                          <Link to="/job">
                              <div class="category-card">
                                  <i class="flaticon-computer"></i>
                                  <h3>Informatique</h3>
                              </div>
                          </Link>
                      </div>
                      <div class="col-lg-3  col-md-4 col-sm-6 offset-md-2 offset-lg-0">
                          <Link to="/job">
                              <div class="category-card">
                                  <i class="flaticon-worker"></i>
                                  <h3>Mine et Energie</h3>
                              </div>
                          </Link>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6">
                          <Link to="/job">
                              <div class="category-card">
                                  <i class="flaticon-auction"></i>
                                  <h3>Droit</h3>
                              </div>
                          </Link>
                      </div>
                  </div>
              </div>
          </section>


          <section class="job-section pb-70">
              <div class="container">
                  <div class="section-title text-center">
                      <h2>Des emplois qui pourraient vous intéresser</h2>
                  </div>
                  <div class="row">
                      <div class="col-sm-6">
                          <div class="job-card">
                              <div class="row align-items-center">
                                  <div class="col-lg-3">
                                      <div class="thumb-img">
                                          <Link to="/job_detail">
                                              <img src="assets/img/company-logo/1.png" alt="company logo" />
                                          </Link>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="job-info">
                                          <h3>
                                              <Link to="/job_detail">Post-Room Operate</Link>
                                          </h3>
                                          <ul>
                                              <li>Via <Link to="/job_detail">Tourt Design LTD</Link></li>
                                              <li>
                                                  <i class="bx bx-location-plus"></i>
                                                  Wellesley Rd, London
                                              </li>
                                              <li>
                                                  <i class="bx bx-filter-alt"></i>
                                                  Accountancy
                                              </li>
                                              <li>
                                                  <i class="bx bx-briefcase"></i>
                                                  Freelance
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="col-lg-3">
                                      <div class="job-save">
                                          <span>Full Time</span>
                                          <Link to="/job_detail">
                                              <i class="bx bx-heart"></i>
                                          </Link>
                                          <p>
                                              <i class="bx bx-stopwatch"></i>
                                              1 Hr Ago
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="job-card">
                              <div class="row align-items-center">
                                  <div class="col-lg-3">
                                      <div class="thumb-img">
                                          <Link to="/job_detail">
                                              <img src="assets/img/company-logo/2.png" alt="company logo" />
                                          </Link>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="job-info">
                                          <h3>
                                              <Link to="/job_detail">Data Entry</Link>
                                          </h3>
                                          <ul>
                                              <li>Via <Link to="/job_detail">Techno Inc.</Link></li>
                                              <li>
                                                  <i class="bx bx-location-plus"></i>
                                                  Street 40/A, London
                                              </li>
                                              <li>
                                                  <i class="bx bx-filter-alt"></i>
                                                  Data Entry
                                              </li>
                                              <li>
                                                  <i class="bx bx-briefcase"></i>
                                                  Freelance
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="col-lg-3">
                                      <div class="job-save">
                                          <Link to="/job_detail">
                                              <i class="bx bx-heart"></i>
                                          </Link>
                                          <p>
                                              <i class="bx bx-stopwatch"></i>
                                              3 Hr Ago
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="job-card">
                              <div class="row align-items-center">
                                  <div class="col-lg-3">
                                      <div class="thumb-img">
                                          <Link to="/job_detail">
                                              <img src="assets/img/company-logo/3.png" alt="company logo" />
                                          </Link>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="job-info">
                                          <h3>
                                              <Link to="/job_detail">Graphic Designer</Link>
                                          </h3>
                                          <ul>
                                              <li>Via <Link to="/job_detail">Devon Design</Link></li>
                                              <li>
                                                  <i class="bx bx-location-plus"></i>
                                                  West Sight, USA
                                              </li>
                                              <li>
                                                  <i class="bx bx-filter-alt"></i>
                                                  Graphics
                                              </li>
                                              <li>
                                                  <i class="bx bx-briefcase"></i>
                                                  Freelance
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="col-lg-3">
                                      <div class="job-save">
                                          <Link to="/job_detail">
                                              <i class="bx bx-heart"></i>
                                          </Link>
                                          <p>
                                              <i class="bx bx-stopwatch"></i>
                                              4 Hr Ago
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="job-card">
                              <div class="row align-items-center">
                                  <div class="col-lg-3">
                                      <div class="thumb-img">
                                          <Link to="/job_detail">
                                              <img src="assets/img/company-logo/4.png" alt="company logo" />
                                          </Link>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="job-info">
                                          <h3>
                                              <Link to="/job_detail">Web Developer</Link>
                                          </h3>
                                          <ul>
                                              <li>Via <Link to="/job_detail">MegaNews</Link></li>
                                              <li>
                                                  <i class="bx bx-location-plus"></i>
                                                  San Francisco, California
                                              </li>
                                              <li>
                                                  <i class="bx bx-filter-alt"></i>
                                                  Development
                                              </li>
                                              <li>
                                                  <i class="bx bx-briefcase"></i>
                                                  Freelance
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="col-lg-3">
                                      <div class="job-save">
                                          <Link to="/job_detail">
                                              <i class="bx bx-heart"></i>
                                          </Link>
                                          <p>
                                              <i class="bx bx-stopwatch"></i>
                                              5 Hr Ago
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="job-card">
                              <div class="row align-items-center">
                                  <div class="col-lg-3">
                                      <div class="thumb-img">
                                          <Link to="/job_detail">
                                              <img src="assets/img/company-logo/5.png" alt="company logo" />
                                          </Link>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="job-info">
                                          <h3>
                                              <Link to="/job_detail">Digital Marketor</Link>
                                          </h3>
                                          <ul>
                                              <li>Via <Link to="/job_detail">AB Marketer LTD</Link></li>
                                              <li>
                                                  <i class="bx bx-location-plus"></i>
                                                  Wellesley Rd, London
                                              </li>
                                              <li>
                                                  <i class="bx bx-filter-alt"></i>
                                                  Marketing
                                              </li>
                                              <li>
                                                  <i class="bx bx-briefcase"></i>
                                                  Freelance
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="col-lg-3">
                                      <div class="job-save">
                                          <Link to="/job_detail">
                                              <i class="bx bx-heart"></i>
                                          </Link>
                                          <p>
                                              <i class="bx bx-stopwatch"></i>
                                              6 Hr Ago
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="job-card">
                              <div class="row align-items-center">
                                  <div class="col-lg-3">
                                      <div class="thumb-img">
                                          <Link to="/job_detail">
                                              <img src="assets/img/company-logo/6.png" alt="company logo" />
                                          </Link>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="job-info">
                                          <h3>
                                              <Link to="/job_detail">UI/UX Designer</Link>
                                          </h3>
                                          <ul>
                                              <li>Via <Link to="/job_detail">Design Hunter</Link></li>
                                              <li>
                                                  <i class="bx bx-location-plus"></i>
                                                  Zoo Rd, London
                                              </li>
                                              <li>
                                                  <i class="bx bx-filter-alt"></i>
                                                  Accountancy
                                              </li>
                                              <li>
                                                  <i class="bx bx-briefcase"></i>
                                                  Freelance
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="col-lg-3">
                                      <div class="job-save">
                                          <Link to="/job_detail">
                                              <i class="bx bx-heart"></i>
                                          </Link>
                                          <p>
                                              <i class="bx bx-stopwatch"></i>
                                              8 Hr Ago
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section class="use-section pt-100 pb-70">
              <div class="container">
                  <div class="section-title text-center">
                      <h2>Le moyen le plus simple d'utiliser</h2>
                  </div>
                  <div class="row">
                      <div class="col-md-4 col-sm-6">
                          <div class="use-text">
                              <span>1</span>
                              <i class="flaticon-website"></i>
                              <h3>Recherche d'emploi</h3>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-6">
                          <div class="use-text">
                              <span>2</span>
                              <i class="flaticon-recruitment"></i>
                              <h3>Trouvez votre poste vacant</h3>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-6 offset-sm-3 offset-md-0">
                          <div class="use-text">
                              <span>3</span>
                              <i class="flaticon-login"></i>
                              <h3>Soumettre CV</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <Footer />
    </>
  );
}

export default Index;
