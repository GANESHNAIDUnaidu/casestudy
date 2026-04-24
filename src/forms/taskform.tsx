import {useForm} from 'react-hook-form';
import {useWorkflowStore} from '../store/workflowStore';

export default function TaskForm({node}){

const updateNodeData=
useWorkflowStore(s=>s.updateNodeData)

const {register,handleSubmit}=useForm({
defaultValues:node.data
})

const submit=(data:any)=>{
updateNodeData(node.id,data)
}

return(
<form onSubmit={handleSubmit(submit)}>

<input
placeholder='Title'
{...register('title')}
/>

<textarea
placeholder='Description'
{...register('description')}
/>

<input
placeholder='Assignee'
{...register('assignee')}
/>

<input
type='date'
{...register('dueDate')}
/>

<button>
Save
</button>

</form>
)
}