export type NodeKind =
 | 'start'
 | 'task'
 | 'approval'
 | 'automation'
 | 'end';

export interface WorkflowNodeData {
 title?:string;
 description?:string;
 assignee?:string;
 dueDate?:string;
 approverRole?:string;
 threshold?:number;
 actionId?:string;
 actionParams?:Record<string,string>;
 metadata?:Record<string,string>;
 endMessage?:string;
 summary?:boolean;
}

export interface AutomationAction{
 id:string;
 label:string;
 params:string[];
}