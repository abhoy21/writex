"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { getContentPreview, getWordCount } from "@/lib/utils/markdown";

import { deleteContent } from "@/actions/content";
import { toast } from "sonner";
import templateData from "@/temlates/templates";

interface Content {
  id: string;
  template: string;
  response: string;
  createdAt: Date;
}

interface HistoryTableProps {
  content: Content[];
}

export function HistoryTable({ content }: HistoryTableProps) {
  const router = useRouter();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    setIsDeleting(true);
    try {
      await deleteContent(deleteId);
      toast.success("Content deleted successfully");
      setDeleteId(null);
    } catch (error) {
      console.error("Error deleting content:", error);
      toast.error("Failed to delete content");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[60px] font-semibold">Sl No.</TableHead>
              <TableHead className="w-[150px] font-semibold">
                Template
              </TableHead>
              <TableHead className="font-semibold">Content</TableHead>
              <TableHead className="w-[100px] font-semibold">Words</TableHead>
              <TableHead className="w-[120px] font-semibold">Date</TableHead>
              <TableHead className="w-[100px] text-center font-semibold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.map((item, index) => (
              <TableRow
                key={item.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <TableCell className="font-medium text-muted-foreground">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium capitalize">
                  {item.template.replace(/-/g, " ")}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {getContentPreview(item.response)}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {getWordCount(item.response)}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {formatDate(item.createdAt)}
                </TableCell>
                <TableCell>
                  <TooltipProvider>
                    <div className="flex items-center justify-center gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => {
                              const template = templateData.find(
                                (t) => t.name === item.template
                              );
                              if (template) {
                                router.push(
                                  `/dashboard/${template.slug}?contentId=${item.id}`
                                );
                              }
                            }}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit content</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors"
                            onClick={() => setDeleteId(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete content</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Content</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this content? This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
