import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={4} sm={4} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
