const skills = [
  {
    name: "HTML",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790038/HTML_dohtmb.png",
    level: "Advance",
    type: "Language",
  },
  {
    name: "CSS",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790046/CSS_hk0vtr.png",
    level: "Advance",
    type: "Style",
  },
  {
    name: "JavaScript",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790063/javascript_fl9erm.png",
    level: "Advance",
    type: "Language",
  },
  {
    name: "React.js",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790014/react_wmvwlj.png",
    level: "Intermediate",
    type: "Framework",
  },
  {
    name: "Node.js",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790036/node.js_kuxqku.png",
    level: "Beginner",
    type: "Runtime",
  },
  {
    name: "Express.js",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755899992/icons8-express-js-128_momuty.png",
    level: "Intermediate",
    type: "Framework",
  },
  {
    name: "Telwins",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790067/TELWINS_yfnwuc.png",
    level: "Advance",
    type: "FrameWork",
  },
  {
    name: "Python",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790013/python_nf9zgs.png",
    level: "Intermediate",
    type: "Language",
  },
  {
    name: "PHP",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790052/php_tg3d4t.png",
    level: "Intermediate",
    type: "Language",
  },
  {
    name: "MongoDB",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790043/mongodb_xzwgmu.png",
    level: "Advance",
    type: "Database",
  },
  {
    name: "Canva",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790130/camva_sc3jci.png",
    level: "Intermediate",
    type: "Design Tool",
  },
  {
    name: "Cloudinary",
    logo: "https://cloudinary-res.cloudinary.com/image/upload/f_auto,q_auto/c_scale,w_180/website/cloudinary_web_favicon.png",
    level: "Advance",
    type: "Imagebase",
  },
];

import "../styles/Skills.css";
// import Skills from "./Skills";
function Skills() {
  return (
    <>
      <h1 className="skills_heading">Tools & Technologies</h1>

      <hr />
      <div className="container">
        {skills.map((sKillobj) => (
          <Skill skill={sKillobj} key={sKillobj.name} />
        ))}
      </div>
    </>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill_card">
      <img src={skill.logo} alt={skill.name} />

      <h2>{skill.name}</h2>
      <h3>{skill.level}</h3>
      <p>{skill.type}</p>
    </div>
  );
}
export default Skills;
