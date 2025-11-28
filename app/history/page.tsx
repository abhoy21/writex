import { auth } from "@/lib/auth/auth";
import { getUserContent } from "@/actions/content";
import { HistoryTable } from "@/components/history/history-table";

export default async function HistoryPage() {
  const session = await auth();
  
  if (!session || !session.user?.id) {
    return null;
  }

  const content = await getUserContent();

  // Empty state - no content generated yet
  if (content.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] p-4">
        <div className="w-full max-w-2xl">
          <div className="border border-border rounded-lg p-8 md:p-12 bg-card">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                History
              </h1>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                Your content generation history will appear here. Track all your previously generated content and access them anytime.
              </p>
              <div className="pt-6 mt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  No content generated yet. Start by selecting a template from the dashboard!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Table view - content exists
  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Content History
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          View and manage all your generated content
        </p>
      </div>
      <HistoryTable content={content} />
    </div>
  );
}
