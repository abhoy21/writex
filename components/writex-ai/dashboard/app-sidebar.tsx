"use client"

import * as React from "react"
import { Search, ChevronDown, LayoutTemplate, Star, Clock, LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { Session } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import templateData from "@/temlates/templates"
import Image from "next/image"
import { useRouter } from "next/navigation"


// Group templates by category
const groupedTemplates = templateData.reduce((acc, template) => {
  const category = template.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(template);
  return acc;
}, {} as Record<string, typeof templateData>);

const categories = Object.keys(groupedTemplates);

interface AppSidebarProps {
  session: Session | null
}

export function AppSidebar({ session }: AppSidebarProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  const [expandedCategories, setExpandedCategories] = React.useState<string[]>(categories)
  const [selectedTool, setSelectedTool] = React.useState<string | null>(null)

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((name) => name !== categoryName) : [...prev, categoryName],
    )
  }

  const filteredCategories = React.useMemo(() => {
    if (!searchQuery) return groupedTemplates

    const filtered: Record<string, typeof templateData> = {}
    
    Object.entries(groupedTemplates).forEach(([category, templates]) => {
      const matchingTemplates = templates.filter((template) => 
        template.name!.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.desc!.toLowerCase().includes(searchQuery.toLowerCase())
      )
      
      if (matchingTemplates.length > 0) {
        filtered[category] = matchingTemplates
      }
    })

    return filtered
  }, [searchQuery])

  const onToolSelect = (slug: string) => {
    setSelectedTool(slug)
    console.log("Selected tool:", slug)
    router.push(`/dashboard/${slug}`)
  }

  const userEmail = session?.user?.email || ""
  const userInitial = userEmail.charAt(0).toUpperCase()

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-smooth hover:scale-110">
            <LayoutTemplate className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-semibold">WriteX-AI</h2>
            <p className="text-[10px] sm:text-xs text-muted-foreground">AI-powered writing tools</p>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2 sm:top-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground transition-colors" />
          <Input
            placeholder="Search templates..."
            className="pl-7 sm:pl-8 text-xs sm:text-sm h-8 sm:h-9 transition-smooth focus:ring-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {Object.entries(filteredCategories).map(([category, templates]) => {
          const isExpanded = expandedCategories.includes(category)

          return (
            <SidebarGroup key={category}>
              <SidebarGroupLabel
                className="flex items-center gap-2 cursor-pointer transition-smooth hover:text-foreground text-xs sm:text-sm capitalize"
                onClick={() => toggleCategory(category)}
              >
                <span className="flex-1">{category}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
              </SidebarGroupLabel>
              {isExpanded && (
                <SidebarGroupContent className="animate-in">
                  <SidebarMenu>
                    {templates.map((template) => (
                      <SidebarMenuItem key={template.slug}>
                        <SidebarMenuButton
                          onClick={() => onToolSelect(template.slug)}
                          isActive={selectedTool === template.slug}
                          className="transition-smooth hover:translate-x-1 text-xs sm:text-sm h-auto py-2"
                        >
                          {template.icon && (
                            <Image 
                              src={template.icon} 
                              alt={template.name} 
                              height={100}
                              width={100}
                              className="w-4 h-4 mr-2 object-contain"
                            />
                          )}
                          <span className="truncate">{template.name!}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          )
        })}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2 mb-2">
           <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-default">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-gray-200 text-foreground text-xs">
                      {userInitial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium truncate max-w-[100px]">
                      {session?.user?.email!.split("@")[0] || "User"}
                    </span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{userEmail}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-muted-foreground hover:text-destructive transition-colors p-2 rounded-md hover:bg-muted"
            title="Log out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
  
      </SidebarFooter>
    </Sidebar>
  )
}
