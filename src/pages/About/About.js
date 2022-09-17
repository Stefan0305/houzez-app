import Testimonials from "../../components/Testimonials/Testimonials";

function About() {
  return (
    <main>
      <section className="heading">
        <div className="container">About Us</div>
      </section>

      <section className="vision">
        <div className="container">
          <h2>Your Vision Unrestricted</h2>
          <p>
            Houzez is a premium WordPress theme for real estate agents and
            agencies where modern aesthetics are combined with a tasteful
            simplicity and where the ease of use is achieved without compromise
            in your ability to customize the design.
          </p>
          <p>
            Whether you are a real estate agent looking to build a website for
            your company or a web developer seeking a perfect WordPress theme
            for your next project, you are certain to appreciate the numerous
            features and benefits that our theme provides.
          </p>
          <p>
            Houzez is also a WordPress-based property management system which
            allows you to own and maintain a real estate marketplace, coordinate
            your agents, accept submissions and offer membership packages.
          </p>
          <p>
            Unlike many other real estate themes which confine you to a handful
            of predefined layouts, Houzez offers a limitless array of
            possibilities to structure and style your content. All of the
            customization options are logically organized in your WordPress
            admin panel and thorough customization in the provided
            documentation.
          </p>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
          <div className="heading">
            <h2>Meet our Team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              porro.
            </p>
          </div>
          <div className="our-team-body">
            <div className="employee-card">
              <div className="card-overlay"></div>
              <a href="">
                <img src="/images/team/member-1.jpg" alt="" />
              </a>
              <p>Kathleen Grant</p>
              <p>Funder</p>
            </div>
            <div className="employee-card">
              <div className="card-overlay"></div>
              <a href="">
                <img src="/images/team/member-2.jpg" alt="" />
              </a>
              <p>Keith Bailey</p>
              <p>CEO</p>
            </div>
            <div className="employee-card">
              <div className="card-overlay"></div>
              <a href="">
                <img src="/images/team/member-3.jpg" alt="" />
              </a>
              <p>Danielle Murray</p>
              <p>Manager</p>
            </div>
            <div className="employee-card">
              <div className="card-overlay"></div>
              <a href="">
                <img src="/images/team/member-4.jpg" alt="" />
              </a>
              <p>Thomas Stevenes</p>
              <p>Manager</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="heading">
            <h2>Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              blanditiis?
            </p>
          </div>
          <div className="services-body">
            <div className="box-item">
              <div className="box-overlay"></div>
              <div className="box-title">
                <p>Services</p>
                <h4>Property Management</h4>
              </div>
              <div className="box-details">
                <p>MORE DETAILS</p>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="box-item">
              <div className="box-overlay"></div>
              <div className="box-title">
                <p>Services</p>
                <h4>Financial Reporting</h4>
              </div>
              <div className="box-details">
                <p>MORE DETAILS</p>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="box-item">
              <div className="box-overlay"></div>
              <div className="box-title">
                <p>Services</p>
                <h4>Capital Improvements</h4>
              </div>
              <div className="box-details">
                <p>MORE DETAILS</p>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="box-item">
              <div className="box-overlay"></div>
              <div className="box-title">
                <p>Services</p>
                <h4>Business Development</h4>
              </div>
              <div className="box-details">
                <p>MORE DETAILS</p>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="box-item">
              <div className="box-overlay"></div>
              <div className="box-title">
                <p>Services</p>
                <h4>Finance Real Estate</h4>
              </div>
              <div className="box-details">
                <p>MORE DETAILS</p>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="box-item">
              <div className="box-overlay"></div>
              <div className="box-title">
                <p>Services</p>
                <h4>Recover Asset Value</h4>
              </div>
              <div className="box-details">
                <p>MORE DETAILS</p>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="blog-heading">
            <h2>Read From Our Blog</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis, id?
            </p>
          </div>
          <div className="blog-body"></div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}

export default About;
