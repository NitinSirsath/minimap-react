import React from "react";

// Sample data for our columns
const columns = [
  { id: "todo", title: "To Do", color: "#3498db" },
  { id: "in-progress", title: "In Progress", color: "#f1c40f" },
  { id: "review", title: "In Review", color: "#9b59b6" },
  { id: "done", title: "Done", color: "#2ecc71" },
  { id: "archived", title: "Archived", color: "#95a5a6" },
  { id: "blocked", title: "Blocked", color: "#e74c3c" },
];

const KanbanBoard = () => {
  return (
    // This is the inner container that holds all the columns.
    // `w-max` allows it to grow horizontally as wide as its content.
    <div className="flex h-full w-max gap-4">
      {columns.map((column) => (
        <div
          key={column.id}
          // This class is the `selector` that the Minimap will track.
          className="kanban-column"
          // We pass the color via a data attribute for the minimap to read.
          data-color={column.color}
        >
          <h3 className="kanban-column-title">{column.title}</h3>
          {/* You would render your cards/tickets here */}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
