import HistoryHeader from "@/app/_components/history-header";
import HistoryTable from "@/app/_components/history-table";

export default function History(): React.JSX.Element {
  return (
    <div className="p-4">
      <HistoryHeader />
      <HistoryTable />
    </div>
  );
}
