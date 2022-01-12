import avatar from "../../images/avatar.jpg";

function About({ link, text, onSignOut, loggedin, email }) {
  return (
    <div className="about">
      <img className="about__avatar" src={avatar} alt="avatar"></img>
      <div className="about__description">
        <h2 className="about__description__title">About the author</h2>
        <h3 className="about__description__subtitle">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </h3>
        <h3 className="about__description__subtitle">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </h3>
      </div>
    </div>
  );
}

export default About;
