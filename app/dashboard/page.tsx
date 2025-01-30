import DashboardSearchSection from "../_components/dashboard-search-section";
import DashboardTemplate from "../_components/dashboard-template";

export default function DashboardPage(): React.JSX.Element {
  return (
    <div>
      <div className='px-8 py-4'>
        <DashboardSearchSection />
      </div>
      <DashboardTemplate />
    </div>
  );
}
