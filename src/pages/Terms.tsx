export function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose max-w-none space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By using VideoGrab, you agree to comply with these terms and conditions. If you do not agree, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download videos from VideoGrab for personal, non-commercial use only. This license does not include:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Commercial or business use</li>
              <li>Selling or distributing downloaded content</li>
              <li>Removing copyright notices or watermarks</li>
              <li>Violating platform terms of service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Complying with all applicable laws</li>
              <li>Respecting intellectual property rights</li>
              <li>Not using VideoGrab for illegal purposes</li>
              <li>Not abusing our service with excessive requests</li>
              <li>Not attempting to access restricted areas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Copyright and Content Rights</h2>
            <p>
              VideoGrab is a tool for downloading videos. We do not own or claim rights to downloaded content. Users are responsible for respecting creators' copyright and platform terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p>
              VideoGrab is provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Uninterrupted service</li>
              <li>Error-free operation</li>
              <li>Success of all downloads</li>
              <li>Video quality or availability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p>
              VideoGrab is not liable for any damages, including lost data, lost profits, or indirect damages arising from service use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Termination</h2>
            <p>
              We reserve the right to terminate service access for users who violate these terms or engage in abusive behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p>
              We may modify these terms at any time. Continued use indicates acceptance of changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
            <p>
              Questions about these terms? Contact us at: <a href="mailto:legal@videograb.app" className="text-blue-600 hover:underline">legal@videograb.app</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
