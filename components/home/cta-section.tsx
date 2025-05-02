import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/85">
            Join our community of learners and instructors today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/courses">
                <Users className="mr-2 h-5 w-5" />
                Join as a Student
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/teach">
                <GraduationCap className="mr-2 h-5 w-5" />
                Become an Instructor
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 mb-4">
              Trusted by companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-primary-foreground/90 font-bold text-xl">Google</div>
              <div className="text-primary-foreground/90 font-bold text-xl">Microsoft</div>
              <div className="text-primary-foreground/90 font-bold text-xl">Amazon</div>
              <div className="text-primary-foreground/90 font-bold text-xl">Meta</div>
              <div className="text-primary-foreground/90 font-bold text-xl">IBM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}