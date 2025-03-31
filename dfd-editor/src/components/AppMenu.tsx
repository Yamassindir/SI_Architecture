import { useDFDStore } from '../stores/useDFDStore';
import { saveDiagram } from '../api/mockApi';

export const AppMenu = () => {
  const { currentDiagram } = useDFDStore();

  const handleExport = (format: 'json' | 'png') => {
    if (!currentDiagram) return;
    if (format === 'json') {
      const data = JSON.stringify(currentDiagram, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      downloadBlob(blob, `${currentDiagram.name}.json`);
    } else {
      // Utiliser html-to-image pour PNG (à installer)
      alert('Export PNG à implémenter');
    }
  };

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };

  return (
    <div className="app-menu">
      <button onClick={() => handleExport('json')}>Exporter en JSON</button>
      <button onClick={() => handleExport('png')}>Exporter en PNG</button>
      <button>Nouveau Projet</button>
    </div>
  );
};