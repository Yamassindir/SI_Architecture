import { FiGrid, FiSettings, FiDatabase } from 'react-icons/fi';
import { useDFDStore } from '../../stores/useDFDStore';

export const Sidebar = () => {
  const { diagrams, loadDiagram } = useDFDStore();

  return (
    <aside className="w-64 bg-gray-100 p-4 h-full">
      <nav>
        <ul className="space-y-2">
          <li>
            <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <FiGrid />
              <span>Nouveau projet</span>
            </button>
          </li>
          <li className="mt-6">
            <h3 className="text-xs uppercase text-gray-500 mb-2">Projets récents</h3>
            <ul className="space-y-1">
              {diagrams.map((diagram) => (
                <li key={diagram.id}>
                  <button
                    onClick={() => loadDiagram(diagram)}
                    className="w-full text-left p-2 hover:bg-gray-200 rounded truncate"
                  >
                    {diagram.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-6 border-t pt-4">
            <button className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-200 rounded">
              <FiSettings />
              <span>Paramètres</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};