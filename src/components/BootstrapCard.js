import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function BootstrapCard(props) {
  return (
    <Col className="mb-4 recipe-card" sm={4} md={3} lg={2}>
      <Card
        className="h-100"
        style={{
          // width: "100%",
          // height: "100%",
          // paddingTop: "66.66%",
          border: "2px solid grey",
          // margin: ".75rem",
        }}
        onClick={(e) => {
          props.handleClick(props.recipe);
        }}
      >
        <Card.Img
          style={{ height: "100%", objectFit: "cover" }}
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
              // paddingTop: "1rem",
              // paddingBottom: "1rem",
              paddingLeft: ".5rem",
              paddingRight: ".5rem",
              margin: "0",
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
