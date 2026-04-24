import {simulateWorkflow}
from '../api/simulationApi';

export default function Sandbox(){

const [logs,setLogs]=useState([])

const runSimulation=async()=>{

const result=
await simulateWorkflow({})

setLogs(result.data.steps)

}

return(
<div>
<button onClick={runSimulation}>
Run Workflow Test
</button>

{
logs.map((log,i)=>(
<p key={i}>{log}</p>
))
}

</div>
)
}