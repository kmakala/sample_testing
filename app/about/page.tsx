import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Learning Platform',
  description: 'Learn more about our mission to provide high-quality education to everyone.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to our learning platform, where we believe that quality education should be accessible to everyone. 
            Our mission is to provide comprehensive, industry-relevant courses that help students achieve their career goals 
            and personal aspirations.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            We are dedicated to transforming education through technology, making it more accessible, engaging, and effective. 
            Our platform brings together expert instructors and motivated learners in an interactive online environment 
            designed for optimal learning outcomes.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">What Sets Us Apart</h2>
          <ul className="space-y-4">
            <li>
              <strong>Expert Instructors:</strong> Learn from industry professionals with real-world experience.
            </li>
            <li>
              <strong>Comprehensive Curriculum:</strong> Our courses cover both theoretical foundations and practical applications.
            </li>
            <li>
              <strong>Interactive Learning:</strong> Engage with hands-on projects, quizzes, and peer discussions.
            </li>
            <li>
              <strong>Flexible Learning:</strong> Study at your own pace with lifetime access to course materials.
            </li>
            <li>
              <strong>Community Support:</strong> Join a global community of learners and educators.
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li>
              <strong>Excellence:</strong> We maintain high standards in our course content and delivery.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously improve our platform and teaching methods.
            </li>
            <li>
              <strong>Inclusivity:</strong> We welcome learners from all backgrounds and skill levels.
            </li>
            <li>
              <strong>Impact:</strong> We measure our success by our students' achievements.
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Join Our Learning Community</h2>
          <p>
            Whether you're looking to start a new career, upgrade your skills, or explore a new hobby, 
            we have courses designed to help you succeed. Join our growing community of learners and 
            start your learning journey today.
          </p>
        </div>
      </div>
    </div>
  )
}