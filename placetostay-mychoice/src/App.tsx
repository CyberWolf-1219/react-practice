function App() {
  return (
    <>
      <div className="fixed -left-full w-full h-screen p-4 flex flex-col items-center justify-start gap-4 bg-white text-gray-700">
        <h2 className="font-bold text-lg">
          Find Exactly What You Are Looking For
        </h2>
        <form
          action=""
          className="w-full h-full flex flex-col items-start justify-start gap-4"
        >
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="room_count">Rooms: </label>
            <input type="number" name="room_count" id="room_count" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="bath_room_count">Bath Rooms: </label>
            <input type="number" name="bath_room_count" id="bath_room_count" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <div className="w-full flex flex-row items-center gap-2">
              <label htmlFor="min_price" className="flex-1">
                Min. Price:{" "}
              </label>
              <label htmlFor="max_price" className="flex-1">
                Max Price:{" "}
              </label>
            </div>
            <div className="w-full flex flex-row items-center gap-2">
              <input
                type="number"
                name="min_price"
                id="min_price"
                className="w-[50%]"
              />
              <input
                type="number"
                name="max_price"
                id="max_price"
                className="w-[50%]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <input type="submit" value="Search" />
          </div>
        </form>
      </div>
      <div className="fixed -right-full w-full h-screen p-4 flex flex-col items-start justify-start gap-2 bg-white opacity-80">
        <input type="text" placeholder="Country" className="w-full" />
        <input type="text" placeholder="State" className="w-full" />
        <input type="text" placeholder="City" className="w-full" />
        <input type="text" placeholder="Something" className="w-full" />
      </div>
      <div></div>
    </>
  );
}

export default App;
