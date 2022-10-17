import "./RequiredField.css";

const RequiredField = (props) => {
  const classes = "required-field " + props.className;
  const children = "This field is required.";
  if (props.data ==='blank') return <div className={classes}>{children}</div>;
  else return <div ></div>;
};
export default RequiredField;
