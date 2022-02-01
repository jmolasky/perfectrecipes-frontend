import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";

export default function BootstrapCard(props) {
  return (
    <Col className="mb-4" sm={4} md={3} lg={2}>
      <Ratio aspectRatio="4x3">
        <Card
          className="h-100 recipe-card"
          onClick={(e) => {
            props.handleClick(props.recipe);
          }}
        >
          <Card.Img
            style={{
              height: "100%",
              objectFit: "cover",
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
      </Ratio>
    </Col>
  );
}
