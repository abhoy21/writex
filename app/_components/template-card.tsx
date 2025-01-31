import { Template } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

export default function TemplateCard({
  item,
}: {
  item: Template;
}): React.JSX.Element {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className='p-4 rounded-xl flex flex-col gap-4 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border-l-8 border-supernova-500 hover:scale-105 transition-transform duration-300 ease-in-out'>
        <Image src={item.icon} alt={item.name} width={64} height={64} />
        <h2 className='font-montserrat text-base text-supernova-200'>
          {item.name}
        </h2>
        <p className='text-supernova-50 text-sm'>{item.desc}</p>
      </div>
    </Link>
  );
}
