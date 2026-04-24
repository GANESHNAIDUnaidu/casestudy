import TaskForm from '../forms/TaskForm';
import StartForm from '../forms/StartForm';
import ApprovalForm from '../forms/ApprovalForm';
import AutomationForm from '../forms/AutomationForm';
import EndForm from '../forms/EndForm';

export default function NodeEditor({node}){

if(!node) return null;

switch(node.type){
case 'start':
return <StartForm node={node}/>;

case 'task':
return <TaskForm node={node}/>;

case 'approval':
return <ApprovalForm node={node}/>;

case 'automation':
return <AutomationForm node={node}/>;

case 'end':
return <EndForm node={node}/>;

}
}