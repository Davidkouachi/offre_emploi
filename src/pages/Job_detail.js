import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../composents/Footer';

function Job_detail() {
  return (
    <>
        <section className="page-title title-bg2">
          <div className="d-table">
              <div className="d-table-cell">
                  <h2>Détails</h2>
              </div>
          </div>
        </section>

        <section class="job-details ptb-100">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="job-details-text">
                                  <div class="job-card">
                                      <div class="row align-items-center">
                                          <div class="col-md-2">
                                              <div class="company-logo">
                                                  <img src="assets/img/company-logo/1.png" alt="logo" />
                                              </div>
                                          </div>
                                          <div class="col-md-10">
                                              <div class="job-info">
                                                  <h3>Web Designer, Graphic Designer, UI/UX Designer</h3>
                                                  <ul>
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
                                                  <span>
                                                      <i class="bx bx-paper-plane"></i>
                                                      Apply Before: June 01,2021
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="details-text">
                                      <h3>Description</h3>
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into essentially unchanged.</p>
                                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                  </div>
                                  <div class="details-text">
                                      <h3>Exigences</h3>
                                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                      <ul>
                                          <li>
                                              <i class="bx bx-check"></i>
                                              Work experience
                                          </li>
                                          <li>
                                              <i class="bx bx-check"></i>
                                              Skills (soft skills and/or technical skills)
                                          </li>
                                          <li>
                                              <i class="bx bx-check"></i>
                                              WPersonal qualities and attributes.
                                          </li>
                                          <li>
                                              <i class="bx bx-check"></i>
                                              Support software roll-outs to production.
                                          </li>
                                          <li>
                                              <i class="bx bx-check"></i>
                                              Guide and mentor junior engineers. Serve as team lead if appropriate.
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="details-text">
                                      <h3>Job Details</h3>
                                      <div class="row">
                                          <div class="col-md-6">
                                              <table class="table">
                                                  <tbody>
                                                      <tr>
                                                          <td><span>Company :</span></td>
                                                          <td>Tourt Design LTD</td>
                                                      </tr>
                                                      <tr>
                                                          <td><span>Location :</span></td>
                                                          <td>Wellesley Rd, London</td>
                                                      </tr>
                                                      <tr>
                                                          <td><span>Job Type :</span></td>
                                                          <td>Full Time</td>
                                                      </tr>
                                                      <tr>
                                                          <td><span>Email</span></td>
                                                          <td><a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#b7dfd2dbdbd8f7d4d8dac7d6d9ce99d4d8da"></a></td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                          <div class="col-md-6">
                                              <table class="table">
                                                  <tbody>
                                                      <tr>
                                                          <td><span>Experince : </span></td>
                                                          <td>2 Years</td>
                                                      </tr>
                                                      <tr>
                                                          <td><span>Langue : </span></td>
                                                          <td>English</td>
                                                      </tr>
                                                      <tr>
                                                          <td><span>Salaire : </span></td>
                                                          <td>$10,000</td>
                                                      </tr>
                                                      <tr>
                                                          <td><span>Website : </span></td>
                                                          <td><a href="#">www.company.com</a></td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="theme-btn">
                                      <a href="#" class="default-btn">
                                          Postuler
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="job-sidebar">
                          <h3>Poster par </h3>
                          <div class="posted-by">
                              <img src="assets/img/client-1.png" alt="client image" />
                              <h4>John Doe</h4>
                              <span>CEO of Tourt Design LTD</span>
                          </div>
                      </div>
                      <div class="job-sidebar social-share">
                          <h3>Partager</h3>
                          <ul>
                              <li>
                                  <a href="#" target="_blank">
                                      <i class="bx bxl-facebook"></i>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" target="_blank">
                                      <i class="bx bxl-twitter"></i>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" target="_blank">
                                      <i class="bx bxl-pinterest"></i>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" target="_blank">
                                      <i class="bx bxl-linkedin"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <Footer />

    </>
  );
}

export default Job_detail;