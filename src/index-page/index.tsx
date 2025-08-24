import Columns from "./components/columns";

const columnsData = [
  {
    stageName: "Initial Plans",
  },
  {
    stageName: "Business Analysis",
  },
  {
    stageName: "Design & Architecture",
  },
  {
    stageName: "Plan Scheduling",
  },
  {
    stageName: "Development Phase",
  },
  {
    stageName: "Testing Phase",
  },
  {
    stageName: "Release & Market",
  },
  {
    stageName: "Enhancements",
  },
];

const IndexPage = () => {
  return (
    <div>
      <h1 className="text-6xl text-blue-950 p-4 shadow-2xs w-full">Columns</h1>
      <div className="my-4 flex px-10 overflow-x-auto py-4 gap-4 items-center">
        {columnsData.map((stage, index) => {
          return <Columns stageName={stage.stageName} key={index} />;
        })}
      </div>
    </div>
  );
};

export default IndexPage;
