function Student(props) {
  return (
    <div className="border w-fit py-2 ">
      <p>Name: {props.name} </p>
      <p>Age: {props.age}</p>
    </div>
  );
}
export default Student;
