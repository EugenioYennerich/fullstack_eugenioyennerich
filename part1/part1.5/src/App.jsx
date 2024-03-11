
const Header = (props) => {
  return (
    <div>
      Course: {props.course.name}
    </div>
  );
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name}: {props.exercises}</p>
    </div>
  );
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
}

const Total = (props) => { 
  let Total = 0; 
  props.parts.forEach (part => {
    Total += part.exercises;
  });
  return (
    <div>
      <p>Total = {Total} </p>
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App