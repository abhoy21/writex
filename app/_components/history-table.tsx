"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { UpdateCreditUsageContext } from "../(context)/update-credit-usage";

interface ContentProps {
  id: string;
  topic: string;
  prompt: string;
  template: string;
  response: string;
  userId: string;
  createdAt: string;
}

export default function HistoryTable(): React.JSX.Element {
  const [data, setData] = useState<ContentProps[]>([]);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/content/get-contents");
        if (response.status === 200) {
          if (response.data.contents.length > 0) {
            setData(response.data.contents);
            setTotalPages(
              Math.ceil(response.data.contents.length / itemsPerPage)
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `/api/v1/content/delete-content/${id}`
      );
      if (response.status === 200) {
        setData(data.filter((content) => content.id !== id));
        setUpdateCreditUsage(Date.now());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = data.slice(firstIndex, lastIndex);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let lastPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (lastPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, lastPage - maxButtons + 1);
    }

    for (let i = startPage; i <= lastPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="p-4 md:p-10 bg-gradient-to-br from-[#181818] via-neutral-950 to-[#181818] flex-col items-center justify-center text-supernova-200 rounded-xl shadow-supernova-700/45 shadow-sm">
      <div className="w-full overflow-x-auto">
        <Table>
          <TableCaption>
            <div className="flex items-center justify-center mt-4 gap-2 cursor-pointer">
              <Button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                className="hover:bg-supernova-500 hover:text-supernova-950"
              >
                <ChevronLeft className="w-4 h-4 text-supernova-500 " />
              </Button>
              {getPageNumbers().map((number) => (
                <Button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  variant={currentPage === number ? "default" : "outline"}
                  size="sm"
                  className={
                    currentPage === number
                      ? "bg-supernova-500 text-supernova-950"
                      : ""
                  }
                >
                  {number}
                </Button>
              ))}

              <Button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
              >
                <ChevronRight className="w-4 h-4 text-supernova-500" />
              </Button>
            </div>
          </TableCaption>
          <TableHeader className="bg-supernova-500">
            <TableRow>
              <TableHead className="text-supernova-950 w-1/6">
                Content Id
              </TableHead>
              <TableHead className="text-supernova-950 w-1/4 md:w-1/5">
                Template
              </TableHead>

              <TableHead className="text-supernova-950 w-2/4 md:w-2/5">
                Response
              </TableHead>
              <TableHead className="text-supernova-950 w-2/4 md:w-2/5 text-center">
                Word Count
              </TableHead>
              <TableHead className="text-supernova-950 w-1/6 md:w-1/6 text-center ">
                Date Created
              </TableHead>
              <TableHead className="text-supernova-950 text-center w-1/6 md:w-1/6">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((content) => (
              <TableRow key={content.id}>
                <TableCell className="text-supernova-500 max-w-[50px] truncate">
                  {content.id}
                </TableCell>
                <TableCell className="text-supernova-500 min-w-[120px] max-w-[200px] truncate">
                  {content.template}
                </TableCell>

                <TableCell className="text-supernova-200 min-w-[200px] max-w-[400px]">
                  <div className="line-clamp-2 break-words">
                    {content.response}
                  </div>
                </TableCell>
                <TableCell className="text-supernova-500 max-w-[50px] text-center truncate">
                  {content.response.split(" ").length}
                </TableCell>
                <TableCell className="text-supernova-700 min-w-[100px] max-w-[150px] truncate text-center">
                  {content.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="text-supernova-950 min-w-[100px]">
                  <div className="flex items-center justify-end gap-2 hover:text-supernova-500">
                    <Button
                      onClick={() => {
                        handleDelete(content.id);
                      }}
                    >
                      <Trash2 className="w-4 h-4 text-red-500 " />
                      <span className="text-red-700">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
