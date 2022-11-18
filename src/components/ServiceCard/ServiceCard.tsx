import "./servicecard.css";

interface Props {
  image: string;
  title: string;
  paragraph: string;
}

const ServiceCard: React.FC<Props> = ({ image, title, paragraph }) => {
  return (
    <div className="service_card">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
