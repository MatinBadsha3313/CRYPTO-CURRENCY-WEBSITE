import React from "react";

const WhyUsInfoCard = ({ name, img }) => {
  return (
    <div className="card">
      <div className="card-img-box">
        <img src={img} alt="" />
      </div>
      <h3>{name}</h3>
      <p>
        Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
        doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores
        quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id,
        aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam
        repudiandae repellat veritatis unde reiciendis possimus animi autem
        natus
      </p>
    </div>
  );
};

export default WhyUsInfoCard;
