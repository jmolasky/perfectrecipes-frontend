export default function InstructionsEdit(props) {
  return (
    <textarea
      style={{ width: "100%", height: "20rem", paddingLeft: ".75rem" }}
      name="instructions"
      id=""
      placeholder="instructions"
      value={props.recipe.instructions}
      onChange={props.handleChange}
    ></textarea>
  );
}
