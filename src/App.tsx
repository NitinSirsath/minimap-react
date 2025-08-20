import Minimap from "react-minimap";
import KanbanBoard from "./components/src/KanbanBoard";

function App() {
  const renderMinimapChild = ({ width, height, left, top, node }: any) => {
    const color = node.dataset.color || "#e0e0e0";
    return (
      <div
        style={{
          position: "absolute",
          width,
          height,
          left,
          top,
          backgroundColor: color,
          borderRadius: "2px",
        }}
      />
    );
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Vite + React Minimap Example</h1>
      </header>
      <main className="app-main-content">
        <Minimap
          selector=".kanban-column"
          className="kanban-container"
          childComponent={renderMinimapChild}
        >
          <KanbanBoard />
        </Minimap>
      </main>
    </div>
  );
}

export default App;
