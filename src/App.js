import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <header className="h-25 border d-flex flex-column">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Dribbble</a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Shots<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Designers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hiring</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign In</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </nav>
          <section className="flex-grow-1 text-white bg-black d-flex flex-column justify-content-center align-items-center">
            <p><span className="font-weight-bold">What are you working on?</span> Double Dribbble is where designers get inspired and hired</p>
            <button className="btn btn-sm btn-pink">
              Continue <i className="fa fa-long-arrow-right"></i>
            </button>
          </section>
          <section className="h-25 bg-dark text-white-50 d-flex justify-content-center align-items-center">
            <p>lookimg for a designer <u><a href="#" className="text-white "> Learn more </a></u></p>
          </section>
        </header>
        <main className="h-100 d-flex flex-column">
          <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center align-items-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link text-dark font-weight-bold">
                  Popular <i className="fa fa-angle-down"></i></a>
              </li>
              <li className=" nav-item">
                <a href="#" className="nav-link text-dark font-weight-bold">
                  Shots<i className="fa fa-angle-down"></i></a>
              </li>
              <li className=" nav-item">
                <a href="#" className="nav-link text-dark font-weight-bold">
                  Now <i className="fa fa-angle-down"></i></a>
              </li>
            </ul>
          </nav>
          <section className="project-grid flex-grow-1 p-4 d-flex flex-wrap justify-content-around">
            <div>
              <div class="card p-2" style={{ width: '16rem' }}>
                <img class="card-img-top" src="https://loremflickr.com/180/180" alt="Card image cap" />
                <div class="card-body d-flex justify-content-end p-1">
                  <span className="text-muted mx-1 text-small"><i className="fa fa-eye"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-comment"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-heart"></i>2,108</span>
                </div>
              </div>
            </div>
            <div>
              <div class="card p-2" style={{ width: '16rem' }}>
                <img class="card-img-top" src="https://loremflickr.com/180/180" alt="Card image cap" />
                <div class="card-body d-flex justify-content-end p-1">
                  <span className="text-muted mx-1 text-small"><i className="fa fa-eye"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-comment"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-heart"></i>2,108</span>
                </div>
              </div>
            </div>
            <div>
              <div class="card p-2" style={{ width: '16rem' }}>
                <img class="card-img-top" src="https://loremflickr.com/180/180" alt="Card image cap" />
                <div class="card-body d-flex justify-content-end p-1">
                  <span className="text-muted mx-1 text-small"><i className="fa fa-eye"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-comment"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-heart"></i>2,108</span>
                </div>
              </div>
            </div>
            <div>
              <div class="card p-2" style={{ width: '16rem' }}>
                <img class="card-img-top" src="https://loremflickr.com/180/180" alt="Card image cap" />
                <div class="card-body d-flex justify-content-end p-1">
                  <span className="text-muted mx-1 text-small"><i className="fa fa-eye"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-comment"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-heart"></i>2,108</span>
                </div>
              </div>
            </div>
            <div>
              <div class="card p-2" style={{ width: '16rem' }}>
                <img class="card-img-top" src="https://loremflickr.com/180/180" alt="Card image cap" />
                <div class="card-body d-flex justify-content-end p-1">
                  <span className="text-muted mx-1 text-small"><i className="fa fa-eye"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-comment"></i>2,108</span>
                  <span className="text-muted mx-1 text-small"><i className="fa fa-heart"></i>2,108</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
