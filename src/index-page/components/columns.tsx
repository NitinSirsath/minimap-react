const Columns = ({ stageName }: { stageName: string }) => {
  return (
    <div className="w-[300px] flex-shrink-0 rounded-sm h-[80dvh] border shadow-2xs">
      <h1 className="text-accent-foreground p-4 mb-4 bg-amber-100 shadow-2xs">
        {stageName}
      </h1>
      <div className="bg-accent p-1">
        <p className="p-4 border">{stageName} : content</p>
        <p className="p-4 border">{stageName} : content</p>
        <p className="p-4 border">{stageName} : content</p>
        <p className="p-4 border">{stageName} : content</p>
      </div>
    </div>
  );
};

export default Columns;
