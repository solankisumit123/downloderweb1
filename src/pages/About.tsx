import { Heart, Shield, Zap } from 'lucide-react';

export function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About VideoGrab</h1>
          <p className="text-xl text-gray-600">
            Making video downloading simple, fast, and accessible to everyone.
          </p>
        </div>

        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              VideoGrab was created to solve a simple problem: downloading videos from your favorite social media platforms shouldn't be complicated or require multiple tools. We built VideoGrab to be fast, free, and easy to use—no sign-ups, no ads, no complications.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Built VideoGrab</h2>
            <p className="text-lg text-gray-600 mb-4">
              We noticed that many content creators, marketers, and casual users needed a reliable way to download videos from multiple platforms. Existing solutions were either:
            </p>
            <ul className="space-y-2 text-lg text-gray-600 ml-4">
              <li>• Bloated with ads and tracking</li>
              <li>• Limited to one or two platforms</li>
              <li>• Required complicated setup processes</li>
              <li>• Added watermarks to videos</li>
              <li>• Stored personal data without consent</li>
            </ul>
            <p className="text-lg text-gray-600 mt-4">
              So we decided to build something better.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <Zap className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Speed</h3>
                <p className="text-gray-600">We optimize for performance. Downloads should be instant.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <Shield className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Privacy</h3>
                <p className="text-gray-600">Your data is yours. We don't track or store personal information.</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <Heart className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Simplicity</h3>
                <p className="text-gray-600">No complex setup. Just paste, click, and download.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology</h2>
            <p className="text-lg text-gray-600">
              VideoGrab uses modern web technologies and maintains relationships with multiple video hosting services to ensure reliable access to videos across platforms. We leverage advanced video extraction techniques while respecting content creators' rights and platform terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Creators</h2>
            <p className="text-lg text-gray-600">
              We understand the importance of content protection. VideoGrab is designed for personal use, and we encourage users to respect creators' intellectual property rights. If you're a creator concerned about your content being downloaded, please reach out to us for support options.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Ahead</h2>
            <p className="text-lg text-gray-600">
              We're constantly improving VideoGrab. Our roadmap includes support for more platforms, batch downloading, cloud storage integration, and more. We listen to our users and build features based on real needs.
            </p>
          </section>
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you. Whether it's feedback, feature requests, or just saying hello.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Get in Touch
          </button>
        </div>
      </div>
    </main>
  );
}
