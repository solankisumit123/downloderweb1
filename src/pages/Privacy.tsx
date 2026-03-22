export function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose max-w-none space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p>
              VideoGrab collects minimal information to provide our service:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>URLs you paste for video downloads</li>
              <li>General usage statistics (platforms accessed)</li>
              <li>Basic analytics data (page views, referrer)</li>
              <li>No personal information (email, name, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p>
              We use collected information solely to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide and improve our video downloading service</li>
              <li>Understand which platforms are most used</li>
              <li>Monitor service performance and reliability</li>
              <li>Prevent abuse and ensure service quality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Storage</h2>
            <p>
              Video URLs and download metadata are stored temporarily and automatically deleted after 30 days. We do not store actual video files or personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p>
              We use trusted services for analytics and hosting. These services have their own privacy policies, which we encourage you to review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Security</h2>
            <p>
              All connections to VideoGrab use SSL/TLS encryption. Your data is protected using industry-standard security measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p>
              You have the right to request information about any data we hold about you. Contact us for inquiries about your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy periodically. Continued use of VideoGrab constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p>
              If you have privacy concerns, please contact us at: <a href="mailto:privacy@videograb.app" className="text-blue-600 hover:underline">privacy@videograb.app</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
