"use client";
import { Template } from "@/types/type";
import { useEffect, useState } from "react";
import templateData from "../(data)/templates";
import TemplateCard from "./template-card";

export default function DashboardTemplate({
  searchTerm,
}: {
  searchTerm: string;
}): React.JSX.Element {
  const [templateList, setTemplateList] = useState<Template[]>([]);

  useEffect(() => {
    if (searchTerm) {
      const filterDate = templateData.filter((item: Template) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setTemplateList(filterDate);
    } else {
      setTemplateList(templateData);
    }
  }, [searchTerm]);

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 mt-8 p-8 cursor-pointer'>
      {templateList.map((item: Template, index: number) => (
        <TemplateCard key={index} item={item} />
      ))}
    </div>
  );
}
