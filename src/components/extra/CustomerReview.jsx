import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/images/1.webp";
import img2 from "../../assets/images/cars-construction-benefit-your-child_1200x1200.webp";
import img3 from "../../assets/images/Little-boy-playing-on-floor-with-cars-1200x900.jpg";

const CustomerReview = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-amber-700 mt-10 mb-12 underline">
        Customers Review
      </h1>
      <div className="md:grid md:grid-cols-3 md:gap-5">
        <div data-aos="fade-up-right">
          <div className="card w-full h-[30rem] glass">
            <figure>
              <img src={img1} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Anthony Mark</h2>
              <p>
                Hi everyone! I just had to tell you all about this super cool
                toy car I got. It's like having my very own mini race track at
                home! 🚗💨 First of all, this toy car is so fast! It zooms
                around like lightning. I love pretending to be a race car
                driver, and this car makes it feel real. The sound effects make
                it even more exciting. Vroom! Vroom!{" "}
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="card w-full h-[30rem] glass">
            <figure>
              <img src={img2} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Watson Disla</h2>
              <p>
                Hey there, fellow adventure-seekers! I've just experienced the
                most incredible journey with my new toy car, and I couldn't wait
                to share it with you all. Buckle up and get ready for a
                mind-blowing ride through time! 🌟🚗⏰ Get ready for the
                ultimate off-road experience!
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-left">
          <div className="card w-full h-[30rem] glass">
            <figure>
              <img src={img3} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tom Holand</h2>
              <p>
                Hey, fellow thrill-seekers! I've got to share my latest
                adrenaline-pumping adventure with my awesome toy car. Get ready
                for the ultimate off-road experience! 🚙💨🌳 This toy car is
                built for off-roading excitement. It's like having my very own
                rugged monster truck that can conquer any terrain. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
