import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { DFDNode, DFDEdge } from '../../types/dfd';

type DFDCanvasProps = {
  nodes: DFDNode[];
  edges: DFDEdge[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onNodesChange: (changes: any) => void;
};

export const DFDCanvas = ({ nodes, edges, onNodesChange }: DFDCanvasProps) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};