import Link from 'next/link';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Code, BarChart3, BriefcaseBusiness, PenTool, Video, BookOpenCheck, Lightbulb, Globe } from 'lucide-react';

interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  courses: number;
  href: string;
}

const categoriesList: Category[] = [
  {
    title: "Web Development",
    description: "Learn to build websites and applications",
    icon: <Code className="h-8 w-8 text-primary" />,
    courses: 485,
    href: "/categories/web-development"
  },
  {
    title: "Data Science",
    description: "Analyze and visualize data, machine learning",
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    courses: 382,
    href: "/categories/data-science"
  },
  {
    title: "Business",
    description: "Marketing, finance, and entrepreneurship",
    icon: <BriefcaseBusiness className="h-8 w-8 text-primary" />,
    courses: 536,
    href: "/categories/business"
  },
  {
    title: "Design",
    description: "UI/UX, graphic design, and illustration",
    icon: <PenTool className="h-8 w-8 text-primary" />,
    courses: 324,
    href: "/categories/design"
  },
  {
    title: "Photography & Video",
    description: "Photo editing, videography, and production",
    icon: <Video className="h-8 w-8 text-primary" />,
    courses: 251,
    href: "/categories/photography-video"
  },
  {
    title: "Personal Development",
    description: "Leadership, productivity, and happiness",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    courses: 430,
    href: "/categories/personal-development"
  },
  {
    title: "Academic Learning",
    description: "Science, math, language, and more",
    icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
    courses: 328,
    href: "/categories/academic"
  },
  {
    title: "Languages",
    description: "Spanish, French, Japanese, and others",
    icon: <Globe className="h-8 w-8 text-primary" />,
    courses: 274,
    href: "/categories/languages"
  }
];

export function Categories() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Browse Top Categories
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore our diverse range of categories to find your perfect course
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoriesList.map((category) => (
            <Link key={category.title} href={category.href} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="mb-2">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    {category.title}
                  </CardTitle>
                  <CardDescription>
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {category.courses} courses
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}