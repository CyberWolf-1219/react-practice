const ValueCard = ({ icon, title, desc }) => {
  return (
    <>
      <div className="brand-value">
        <span className="em-icon-wrapper">
          <img src={icon} alt="" />
        </span>
        <span className="em-text-wrapper">
          <b>{title}</b>
          <p>{desc}</p>
        </span>
      </div>
    </>
  );
};

export default ValueCard;
