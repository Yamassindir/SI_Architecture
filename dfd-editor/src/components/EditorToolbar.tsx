import { useDFDStore } from '../stores/useDFDStore';
import { NodeTypes } from '../types/dfd';

export const EditorToolbar = () => {
  const { nodes, edges, setNodes, setEdges } = useDFDStore();

  const addNode = (type: NodeTypes) => {
    const newNode = {
      id: `node-${Date.now()}`,
      type,
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data: { label: `${type}-${nodes.length + 1}` },
    };
    setNodes([...nodes, newNode]);
  };

  const addEdge = (sourceId: string, targetId: string) => {
    if (!sourceId || !targetId) return;
    const newEdge = {
      id: `edge-${Date.now()}`,
      source: sourceId,
      target: targetId,
    };
    setEdges([...edges, newEdge]);
  };

  return (
    <div className="editor-toolbar">
      <button onClick={() => addNode('process')}>+ Processus</button>
      <button onClick={() => addNode('datastore')}>+ Stockage</button>
      <button onClick={() => addNode('actor')}>+ Acteur</button>
      <button 
        onClick={() => {
          if (nodes.length >= 2) addEdge(nodes[0].id, nodes[1].id);
        }}
      >
        Relier
      </button>
    </div>
  );
};