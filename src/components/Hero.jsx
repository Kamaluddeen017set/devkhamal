import "../styles/Hero.css";
import TypingText from "./TypingText"; // Import our typing effect

function Hero() {
  return (
    <section>
      <div className="image_border">
        <img
          src="https://res.cloudinary.com/dg1zkgl6n/image/upload/v1755844876/20250822_003544-Photoroom_wbq1kd.png"
          alt="devKhamal picture"
          className="mypicture"
        />
      </div>

      <h3>
        Hello, I`m Kamaluddin, a{" "}
        <TypingText
          texts={[
            "Web Developer",
            "Frontend Engineer",
            "UI/UX Designer",
            "React Enthusiast",
            "Freelancer",
            "Responsive Designer",
          ]}
          typingSpeed={50}
          deletingSpeed={50}
          delay={2000}
        />
      </h3>

      <h1>I design and build modern, responsive websites.</h1>
      <p>
        I’m a <b>front-end developer</b> and <b>designer</b> based in Kano,
        Nigeria. I create modern, responsive, and user-friendly websites that
        bring ideas to life. Over the years, I’ve worked on projects ranging
        from personal web apps to e-commerce platforms, always focusing on clean
        design, performance, and a seamless user experience.
      </p>
    </section>
  );
}

export default Hero;
