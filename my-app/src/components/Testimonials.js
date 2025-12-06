import React from "react";
import "./Testimonials.css";
import person from "../assets/person.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: person,
      name: "John Doe",
      email: "john.doe@example.com",
      rating: 5,
      comment: "\"Fantastic service! Would recommend to everyone without hesitation.\"",
    },
    {
      id: 2,
      image: person,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      rating: 4,
      comment: "\"Great experience overall, but there's room for improvement.\"",
    },
    {
      id: 3,
      image: person,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      rating: 5,
      comment: "\"Loved every moment! Can't wait to return.\"",
    },
  ];
  return (
    <div className="testimonials-container">
      <div className="testimonials-heading">
        <h1>Hear From Our Guests!</h1>
      </div>
      <div className="testimonials-list">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="testimonial-contact">
              <img
                src={item.image}
                alt={item.title}
                className="testimonial-image"
              />
              <div>
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-email">{item.email}</p>
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index + 1 <= item.rating ? "star filled" : "star"}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="testimonial-rating"></div>
            <p className="testimonial-message">{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
