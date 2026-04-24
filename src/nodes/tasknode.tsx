import {Handle,Position} from 'reactflow';

export default function TaskNode({data}:any){
return(
<div className='bg-white shadow p-3 rounded border'>
<Handle type='target' position={Position.Top}/>

<h4>{data.title}</h4>
<p>{data.assignee}</p>

<Handle type='source' position={Position.Bottom}/>
</div>
)
}