import { useState } from 'react';
import JobBox from './components/jobBox';
import { Grid } from '@mui/material';
function App() {
  const [name, setName] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [Sjob, setSJob] = useState([])

  const addJobs = () => {
    let arr = Sjob;

    const job = {
      name: name,
      start: start,
      end: end,
    }


    const nomeValido = /^[A-Za-z\s,-]+$/.test(job.name);

    const horarioValido = /^([01]\d|2[0-3]):([0-5]\d)$/.test(job.start) && /^([01]\d|2[0-3]):([0-5]\d)$/.test(job.end);



    if (nomeValido && horarioValido) {
      setEnd('');
      setName("");
      setStart("");
      arr.push(job);
      setSJob(arr)

    } else {
      alert(`insira corretamente as entradas`)
    }


  }



  const handleName = (event) => {
    setName(event.target.value);
  }
  const handleStart = (event) => {
    setStart(event.target.value);
  }
  const handleEnd = (event) => {
    setEnd(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <h3>Nome da tarefa:</h3>
        <input type='text' value={name} onChange={handleName} ></input>
      </div>
      <div>
        <h3>Início:</h3>
        <input type='time' value={start} onChange={handleStart} ></input>
      </div>
      <div>
        <h3>Final:</h3>
        <input type='time' value={end} onChange={handleEnd} ></input>
      </div>
      <div style={{ marginTop: "12px" }}>
        <button onClick={(() => {

          addJobs()

        })}>
          Adicionar tarefa
        </button>
      </div>


      <Grid item sm={6} alignContent={'center'} marginY={-35} marginX={60}>
        <Grid item marginTop={6}>
          {Sjob.map((item) => <JobBox job={item} />)}

        </Grid>

      </Grid >

    </div>

  );
}

export default App;
