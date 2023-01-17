import "./projectcard.css";

interface Props {
  id: number;
  image: string;
  projectLink: string;
}

const ProjectCard: React.FC<Props> = ({ image, projectLink, id }) => {
  return (
    <div className="project_card" id={`card_${id.toString()}`}>
      <a href={projectLink}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default ProjectCard;
