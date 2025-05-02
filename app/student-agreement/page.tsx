import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentAgreement() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Student Agreement</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
          <p className="mb-4">
            This Student Agreement ("Agreement") outlines the terms and conditions between the student and our learning platform. 
            Please read this agreement carefully before enrolling in any courses.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Course Access</h2>
          <p className="mb-4">
            Upon enrollment and payment, students will receive access to their selected course materials. 
            Access duration may vary depending on the specific course package selected.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Student Conduct</h2>
          <p className="mb-4">
            Students are expected to maintain professional conduct throughout their learning journey. 
            This includes respecting intellectual property rights and following our community guidelines.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Payment Terms</h2>
          <p className="mb-4">
            All payments are processed securely through our platform. Refunds are subject to our refund policy 
            and must be requested within the specified timeframe.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Privacy Policy</h2>
          <p className="mb-4">
            We are committed to protecting your privacy. Your personal information will be handled in accordance 
            with our privacy policy and applicable data protection laws.
          </p>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}