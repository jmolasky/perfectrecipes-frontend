export default function ImagePreview(props) {
  const handleError = (evt) => {
    evt.target.src =
      "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        onError={(e) => {
          handleError(e);
        }}
        style={{
          textAlign: "center",
          width: "35%",
          height: "auto",
          margin: "0 auto",
        }}
        src={props.recipe.image}
        alt={props.recipe.name}
      />
    </div>
  );
}