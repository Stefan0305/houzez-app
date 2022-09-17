import "./Testimonials.scss";

function Testimonials() {
  return (
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
  );
}

export default Testimonials;
