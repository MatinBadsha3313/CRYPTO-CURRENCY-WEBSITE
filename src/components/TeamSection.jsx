import TeamInfoCards from "../SubComponent/TeamInfoCards";

const TeamSection = () => {
  return (
    <section className="team-section section">
      <h2 className="heading">
        Our <span>Team</span>
      </h2>

      <div className="card-container">
        <TeamInfoCards img={"./images/team-1.jpg"} name={"Joseph Brown"} />
        <TeamInfoCards img={"./images/team-2.jpg"} name={"Nancy White"} />
        <TeamInfoCards img={"./images/team-3.jpg"} name={"Earl Martinez"} />
        <TeamInfoCards img={"./images/team-4.jpg"} name={"Josephine Allard"} />
      </div>
    </section>
  );
};

export default TeamSection;
