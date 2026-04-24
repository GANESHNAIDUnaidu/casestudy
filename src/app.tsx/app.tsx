import Sidebar from './components/Sidebar';
import WorkflowCanvas from './components/WorkflowCanvas';
import NodeEditorPanel from './components/NodeEditorPanel';
import SandboxPanel from './components/SandboxPanel';

export default function App(){
return(
<div className='flex'>

<Sidebar/>
<WorkflowCanvas/>
<NodeEditorPanel/>
<SandboxPanel/>

</div>
)
}