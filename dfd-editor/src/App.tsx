import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DFDCanvas } from './components/DFDEditor/Canvas';
import { useDFDStore } from './stores/useDFDStore';
import { fetchDiagrams } from './api/mockApi';
import { AppMenu } from './components/AppMenu';
import { EditorToolbar } from './components/EditorToolbar';
import { Layout } from './components/Layout/Layout';

function App() {
  const { data: diagrams } = useQuery({
    queryKey: ['diagrams'],
    queryFn: fetchDiagrams,
  });

  const { nodes, edges, setNodes, loadDiagram } = useDFDStore();

  useEffect(() => {
    if (diagrams?.[0]) loadDiagram(diagrams[0]);
  }, [diagrams]);

  return (
    <div className="app">
      <Layout>
        <AppMenu />
        <EditorToolbar />
        <DFDCanvas 
          nodes={nodes} 
          edges={edges} 
          onNodesChange={(changes) => {
            setNodes(changes.apply(nodes));
          }} 
      />
      </Layout>
    </div>
  );
}

export default App;