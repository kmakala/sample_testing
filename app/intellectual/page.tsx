import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Copyright, Lightbulb, FileText } from "lucide-react";

export const metadata = {
  title: "Intellectual Property Policy | UpSkillZone",
  description: "Our intellectual property policy and guidelines for using UpSkillZone content",
};

export default function IntellectualPropertyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Intellectual Property Policy</h1>
          <p className="text-muted-foreground text-lg">
            Learn about our intellectual property rights and content usage guidelines
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Copyright className="h-6 w-6 text-primary" />
              <CardTitle>Copyright Protection</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              All content on UpSkillZone, including but not limited to course materials, videos, 
              text, graphics, and user interface elements, is protected by copyright laws and 
              is the exclusive property of UpSkillZone and/or its content creators.
            </p>
            <p>
              Users may not copy, reproduce, distribute, transmit, display, sell, license, or 
              otherwise exploit any content from our platform for any commercial purpose without 
              prior written consent from UpSkillZone.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <CardTitle>Trademark Rights</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The UpSkillZone name, logo, and any other trademarks, service marks, or trade names 
              used by UpSkillZone are owned by us and may not be used without our prior written permission.
            </p>
            <p>
              This includes using our trademarks in meta tags, search terms, source code, or other 
              means to direct or influence traffic to any website.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <CardTitle>Instructor Content Rights</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Instructors retain intellectual property rights to their course content while granting 
              UpSkillZone a license to host and make the content available to students.
            </p>
            <p>
              Students are granted a limited, non-exclusive, non-transferable license to access and 
              use the course content for personal, non-commercial purposes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle>Content Usage Guidelines</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Permitted uses of course content:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Viewing and accessing content for personal learning</li>
                <li>Downloading course materials for offline viewing</li>
                <li>Taking notes and completing course assignments</li>
                <li>Participating in course discussions</li>
              </ul>

              <p>Prohibited uses of course content:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sharing account access with others</li>
                <li>Redistributing or reselling course materials</li>
                <li>Creating derivative works without permission</li>
                <li>Using content for commercial purposes</li>
                <li>Posting course materials on other platforms</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
          <p>
            For questions about our intellectual property policy, please contact our legal team at{" "}
            <a href="mailto:kumar@upskillzone.com" className="text-primary hover:underline">
              kumar@upskillzone.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}