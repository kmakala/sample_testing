import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <ArrowUpRight className="h-6 w-6" />
              <span className="font-bold text-xl">UpSkillZone</span>
            </Link>
            <p className="max-w-xs mt-4 text-sm text-muted-foreground">
              Empowering learners worldwide with high-quality online education that's accessible to everyone.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link 
                href="https://facebook.com/upskillzone" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com/upskillzone" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://instagram.com/upskillzone" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com/company/upskillzone" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://youtube.com/c/upskillzone" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <p className="font-medium">Company</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">About us</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link>
              <Link href="/press" className="hover:text-foreground transition-colors">Press</Link>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            </nav>
          </div>
          
          <div>
            <p className="font-medium">Resources</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-muted-foreground">
              <Link href="/help" className="hover:text-foreground transition-colors">Help Center</Link>
              <Link href="/teach" className="hover:text-foreground transition-colors">Teach on UpSkillZone</Link>
              <Link href="/affiliate" className="hover:text-foreground transition-colors">Affiliate Program</Link>
              <Link href="/accessibility" className="hover:text-foreground transition-colors">Accessibility</Link>
              <Link href="/sitemap" className="hover:text-foreground transition-colors">Sitemap</Link>
            </nav>
          </div>
          
          <div>
            <p className="font-medium">Legal</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/cookie" className="hover:text-foreground transition-colors">Cookie Policy</Link>
              <Link href="/intellectual" className="hover:text-foreground transition-colors">Intellectual Property</Link>
              <Link href="/student-agreement" className="hover:text-foreground transition-colors">Student Agreement</Link>
            </nav>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t">
          <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between md:items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} UpSkillZone, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/cookie" className="hover:text-foreground transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}