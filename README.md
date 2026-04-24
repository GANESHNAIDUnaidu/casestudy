# HR Workflow Designer Module

## Overview

HR Workflow Designer is a prototype visual workflow builder developed using React and React Flow for designing, configuring, and simulating internal HR processes such as:

- Employee onboarding
- Leave approval workflows
- Document verification workflows
- Automated HR actions

The system allows HR administrators to drag and drop nodes, connect steps, configure node properties, validate workflows, and run a mock simulation of execution.

---

# Core Features

## Workflow Canvas
Built using React Flow to support:

- Drag and drop nodes
- Connect nodes using edges
- Edit workflow graph visually
- Delete nodes and connections
- Real-time graph updates
- Zoom controls
- Minimap support

---

## Supported Node Types

### Start Node
Entry point of workflow.

Configuration:
- Start title
- Metadata key-value pairs

---

### Task Node
Represents human tasks.

Configuration:
- Title
- Description
- Assignee
- Due Date
- Custom fields

Example:
Collect employee documents

---

### Approval Node
Approval-based decision step.

Configuration:
- Title
- Approver role
- Auto approval threshold

Example:
Manager approval

---

### Automated Step Node
System-triggered action.

Configuration:
- Action selection from API
- Dynamic parameters

Examples:
- Send Email
- Generate Document

---

### End Node
Workflow completion node.

Configuration:
- End message
- Summary flag

---

# Technology Stack

## Frontend

### React
Used for component-based UI architecture.

Purpose:
- Build modular components
- Manage dynamic interactions
- Handle state-driven rendering

---

### TypeScript
Used for type safety.

Purpose:
- Strong typing
- Interface definitions
- Safer node and workflow models

---

### React Flow
Used as graph engine.

Provides:
- Node management
- Edge connections
- Custom nodes
- Canvas rendering
- Workflow graph structure

---

### TailwindCSS
Used for styling.

Provides:
- Utility-based styling
- Rapid UI development
- Responsive layouts

---

## State Management

### Zustand
Used for workflow graph state.

Stores:
- Nodes
- Edges
- Selected node
- Node updates

Why chosen:
- Lightweight
- Less boilerplate than Redux
- Efficient for graph state

---

## Form Management

### React Hook Form
Used for dynamic node forms.

Provides:
- Controlled forms
- Validation support
- Dynamic fields
- Form state management

---

## API Layer

### Mock API / MSW / Local Mock Service
Used for simulating backend services.

Endpoints:

GET /automations

Returns:

- Send Email
- Generate Document

POST /simulate

Accepts:
Serialized workflow graph

Returns:
Execution steps log

---

## Development Tools

- Vite
- npm
- Git
- GitHub
- VS Code

---

# Architecture

## Folder Structure

```bash
src/
├── components/
├── nodes/
├── forms/
├── hooks/
├── api/
├── store/
└── types/
```

---

## Component Separation

### Components Layer
Contains:
- Workflow Canvas
- Sidebar
- Node Editor Panel
- Sandbox Panel

---

### Nodes Layer
Contains reusable custom node components.

Examples:

- StartNode
- TaskNode
- ApprovalNode

---

### Forms Layer
Contains node configuration forms.

Each node has isolated form logic.

---

### API Layer
Contains:

- automationApi
- simulationApi

Separates data layer from UI.

---

### Store Layer
Contains global workflow state.

---

# Workflow Validation Rules

Implemented validations:

- Only one Start Node allowed
- Nodes cannot remain disconnected
- Missing connections detected
- Basic cycle detection
- End node must terminate workflow

---

# Workflow Simulation

Workflow can be serialized into JSON.

Example:

```json
{
 "nodes":[
  {"type":"start"},
  {"type":"task"},
  {"type":"approval"},
  {"type":"automation"},
  {"type":"end"}
 ]
}
```

Simulation Output:

- Start Triggered
- Task Executed
- Approval Granted
- Automated Action Executed
- Workflow Completed

---

# Design Decisions

## Why React Flow
Chosen because:

- Native graph model
- Scalable architecture
- Custom node support
- Built-in controls

---

## Why Zustand
Chosen because:

- Minimal boilerplate
- Simpler than Redux
- Efficient updates

---

## Why Mock APIs
Chosen to simulate backend logic while keeping prototype frontend-focused.

---

# Scalability

System supports extension for:

- Escalation nodes
- Conditional branches
- Role routing
- Workflow templates
- Version history

New nodes can be added without changing core architecture.

---

# Completed Scope

Implemented:

- Workflow builder
- Dynamic node forms
- Mock APIs
- Simulation sandbox
- Validation logic

---

# Future Improvements

With more time:

- Auto layout (Dagre)
- Undo / Redo
- Persistent backend
- Workflow import/export
- Role based access
- Visual validation badges

---

# Assumptions

- Authentication excluded per case study
- Persistence mocked
- Focus prioritized architecture over pixel-perfect UI

---

# Installation

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:5173
```

---

# Repository

GitHub:
https://github.com/GANESHNAIDUnaidu/casestudy
