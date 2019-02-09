import React, { Component } from 'react';
import './Testimonials.css';

class Testimonials extends React.Component {
  render() {
    const testimonials = [
      'I really enjoy working out with Hussain. He is able to challenge me without making me feel inadequate.  Does a great job explaining the exercises and correcting along the way so you learn how to work out correctly. Althought it remains hard work, I find the workouts fun and enjoyable.',
      'I found the sessions very useful. I was surprised at what I could accomplish. I look forward to booking some more sessions in the future.',
      'Hussain Bokhari is a talented trainer who pays great attention to ensuring proper form and methodology. During his safety conscious training sessions, I learned so much and have been enriched by the quality of the workout knowledge that he taught me. The best!',
    ];

    return (
      <div className="Testimonials">
        <h1 className="TestimonialTitle">Testimonials</h1>
        <div className="TestimonialsContainer">
          {testimonials.map(testimonial => (
            <div className="Testimonial">
              <div className="OpenQuoteContainer">
                <img
                  src="assets/quoteOpen.svg"
                  alt="open quote"
                  className="OpenQuote"
                />
              </div>
              <p className="TestimonialText">{testimonial}</p>
              <div className="CloseQuoteContainer">
                <img
                  src="assets/quoteClose.svg"
                  alt="close quote"
                  className="CloseQuote"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Testimonials;
