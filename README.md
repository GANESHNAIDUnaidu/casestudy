# HR Workflow Designer

A React + React Flow prototype for designing and testing HR workflows such as onboarding, leave approvals, and document verification.

## Features

- Drag-and-drop workflow canvas
- Custom workflow nodes:
  - Start Node
  - Task Node
  - Approval Node
  - Automated Step Node
  - End Node

- Connect nodes with edges
- Dynamic node configuration forms
- Mock API integration
- Workflow simulation sandbox
- Basic workflow validation

## Tech Stack

- React
- TypeScript
- React Flow
- Zustand
- React Hook Form
- TailwindCSS
- Mock APIs

## Architecture

Project is structured into:

- `components/` → Canvas, Sidebar, Node Editor, Sandbox
- `nodes/` → Custom React Flow nodes
- `forms/` → Dynamic configuration forms
- `api/` → Mock automation and simulation APIs
- `hooks/` → Validation and simulation logic
- `store/` → Global workflow state

## Design Decisions

- Zustand used for lightweight graph state management.
- React Flow used for scalable node/edge architecture.
- Modular form structure allows adding new node types easily.
- Mock APIs simulate backend workflows without persistence.

## Validation Rules

- One Start Node only
- Nodes must be connected
- Detect missing links
- Basic cycle validation

## Sample Workflow

Start  
→ Collect Documents  
→ Manager Approval  
→ Generate Offer Letter  
→ End

## How to Run

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:5173
```

## Completed

- Workflow canvas
- Custom nodes
- Dynamic forms
- Simulation panel
- Mock APIs
- Validation

## Future Improvements

- Auto-layout
- Undo/Redo
- Workflow import/export
- Persistent backend storage

## Assumptions

- Authentication not included (per case study)
- Backend persistence mocked
- Focus placed on architectural clarity over UI polish
