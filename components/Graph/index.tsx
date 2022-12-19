import GraphColumn from "../GraphColumn";

function Graph() {
  return (
    <div className="w-full h-[500px] grid grid-cols-6 grid-rows-6 text-white font-semibold">
      <div className="col-start-1 col-end-2 row-span-5 flex flex-col w-full h-full items-center justify-end gap-[60px] border-r-2">
        <span>100</span>
        <span>75</span>
        <span>50</span>
        <span>25</span>
        <span>0</span>
      </div>
      <div className="col-start-2 col-end-7 row-span-5 w-full h-full flex flex-row items-center justify-center gap-2">
        <GraphColumn height={10} />
        <GraphColumn height={15} />
        <GraphColumn height={37} />
        <GraphColumn height={40} />
        <GraphColumn height={50} />
        <GraphColumn height={60} />
        <GraphColumn height={70} />
        <GraphColumn height={80} />
        <GraphColumn height={90} />
        <GraphColumn height={100} />
      </div>
      <div className="col-start-1 col-end-2"></div>
      <div className="col-start-2 col-end-7 w-full h-full flex flex-row items-center justify-evenly gap-6 border-t-2">
        <span>2018</span>
        <span>2020</span>
        <span>2022</span>
        <span>2024</span>
        <span>2026</span>
      </div>
    </div>
  );
}

export default Graph;
