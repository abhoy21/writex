export default function PlansPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] p-4">
      <div className="w-full max-w-2xl">
        <div className="border border-border rounded-lg p-8 md:p-12 bg-card">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Plans & Pricing
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
              Choose the perfect plan for your content creation needs. Upgrade to unlock more features and generate unlimited content.
            </p>
            <div className="pt-6 mt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
