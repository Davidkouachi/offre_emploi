import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../composents/Footer';

function Job() {
  return (
    <>
        <section class="job-section jobs-grid-section pt-5">
              <div class="container">
                  <div class="section-title text-center">
                      <h5 class="text-success" >6 nouvelles offres d'empoi</h5>
                  </div>
              </div>
        </section>


        <div className="find-section ptb-2">
          <div className="container">
              <form className="find-form mt-0">
                  <div className="row">
                    <div className="col-lg-12 row">
                      <div className="col-lg-3">
                          <div className="form-group">
                              <select class="form-control">
                                <option data-display="Category">Secteur d'activité</option>
                                <option value="1">Informatique</option>
                                <option value="2">Banque assurance</option>
                                <option value="4">Batiment</option>
                                <option value="5">Mine et Energie</option>
                                <option value="6">Santé</option>
                            </select>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="form-group">
                              <select class="form-control">
                                <option data-display="Category">Niveau</option>
                                <option value="1">BEPC</option>
                                <option value="2">BAC </option>
                                <option value="4">BAC + 2</option>
                                <option value="5">BAC + 3</option>
                                <option value="6">BAC + 5</option>
                            </select>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="form-group">
                              <select class="form-control">
                                <option data-display="Category">Type d'offre</option>
                                <option value="1">Stage</option>
                                <option value="2">Emploi</option>
                            </select>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="form-group">
                              <input type="date" class="form-control" id="exampleInputEmail2" placeholder="date de publication" />
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-12 row pt-3">
                      <div className="col-lg-12">
                          <button type="submit" className="find-btn">
                              Recherche
                              <i className="bx bx-search"></i>
                          </button>
                      </div>
                    </div>
                  </div>
              </form>
            </div>
        </div>
        

          <section class="job-section jobs-grid-section pt-0 pb-70">
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

        <Footer />

    </>
  );
}

export default Job;