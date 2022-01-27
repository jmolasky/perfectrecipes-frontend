import Card from "react-bootstrap/Card";

export default function BootstrapCard(props) {
  return (
    <Card
      style={{
        width: "100%",
        height: "15rem",
        // paddingTop: "66.66%",
        border: "2px solid grey",
        margin: ".75rem",
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
          style={{
            width: "100%",
            backgroundColor: "#575757c9",
            color: "#d8d8d8",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            margin: "0",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          className="text-center align-self-end"
        >
          {props.recipeName}
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}
