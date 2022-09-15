import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <main>
      <section className="hero-section-container">
        <div className="hero-section-heading">
          <div className="overlayHero"></div>
          <div className="overlayText">
            <h1>Welcome to Houzez 2.0</h1>
            <p>
              Packed with 100+ new features and improvements, it is the biggest
              all-in-one solution for real estate companies and professionals
            </p>
          </div>
          <img src="/images/miami-beach.jpg"></img>
          <img src="/images/new-york.jpg"></img>
          <img src="/images/chicago-city.jpg"></img>
        </div>
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
          <div className="form">
            <form method="POST">
              <fieldset>
                <legend>Inquiry Type</legend>
                <select>
                  <option>Select</option>
                  <option>Purchase</option>
                  <option>Rent</option>
                  <option>Sell</option>
                  <option>Miss</option>
                  <option>Evaluation</option>
                  <option>Mortgage</option>
                </select>
              </fieldset>
              <fieldset>
                <legend>Your Information</legend>
                <select>
                  <option>I'm a</option>
                  <option>I'm a real estate agent</option>
                  <option>I'm a property owner</option>
                </select>
                <input
                  className="smallFieldInput odd"
                  type="text"
                  placeholder="First Name"
                ></input>
                <input
                  className="smallFieldInput"
                  type="text"
                  placeholder="Last Name"
                ></input>
                <input type="email" placeholder="Email Address"></input>
              </fieldset>
              <fieldset>
                <legend>Property Details</legend>
                <select>
                  <option value="">Select type</option>
                  <option value="">Apartment</option>
                  <option value="">Condo</option>
                  <option value="">Lot</option>
                  <option value="">Multi family home</option>
                  <option value="">Office</option>
                  <option value="">Shop</option>
                  <option value="">Single family home</option>
                  <option value="">Studio</option>
                  <option value="">Villa</option>
                </select>
                <input
                  type="number"
                  className="smallFieldInput odd"
                  placeholder="Max Price"
                />
                <input
                  type="number"
                  className="smallFieldInput"
                  placeholder="Minimum Size(Sq Ft)"
                />
                <input
                  type="number"
                  className="smallFieldInput odd"
                  placeholder="Number of beds"
                />
                <input
                  type="number"
                  className="smallFieldInput"
                  placeholder="Number of baths"
                />
              </fieldset>
              <input type="submit" value="Submit" className="btn"></input>
            </form>
          </div>
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
        <div className="content-types">
          <div className="container">
            <div className="row">
              <a href="#" className="big-box">
                <div className="content-box">
                  <div className="box-overlay"></div>
                  <h4>Appartment</h4>
                  <p>17 properties</p>
                </div>
              </a>
              <a href="#" className="small-box">
                <div className="content-box">
                  <div className="box-overlay"></div>
                  <h4>Villa</h4>
                  <p>10 properties</p>
                </div>
              </a>
              <a href="#" className="small-box">
                <div className="content-box">
                  <div className="box-overlay"></div>
                  <h4>Single family home</h4>
                  <p>10 properties</p>
                </div>
              </a>
            </div>

            <div className="row">
              <a href="" className="small-box">
                <div className="content-box">
                  <div className="box-overlay"></div>
                  <h4>Studio</h4>
                  <p>7 properties</p>
                </div>
              </a>
              <a href="#" className="small-box">
                <div className="content-box">
                  <div className="box-overlay"></div>
                  <h4>shop</h4>
                  <p>3 properties</p>
                </div>
              </a>
              <a href="#" className="big-box">
                <div className="content-box">
                  <div className="box-overlay"></div>
                  <h4>office</h4>
                  <p>3 properties</p>
                </div>
              </a>
            </div>

            <div className="row">
              <a href="#" className="big-box">
                <div className="content-box">
                  <div className="box-overlay"></div>
                  <h4>condo</h4>
                  <p>1 property</p>
                </div>
              </a>
              <a href="#" className="small-box">
                <div className="content-box">
                  <div className="box-overlay"></div>
                  <h4>lot</h4>
                  <p>1 property</p>
                </div>
              </a>
              <a href="#" className="small-box">
                <div className="content-box">
                  <div className="box-overlay"></div>
                  <h4>multi family home</h4>
                  <p>1 property</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="agents-section-container">
        <div className="container">
          <div className="agents-header">
            <h3>Meet Our Agents</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className="agents-body">
            <div className="agent-card">
              <a href="#">
                <img src="/images/agents/agent-1.jpg" alt="Samuel Palmer" />
              </a>
              <a href="#" className="agent-name">
                Samuel Palmer
              </a>
              <p className="agent-position">
                Company Agent , Modern House Real Estate
              </p>
              <p className="agent-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda nesciunt tempora ratione doloribus quas aut deleniti
                cumque obcaecati molestiae esse!
              </p>
              <a href="#" className="agent-profile">
                View Profile
              </a>
            </div>
            <div className="agent-card">
              <a href="#">
                <img src="/images/agents/agent-2.jpg" alt="Vincent Fuller" />
              </a>
              <a href="#" className="agent-name">
                Vincent Fuller
              </a>
              <p className="agent-position">
                Company Agent , Country House Real Estate
              </p>
              <p className="agent-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                sequi hic unde est libero fugiat totam excepturi error atque
                exercitationem!
              </p>
              <a href="#" className="agent-profile">
                View Profile
              </a>
            </div>
            <div className="agent-card">
              <a href="#">
                <img src="/images/agents/agent-3.jpg" alt="Brittany Watkins" />
              </a>
              <a href="#" className="agent-name">
                Brittany Watkins
              </a>
              <p className="agent-position">
                Company Agent , All American Real Estate
              </p>
              <p className="agent-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                laborum repudiandae sequi. Numquam quibusdam sint, hic explicabo
                aliquid necessitatibus quidem?
              </p>
              <a href="#" className="agent-profile">
                View Profile
              </a>
            </div>
            <div className="agent-card">
              <a href="#">
                <img src="/images/agents/agent-4.jpg" alt="Michelle Ramirez" />
              </a>
              <a href="#" className="agent-name">
                Michelle Ramirez
              </a>
              <p className="agent-position">
                Company Agent , Modern House Real Estate
              </p>
              <p className="agent-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
                delectus aperiam dolor dolorum sed qui eos, consectetur illum
                quasi!
              </p>
              <a href="#" className="agent-profile">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section-container">
        <div className="container">
          <div className="testimonials-header">
            <h3>Testimonials</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className="testimonials-body">
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-left"></i>
              <p className="testimonial-p">
                Really good Theme. We can't understand how we've been living
                without Houzez.
              </p>
              <div>
                <img
                  src="/images/testimonials/testimonial-1.jpg"
                  alt=""
                  className="testimonial-image"
                />
                <p>
                  by <strong>Roy Bennett</strong>
                  <br />
                  <em>Marketing Manager, Envato</em>
                </p>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-left"></i>
              <p className="testimonial-p">
                Great work on your Houzez. I like it more and more each day
                because it makes my life easier and lot profitable.
              </p>
              <div>
                <img
                  src="/images/testimonials/testimonial-2.jpg"
                  alt=""
                  className="testimonial-image"
                />
                <p>
                  by <strong>Kenneth Sandoval</strong>
                  <br />
                  <em>Realtor, Envato</em>
                </p>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-left"></i>
              <p className="testimonial-p">
                Houzez is the next killer theme. I strongly recommend Houzez to
                everyone interested in running a successful online business!
              </p>
              <div>
                <img
                  src="/images/testimonials/testimonial-3.jpg"
                  alt=""
                  className="testimonial-image"
                />
                <p>
                  by <strong>Kathleen Peterson</strong>
                  <br />
                  <em>Sales Manager, Envato</em>
                </p>
              </div>
            </div>
          </div>
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
