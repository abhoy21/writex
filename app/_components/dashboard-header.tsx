export default function DashboardHeader(): React.JSX.Element {
  return (
    <div className="p-2 border-b border-supernova-900/45 shadow-sm shadow-supernova-900/45 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-supernova-200">Dashboard</h1>
      </div>
      <div className="p-2">
        <h2 className="bg-gradient-to-br from-supernova-200 to-supernova-500 p-2 text-supernova-800 rounded-lg text-sm font-semibold">
          Join the community today! 🚀
        </h2>
      </div>
    </div>
  );
}
