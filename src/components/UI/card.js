import "./card.css";

function Card(props) {
  const classes = "card " + props.className; //gap after cad is important
  return <div className={classes}>{props.children}</div>;
}
export default Card;
