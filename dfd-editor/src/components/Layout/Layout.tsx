import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom'; // Ou props.children si vous n'utilisez pas React Router

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-white">
          <Outlet /> {/* Ou props.children */}
        </main>
      </div>
    </div>
  );
};