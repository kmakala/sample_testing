import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heading1Icon } from 'lucide-react'

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex items-center gap-2 mb-8">
        <Heading1Icon className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold">Accessibility Statement</h1>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Commitment to Accessibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user
              experience for everyone, and applying the relevant accessibility standards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conformance Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve
              accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <p className="text-muted-foreground">
              Our website strives to conform to WCAG 2.1 level AA standards. We monitor the website regularly to maintain this
              and are working to address any current accessibility gaps.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              If you encounter any accessibility barriers on our website, please contact us. We welcome your feedback and will
              strive to address any concerns in a timely manner.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}