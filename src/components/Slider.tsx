
const Slider = () => {
  return (
    <div className="slider" style={{ backgroundColor: "black" }}>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="firstslide">
              <h4>
                “Customer service was on point and the food was out of <br />
                this world. Every single dish had so much flavour. It was <br />
                a great experience and we will definitely come back.”
              </h4>
              <p className="mt-5">KIM AND DAVID R., 2021</p>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="secondslide">
              <h4>
                "The chef's tasting menu is outstanding, drinks are <br />{" "}
                excellent and staff is attentive and very friendly.No <br />
                details missed here."{" "}
              </h4>
              <p>Jason V.,2022</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="thirdslide">
              <h4>
                "Everything about our experience was amazing, from <br />
                pulling up to the valet, to the spectacular views, top <br />
                notch food five star service and sounds of the ocean <br />{" "}
                while eating."
              </h4>
              <p>CHRISTINE Q., 2022, VIA TRIPADVISOR</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
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
  );
};

export default Slider;
