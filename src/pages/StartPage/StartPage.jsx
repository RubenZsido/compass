function StartPage() {
  return (
    <>
      <section id="main" className="main section grid-center">
        <h1 className="main-heading">
          Rapid test your <span className="highlight">idea</span>!
        </h1>
        <p className="main-text">
          Customized ads and websites tailored specifically for startups.
        </p>
        <a className="btn" href="#form">
          Join now
        </a>
      </section>

      <section id="perks" className="perks section grid-center">
        <div className="perk-container grid-center">
          <div className="perk grid-center">
            <img
              src="/src/assets/images/image.png"
              className="perk-img"
              alt=""
            />
            <p className="perk-header">Generate media</p>
            <p className="perk-text">
              Create website and ad campaign instant to test your idea
            </p>
          </div>

          <div className="perk grid-center">
            <img
              src="/src/assets/images/image.png"
              className="perk-img"
              alt=""
            />
            <p className="perk-header">Get feedback</p>
            <p className="perk-text">
              Find out if your ideas as good as you thought!
            </p>
          </div>

          <div className="perk grid-center">
            <img
              src="/src/assets/images/image.png"
              className="perk-img"
              alt=""
            />
            <p className="perk-header">Find your customers</p>
            <p className="perk-text">
              Reach out and find if your idea has any demand before start your
              business
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about section grid-center">
        <p className="section-header">
          About <span className="highlight">us</span>{" "}
        </p>
        <div className="about-container grid-center">
          <p className="about-text">
            Ut eget est at ex elementum accumsan. Fusce consectetur, nunc a
            fringilla hendrerit, mauris ligula sagittis sem, eget semper orci
            urna et tortor. Ut ac purus sodales, ullamcorper velit vitae,
            viverra odio. Vivamus vel felis scelerisque, commodo metus nec,
            sollicitudin mi. Suspendisse sagittis, felis sit amet volutpat
            vulputate, metus tellus sodales quam, at faucibus metus justo eget
            risus. Sed sodales nisi sed urna interdum mattis.
          </p>
          <img
            src="/src/assets/images/image.png"
            className="about-img"
            alt="description image"
          />
        </div>
      </section>

      <section id="services" className="services section grid-center">
        <p className="section-header">
          Our <span className="highlight">services</span>
        </p>
        <div className="card-container grid-center">
          <div className="card grid-center">
            <img
              src="/src/assets/images/image.png"
              className="card-img"
              alt="service image"
            />
            <p className="card-header">Ai Generated website</p>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              bibendum leo risus, a laoreet augue ultrices sit amet.
            </p>
          </div>

          <div className="card grid-center">
            <img
              src="/src/assets/images/image.png"
              className="card-img"
              alt="service image"
            />
            <p className="card-header">Ai Generated ads</p>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              bibendum leo risus, a laoreet augue ultrices sit amet.
            </p>
          </div>

          <div className="card grid-center">
            <img
              src="/src/assets/images/image.png"
              className="card-img"
              alt="service image"
            />
            <p className="card-header">Get feedback</p>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              bibendum leo risus, a laoreet augue ultrices sit amet.
            </p>
          </div>
        </div>
      </section>

      <section id="form" className="subscribe section grid-center">
        <p className="section-header">
          Join <span className="highlight">now</span>
        </p>
        <form className="form">
          <p className="form-header">Try the beta!</p>
          <div className="input-container">
            <img
              src="/src/assets/images/image.png"
              alt="email-logo"
              className="email-logo"
            />
            <input
              type="text"
              className="email"
              name="email"
              id="email"
              placeholder="bela@gmail.com"
            ></input>
          </div>
          <button className="btn">Susbscribe</button>
        </form>
      </section>

      <footer className="footer grid-center">
        <p className="footer-text">
          Copyright &#169; 2023. All rights reserved.
        </p>
        <p className="footer-text">
          Powered by{" "}
          <a href="" className="link">
            Compass
          </a>
        </p>
      </footer>
    </>
  );
}

export default StartPage;
