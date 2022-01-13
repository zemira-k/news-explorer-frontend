import avatar from "../../images/avatar.jpg";

function About({ link, text, onSignOut, loggedin, email }) {
  return (
    <div className="about">
      <img className="about__avatar" src={avatar} alt="avatar"></img>
      <div className="about__description">
        <h2 className="about__description_title">About the author</h2>
        <p className="about__description_subtitle">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__description_subtitle">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
