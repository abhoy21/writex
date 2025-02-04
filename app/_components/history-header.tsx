export default function HistoryHeader(): React.JSX.Element {
  return (
    <div className="p-10 mb-4 bg-gradient-to-br from-[#181818] via-neutral-950 to-[#181818] flex flex-col items-center justify-center text-supernova-200 rounded-xl shadow-supernova-700/45 shadow-sm">
      <h1 className="text-3xl font-montserrat">History</h1>
      <p className="text-supernova-500 mt-2">View past generated contents!</p>
    </div>
  );
}
