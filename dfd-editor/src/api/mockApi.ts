import { DFDDiagram } from '../types/dfd';

const mockDiagrams: DFDDiagram[] = [
  {
    id: '1',
    name: 'Commande client',
    nodes: [
      { id: '1', type: 'process', position: { x: 100, y: 100 }, data: { label: 'Passer commande' } },
      { id: '2', type: 'datastore', position: { x: 400, y: 100 }, data: { label: 'Base clients' } },
    ],
    edges: [{ id: 'e1-2', source: '1', target: '2', label: 'Données client' }],
    createdAt: new Date(),
  },
];

export const fetchDiagrams = async (): Promise<DFDDiagram[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockDiagrams), 500));
};

export const saveDiagram = async (diagram: DFDDiagram): Promise<void> => {
  console.log('Mock save:', diagram);
  // Ajoutez ici la logique de mock pour la sauvegarde
};