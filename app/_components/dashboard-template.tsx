import templateData from "../(data)/templates";
import TemplateCard from "./template-card";

export interface Template {
  name: string;
  desc: string;
  icon: string;
  slug: string;
  aiPrompt: string;
  form: Form[];
}

interface Form {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

export default function DashboardTemplate(): React.JSX.Element {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 mt-8 p-8'>
      {templateData.map((item: Template, index: number) => (
        <TemplateCard key={index} item={item} />
      ))}
    </div>
  );
}
