// Définition complète et cohérente avec le reste du code
export type NodeTypes = 'process' | 'datastore' | 'actor';

export type DFDNode = {
    id: string;
    type: 'process' | 'datastore' | 'actor';
    position: { x: number; y: number };
    data: { label: string };
};

export type DFDEdge = {
    id: string;
    source: string;
    target: string;
    label?: string;
};

export type DFDDiagram = {
    id: string;
    name: string;
    nodes: DFDNode[];
    edges: DFDEdge[];
    createdAt: Date;
};