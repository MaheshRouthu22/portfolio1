import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import buildings from "../../Assets/Projects/buildings.png";
import editor from "../../Assets/Projects/editor.jpg";
import netflix from "../../Assets/Projects/netflix.png";
import todo from "../../Assets/Projects/todo.png";
// import qrcode from "../../Assets/Projects/qrcode.png";
import organic from "../../Assets/Projects/organic.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildings}
              isBlog={false}
              title="Buildings Design"
              description="This website showcases innovative building designs.It highlights services such as architecture, interior design, and garden and outdoor planning.
The site features an overview of completed projects, details the company’s working process, and introduces the team of
experts. It aims to provide experience-driven excellence in architectural services."
              ghLink="https://github.com/ChaitanyaEmani/website"
              demoLink="https://website-9lkqwydgl-emani-chaitanyas-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="User Management System"
              description="User-Management-System is a web application project designed for managing users. It includes various files and folders such as server, views, node_modules, and configuration files. The main technologies used are EJS (Embedded JavaScript), JavaScript, and CSS. The project seems to involve a backend server setup with a front-end interface for user management functionalities."
              ghLink="https://github.com/ChaitanyaEmani/User-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={organic}
              isBlog={false}
              title="Organic Products"
              description="This project presents the organic food which are very useful to our health. It promotes the organic products to save our health."
              ghLink="https://github.com/ChaitanyaEmani/Ecommerce"
              demoLink="https://organic-product.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="This project aims to develop a Netflix clone using HTML and CSS. It includes sections for the header with a navigation bar, feature highlights, FAQ, and footer design. The project showcases key features of Netflix and provides a better user experience through an interactive design"
              ghLink="https://github.com/ChaitanyaEmani/Netflix"
              demoLink="https://netflix-clone-umber-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Image Editor"
              description="This project helps to edit the images. It appears to be a simple project focusing on image editing functionalities."
              ghLink="https://github.com/ChaitanyaEmani/Image-Editor"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="To-Do-List application is generally used to note our works.It is a web application project designed to create a To-Do List with functionalities to add, edit, and delete tasks. It uses HTML, CSS, and JavaScript, and demonstrates the use of DOM manipulation and event listeners to manage task operations. The repository includes files for the HTML structure, CSS styling, and JavaScript logic."
              ghLink="https://github.com/ChaitanyaEmani/To-Do-List"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
