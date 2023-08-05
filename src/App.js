import './App.css';
import React, {useState} from 'react';

function App() {
  // making state of our application

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message,setMessage] = useState('');

  // logic

  let calcBmi = (event) => {
    event.preventDefault();

    if(weight === 0 || height === 0){
      alert('please enter a valid weight and height');
    }
    else {
      let bmi = (weight/height/height) * 10000;
      setBmi(bmi.toFixed(1));    

    // Setting message using ternary operators
    setMessage(
      bmi < 18.5 ? 'You are Underweight' : bmi <= 25 ? 'You are Healthy' : 'You are Overweight'
    );
    }
  };

  // reload

  let reload = () => {
    window.location.reload();
  }




  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator </h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kg)</label>
            <input type='text' placeholder='Enter Weight Value' value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div>
            <label>Height (Cm)</label>
            <input type='text' placeholder='Enter Height Value' value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
