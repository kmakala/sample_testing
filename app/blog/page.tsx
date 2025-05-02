import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Our Blog</h1>
        <p className="text-lg text-muted-foreground">
          Stay up to date with the latest news, tutorials, and insights from our team.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Coming Soon!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We&apos;re working hard to bring you engaging and informative blog content. 
              Check back soon for updates!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}