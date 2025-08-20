import "../styles/Hero.css";

function Hero() {
  return (
    <section>
      <img
        src="https://res.cloudinary.com/dg1zkgl6n/image/upload/e_background_removal/f_png/v1754813897/img_3_1733317074951_edxwyr.jpg"
        alt="devKhamal picture"
        className="mypicture"
      />
      <h3>Hello, My Name is Kamal</h3>
      <h1>I make websites.</h1>
      <p>
        I'm a front-end <b>developer</b> also a <b>designer</b> based in Kano,
        Nigeria. I have worked on a wide range of front-end projects, from
        personal web apps to eCommerce booking platforms, with a focus on
        creating clean, well-crafted interfaces that look great and provide a
        seamless user experience.
      </p>
    </section>
  );
}

export default Hero;
