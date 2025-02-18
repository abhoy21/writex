import React from "react";

export default function DashboardHeader(): React.JSX.Element {
  return (
    <div className="p-4 border-b border-supernova-900/45 shadow-sm shadow-supernova-900/45 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="hidden md:block text-2xl font-semibold text-supernova-200">
          Dashboard
        </h1>
      </div>
      <div>
        <h2 className="bg-gradient-to-br from-supernova-200 to-supernova-500 p-2 text-supernova-800 rounded-lg text-sm font-semibold">
          Join the community today! 🚀
        </h2>
      </div>
    </div>
  );
}
