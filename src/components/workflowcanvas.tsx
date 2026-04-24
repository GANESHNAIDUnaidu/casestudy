import ReactFlow,
{
addEdge,
Controls,
MiniMap,
Background,
useNodesState,
useEdgesState
}
from 'reactflow';

import 'reactflow/dist/style.css';

import {
StartNode,
TaskNode,
ApprovalNode,
AutomationNode,
EndNode
} from '../nodes';

const nodeTypes={
start:StartNode,
task:TaskNode,
approval:ApprovalNode,
automation:AutomationNode,
end:EndNode
};

export default function WorkflowCanvas(){

const [nodes,setNodes,onNodesChange]=useNodesState([]);
const [edges,setEdges,onEdgesChange]=useEdgesState([]);

const onConnect=(params:any)=>{
setEdges((eds)=>addEdge(params,eds));
}

const onDrop=(event:any)=>{
const type=event.dataTransfer.getData(
'application/reactflow'
);

const node={
id:Date.now().toString(),
type,
position:{x:200,y:100},
data:{title:type}
};

setNodes(nds=>nds.concat(node));
}

return(
<div className='h-screen flex-1'>
<ReactFlow
nodes={nodes}
edges={edges}
nodeTypes={nodeTypes}
onNodesChange={onNodesChange}
onEdgesChange={onEdgesChange}
onConnect={onConnect}
onDrop={onDrop}
onDragOver={(e)=>e.preventDefault()}
fitView>
<Controls/>
<MiniMap/>
<Background/>
</ReactFlow>
</div>
)
}