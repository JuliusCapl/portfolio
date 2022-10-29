import React from "react";
import "./Projects.css";
import proyecto1 from "../../Assets/img/proyecto1.jpg";
import proyecto2 from "../../Assets/img/proyecto2.jpg";
import proyecto3 from "../../Assets/img/proyecto3.jpg";


const Projects = () => {
  return (
    <section id="projects" className="py-5 projects--">
      <div className="container projects--div">
        <div className="project--text my-5 text-center d-flex justify-content-center align-items-center">
          <h3 className="mx-md-5 colorffffff">
            Hey There!! have a look of my Projects
          </h3>
        </div>
        <div className="container projects--carousel my-5">
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={proyecto2}
                  className="d-block w-100"
                  alt="proyecto numero 1"
                ></img>
                <div className="carousel-caption d-none d-md-block info--">
                  <h5>Project number 1</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={proyecto1}
                  className="d-block w-100"
                  alt="proyecto numero 2"
                ></img>
                <div className="carousel-caption d-none d-md-block info--">
                  <h5>Project number 2</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={proyecto3}
                  className="d-block w-100"
                  alt="proyecto numero 3"
                ></img>
                <div className="carousel-caption d-none d-md-block info--">
                  <h5>Project number 3</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
