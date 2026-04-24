export const simulateWorkflow=
async(workflow:any)=>{

return Promise.resolve({
data:{
steps:[
"Start Triggered",
"Collect Documents Task",
"Manager Approval",
"Send Email Automated Action",
"Workflow Completed"
]
}
})

}