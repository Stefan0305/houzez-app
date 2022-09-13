import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <main>
      <section className="hero-section-container">
        <div className="hero-section-heading"></div>
        <div className="hero-section-cta">
          <div className="container">
            <div className="cta-cards">
              <h4>Easy to get started</h4>
              <p>
                Get ready to launch your realty site in minutes without any
                previous experience
              </p>
              <a href="#">Learn more</a>
            </div>
            <div className="cta-cards">
              <h4>Highly customizable</h4>
              <p>
                Customize the site to your expectations by using all of the
                theme features
              </p>
              <a href="#">Learn more</a>
            </div>
            <div className="cta-cards">
              <h4>Drag-and-drop based</h4>
              <p>
                Design your page by simply dragging the features using Elementor
                page builder
              </p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
        {/* <div className="clip-bottom"></div> */}
      </section>

      <section className="features-section-container">
        <div className="clip-top"></div>
        <div className="container">
          <div className="features-section-header">
            <h3>Display Latest & Featured Properties</h3>
            <p>
              With the features and filters provided with the Houzez widgets you
              can turn your visitors attention to the latest listings or the
              ones that are most profitable to buy at the moment.
            </p>
          </div>
          <div className="features"></div>
        </div>
        <div className="clip-bottom"></div>
      </section>

      <section className="widgets-section-container">
        <div className="container">
          <div className="widgets-header">
            Houzez offers a wide range of drag-and-drop widgets to assist you in
            designing your pages
          </div>
          <div className="widgets">
            <Link to="/#">
              <div className="widget">
                <img src="/images/buy.png" alt="BUY" />
                <p>looking to buy</p>
              </div>
            </Link>
            <Link to="/#">
              <div className="widget">
                <img src="/images/sell.png" alt="SELL" />
                <p>sell your home</p>
              </div>
            </Link>
            <Link to="/#">
              <div className="widget">
                <img src="/images/rent.png" alt="RENT" />
                <p>rent a place</p>
              </div>
            </Link>
            <Link to="/#">
              <div className="widget">
                <img src="/images/help.png" alt="HELP" />
                <p>need help?</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid-section-container">
        <div className="clip-top"></div>
        <div className="container">
          <div className="grid">
            <div className="grid-header">
              <h3>You Can Design Clean And Modern Grid Layouts</h3>
              <p>
                Grids are the backbone of all layouts, infographics and
                presentations
              </p>
            </div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
          </div>
        </div>
        <div className="clip-bottom"></div>
      </section>

      <section className="forms-section-container">
        <div className="container">
          <div className="forms-header">
            <h3>
              Create Custom Capture Forms And Manage Leads With The Integrated
              Houzez CRM
            </h3>
            <p>
              The Inquiry Form widget allows you to design unique forms to
              capture your leads. It connects with Houzez CRM and your email
              inbox to keep your work everything on track.
            </p>
          </div>
          <div className="form"></div>
        </div>
      </section>

      <section className="content-types-section-container">
        <div className="clip-top"></div>
        <div className="container">
          <div className="content-types-header">
            <h3>Display Different Content Types</h3>
            <p>
              The Houzez Grids widgets allow you to display property cities,
              types, status, etc within different grid style variations, colors
              and typography options
            </p>
          </div>
        </div>
        <div className="content-types"></div>
      </section>

      <section className="agents-section-container">
        <div className="container">
          <div className="agents-header">
            <h3>Meet Our Agents</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className="agents-body"></div>
        </div>
      </section>

      <section className="testimonials-section-container">
        <div className="container">
          <div className="testimonials-header">
            <h3>Testimonials</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className="testimonials-body"></div>
        </div>
      </section>

      <section className="sponsors-section-container">
        <div className="container">
          <div className="sponsors">
            <div className="sponsor">
              <img src="/images/sponsors/wildridge.jpg" alt="wildridge" />
            </div>
            <div className="sponsor">
              <img src="/images/sponsors/hillstrom.jpg" alt="hillstrom" />
            </div>
            <div className="sponsor">
              <img
                src="/images/sponsors/horizon-homes.jpg"
                alt="horizon homes"
              />
            </div>
            <div className="sponsor">
              <img
                src="/images/sponsors/home-realestate.jpg"
                alt="home real estate"
              />
            </div>
            <div className="sponsor">
              <img
                src="/images/sponsors/charles-bentley.jpg"
                alt="charles bentley"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
