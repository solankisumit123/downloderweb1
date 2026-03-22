import { ArrowRight, CheckCircle, Lock, Zap } from 'lucide-react';
import { useState } from 'react';
import { URLInput } from '../components/URLInput';
import { PlatformGrid } from '../components/PlatformGrid';
import { supabase } from '../lib/supabase';

export function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async (url: string) => {
    setLoading(true);
    setError('');

    try {
      const platform = url.includes('instagram') ? 'instagram' :
                      url.includes('tiktok') ? 'tiktok' :
                      url.includes('youtube') ? 'youtube' : 'unknown';

      await supabase.from('downloads').insert({
        platform,
        url,
        title: 'Video',
        status: 'processing'
      });

      setError('Thank you! Your download has been recorded. Video extraction would process here.');
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to process download. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Download Videos from
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Any Platform</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download videos from Instagram, TikTok, YouTube, and more. Free, fast, and no sign-up required.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <URLInput onSubmit={handleDownload} loading={loading} error={error} />
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Supported Platforms</h2>
            <PlatformGrid />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Why Choose VideoGrab?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 rounded-xl border border-blue-100">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Download videos instantly without waiting. Optimized servers for maximum speed.</p>
            </div>

            <div className="p-8 bg-green-50 rounded-xl border border-green-100">
              <Lock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Secure</h3>
              <p className="text-gray-600">Your privacy is protected. We don't store any personal data or video content.</p>
            </div>

            <div className="p-8 bg-purple-50 rounded-xl border border-purple-100">
              <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Watermarks</h3>
              <p className="text-gray-600">Download clean videos without watermarks. Get the original quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Paste URL', description: 'Copy any video URL and paste it into our downloader' },
              { step: '2', title: 'Select Quality', description: 'Choose your preferred video quality and format' },
              { step: '3', title: 'Download', description: 'Get your video instantly, ready to use' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
                {idx < 2 && (
                  <ArrowRight className="hidden md:block absolute -right-12 top-6 w-6 h-6 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Download?</h2>
          <p className="text-lg text-blue-100 mb-8">Start downloading your favorite videos right now</p>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-shadow">
            Download Now
          </button>
        </div>
      </section>
    </main>
  );
}
