function Student({name, age, skills, country, graduated}) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Age: {age}</p>
      <p>skills: {skills?.join(", ")}</p>
      <p>Country: {country}</p>
      <p>Graduated: {graduated.toString()}</p>
    </div>
  );
}
export default Student;
