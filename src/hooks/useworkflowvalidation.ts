export function validateWorkflow(
    nodes,
    edges
    ){
    
    const errors=[];
    
    const startNodes=
    nodes.filter(
    n=>n.type==='start'
    )
    
    if(startNodes.length!==1){
    errors.push(
    'Only one start node allowed'
    )
    }
    
    nodes.forEach(node=>{
    
    const connected=
    edges.some(
    e=>
    e.source===node.id ||
    e.target===node.id
    )
    
    if(!connected && node.type!='start'){
    errors.push(
    `${node.id} disconnected`
    )
    }
    
    })
    
    return errors;
    }