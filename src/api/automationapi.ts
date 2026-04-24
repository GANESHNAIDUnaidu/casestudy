import axios from 'axios';

export const getAutomations=async()=>{
return Promise.resolve({
data:[
{
id:'send_email',label:'Send Email',params:['to','subject']},
{
id:'generate_doc',label:'Generate Doc',params:['template','recipient']}
]
})
}
const [actions,setActions]=useState([])
const [selected,setSelected]=useState()

useEffect(()=>{
getAutomations().then(res=>
setActions(res.data)
)
},[])

<select onChange={(e)=>setSelected(e.target.value)}>
{
actions.map(a=>(
<option value={a.id}>
{a.label}
</option>
))
}
</select>

{
selected?.params?.map(p=>(
<input placeholder={p}/>
))
}