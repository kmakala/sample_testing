import { DivideIcon as LucideIcon, Search, BookOpen, Award, BarChart2 } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "Find the Right Course",
    description: "Browse our catalog of professional courses to find the perfect match for your goals and interests."
  },
  {
    icon: BookOpen,
    title: "Learn at Your Own Pace",
    description: "Access course content anytime, anywhere. Learn on your schedule with lifetime access to course materials."
  },
  {
    icon: Award,
    title: "Earn a Certificate",
    description: "Complete assignments, quizzes, and projects to earn a verified certificate of completion."
  },
  {
    icon: BarChart2,
    title: "Advance Your Career",
    description: "Apply your new skills to advance your career, start a new project, or launch your own business."
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            How EduVista Works
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Our platform makes online learning simple, effective, and accessible. Here's how you can get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="mt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}