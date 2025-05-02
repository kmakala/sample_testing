import { Users, BookOpen, GraduationCap, Languages } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    value: "15M+",
    label: "Students Worldwide",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    value: "10K+",
    label: "Quality Courses",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    value: "2,500+",
    label: "Expert Instructors",
    icon: <GraduationCap className="h-6 w-6 text-primary" />
  },
  {
    value: "50+",
    label: "Languages Supported",
    icon: <Languages className="h-6 w-6 text-primary" />
  }
];

export function Stats() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            The Numbers Speak for Themselves
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Join millions of learners from around the world who are already benefiting from UpSkillZone&apos;s high-quality courses.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}