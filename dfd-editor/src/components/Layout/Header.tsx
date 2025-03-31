import { FiSave, FiDownload, FiUser } from 'react-icons/fi';

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">DFD Editor</h1>
      </div>
      <div className="flex space-x-4">
        <button className="flex items-center space-x-1 hover:bg-gray-700 p-2 rounded">
          <FiSave />
          <span>Sauvegarder</span>
        </button>
        <button className="flex items-center space-x-1 hover:bg-gray-700 p-2 rounded">
          <FiUser />
          <span>Mon compte</span>
        </button>
      </div>
    </header>
  );
};