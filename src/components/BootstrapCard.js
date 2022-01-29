import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function BootstrapCard(props) {
  return (
    <Col className="mb-4 recipe" sm={4} md={3} lg={2}>
      <Card
        // as="div"
        className="h-100 recipe-card"
        onClick={(e) => {
          props.handleClick(props.recipe);
        }}
        // style={{ borderRadius: "4px", border: "2px solid black" }}
      >
        <Card.Img
          style={{
            height: "100%",
            objectFit: "cover",
            // outline: "1px solid black",
          }}
          src={props.recipe.image}
          alt={props.recipeName}
        />
        <Card.ImgOverlay
          style={{
            padding: "0",
            display: "flex",
          }}
        >
          <Card.Title
            // "as" gives sass stylesheet access
            as="div"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "25%",
              backgroundColor: "#575757c9",
              color: "#d8d8d8",
              paddingLeft: ".5rem",
              paddingRight: ".5rem",
              margin: "0",
              borderRadius: "0 0 3px 3px",
            }}
            className="text-center align-self-end card-title"
          >
            <div
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {props.recipeName}
            </div>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}
