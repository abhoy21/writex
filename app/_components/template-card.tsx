import Image from "next/image";
import { Template } from "./dashboard-template";

export default function TemplateCard({
  item,
}: {
  item: Template;
}): React.JSX.Element {
  return (
    <div className='p-4 rounded-xl flex flex-col gap-4 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-malachite-500/25 hover:scale-105 transition-transform duration-300 ease-in-out'>
      <Image src={item.icon} alt={item.name} width={64} height={64} />
      <h2 className='font-montserrat text-base text-malachite-200'>
        {item.name}
      </h2>
      <p className='text-malachite-50 text-sm'>{item.desc}</p>
    </div>
  );
}
