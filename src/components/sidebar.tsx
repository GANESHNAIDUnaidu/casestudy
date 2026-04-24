const nodes=[
    "start",
    "task",
    "approval",
    "automation",
    "end"
    ]
    
    export default function Sidebar(){
    
    const onDragStart=(e:any,type:string)=>{
     e.dataTransfer.setData(
    'application/reactflow',type
    )
    }
    
    return(
    <div className='p-4 border-r'>
    {nodes.map(n=>(
    <div
    key={n}
    draggable
    onDragStart={(e)=>onDragStart(e,n)}
    className='p-3 bg-gray-100 rounded mb-2 cursor-move'>
    {n}
    </div>
    ))}
    </div>
    )
    }