import { auth } from "@/lib/auth/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  const userEmail = session?.user?.email || "";
  const userInitial = userEmail.charAt(0).toUpperCase();
  const userName = userEmail.split("@")[0] || "User";

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] p-4">
      <div className="w-full max-w-2xl">
        {/* Welcome Card */}
        <div className="border border-border rounded-lg p-8 md:p-12 bg-card">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6">
              {/* Avatar */}
              <Avatar className="h-20 w-20 md:h-24 md:w-24 border-2 border-border transition-transform duration-300 hover:scale-105">
                <AvatarFallback className="bg-primary text-primary-foreground text-3xl md:text-4xl font-semibold">
                  {userInitial}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Welcome Text */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground animate-in fade-in slide-in-from-bottom-3 duration-500 delay-75">
                Welcome back, {userName}!
              </h1>
              <p className="text-sm md:text-base text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
                {userEmail}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-8 animate-in fade-in duration-500 delay-150">
            <div className="border-t border-border" />
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-1 duration-500 delay-200">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
                <span>Select a template to get started</span>
                <ArrowRight className="h-5 w-5 text-primary" />
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                Choose from our collection of AI-powered writing tools in the sidebar to create amazing content in seconds
              </p>
            </div>

            {/* Motivational Tagline */}
            <div className="pt-6 mt-6 border-t border-border">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted border border-border">
                <p className="text-sm md:text-base font-medium text-foreground">
                  Let us handle all the work and let you save some time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Helper Text */}
        <div className="mt-6 text-center animate-in fade-in duration-500 delay-300">
          <p className="text-xs md:text-sm text-muted-foreground">
            💡 Tip: Use the search bar in the sidebar to quickly find templates
          </p>
        </div>
      </div>
    </div>
  );
}
