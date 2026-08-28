import SidebarButton from './SidebarButton';

const Sidebar = () => {
  return (
    <div className="bg-whitetext-xl h-screen w-72">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p>
          Um simples{' '}
          <span className="text-[#00ADB5]">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col space-y-2 px-2">
        <SidebarButton variant="unselected">Início</SidebarButton>
        <SidebarButton variant="selected">Minhas Tarefas</SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
