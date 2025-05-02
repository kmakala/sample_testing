"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to our platform. These terms and conditions outline the rules and regulations for the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Maintain the confidentiality of your account</li>
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
              <p className="text-gray-600">
                Your use of our platform is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Modifications</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We do so by posting modified terms on this platform. Your continued use of the platform means you accept any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms and Conditions, please contact us through our support channels.
              </p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}