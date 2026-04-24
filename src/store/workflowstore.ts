import {create} from 'zustand';
import {Node,Edge} from 'reactflow';

interface Store {
 nodes:Node[];
 edges:Edge[];
 selectedNode:any;

 setNodes:(n:Node[])=>void;
 setEdges:(e:Edge[])=>void;
 setSelectedNode:(n:any)=>void;
 updateNodeData:(id:string,data:any)=>void;
}

export const useWorkflowStore=create<Store>((set)=>(
{
nodes:[],
edges:[],
selectedNode:null,

setNodes:(nodes)=>set({nodes}),
setEdges:(edges)=>set({edges}),
setSelectedNode:(selectedNode)=>set({selectedNode}),

updateNodeData:(id,data)=>
set(state=>({
 nodes:state.nodes.map(node=>
node.id===id
?{...node,data:{...node.data,...data}}
:node)
}))
}
));
