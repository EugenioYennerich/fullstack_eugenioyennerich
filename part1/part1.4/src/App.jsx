const Header = (props) => {
  return (
    <div>
      Course: {props.course}
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
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App