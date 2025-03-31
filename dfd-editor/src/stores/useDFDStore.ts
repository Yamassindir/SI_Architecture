import { create } from 'zustand';
import { DFDDiagram, DFDNode, DFDEdge } from '../types/dfd';

type DFDStore = {
  currentDiagram: DFDDiagram | null;
  nodes: DFDNode[];
  edges: DFDEdge[];
  setNodes: (nodes: DFDNode[]) => void;
  setEdges: (edges: DFDEdge[]) => void;
  loadDiagram: (diagram: DFDDiagram) => void;
};

export const useDFDStore = create<DFDStore>((set) => ({
  currentDiagram: null,
  nodes: [],
  edges: [],
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  loadDiagram: (diagram) => 
    set({ currentDiagram: diagram, nodes: diagram.nodes, edges: diagram.edges }),
}));