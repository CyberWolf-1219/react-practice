function GraphColumn({ height }: { height: number }) {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-end`}>
      <div className="w-full text-center">{height}</div>
      <div
        className={`w-full bg-accent rounded-t-md`}
        style={{ height: `${height}%` }}
      ></div>
    </div>
  );
}

export default GraphColumn;
