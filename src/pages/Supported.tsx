import { CheckCircle } from 'lucide-react';

const SUPPORTED_PLATFORMS = [
  {
    name: 'Instagram',
    description: 'Download reels, posts, stories, and carousel videos from Instagram.',
    features: ['Reels', 'Posts', 'Stories', 'Carousel', 'Profiles'],
    url: 'instagram.com'
  },
  {
    name: 'TikTok',
    description: 'Download TikTok videos in high quality without watermarks.',
    features: ['Videos', 'Sounds', 'Captions', 'HD Quality'],
    url: 'tiktok.com'
  },
  {
    name: 'YouTube',
    description: 'Download YouTube videos in multiple quality options.',
    features: ['Videos', 'Playlists', 'Subtitles', '4K Support'],
    url: 'youtube.com'
  },
  {
    name: 'Facebook',
    description: 'Download videos from Facebook, Reels, and Live streams.',
    features: ['Videos', 'Reels', 'Live Streams', 'Audio'],
    url: 'facebook.com'
  },
  {
    name: 'Twitter/X',
    description: 'Download videos, GIFs, and media from Twitter/X posts.',
    features: ['Videos', 'GIFs', 'Threads', 'Media'],
    url: 'twitter.com'
  },
  {
    name: 'Reddit',
    description: 'Download videos from Reddit posts and communities.',
    features: ['Videos', 'GIFs', 'Community Posts'],
    url: 'reddit.com'
  },
  {
    name: 'Pinterest',
    description: 'Download pins and videos from Pinterest boards.',
    features: ['Pins', 'Videos', 'Collections'],
    url: 'pinterest.com'
  },
  {
    name: 'LinkedIn',
    description: 'Download videos from LinkedIn posts and articles.',
    features: ['Videos', 'Articles', 'Posts'],
    url: 'linkedin.com'
  },
  {
    name: 'Snapchat',
    description: 'Download Snapchat videos and stories.',
    features: ['Stories', 'Snaps', 'Media'],
    url: 'snapchat.com'
  },
  {
    name: 'Threads',
    description: 'Download videos from Threads posts.',
    features: ['Videos', 'Posts'],
    url: 'threads.net'
  },
];

export function Supported() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Supported Platforms</h1>
          <p className="text-xl text-gray-600">
            We support downloading videos from 10+ major social media platforms. More platforms coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUPPORTED_PLATFORMS.map((platform) => (
            <div key={platform.name} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{platform.url}</p>
              <p className="text-gray-600 mb-6">{platform.description}</p>

              <div className="flex flex-wrap gap-2">
                {platform.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-900">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Missing a Platform?</h2>
          <p className="text-gray-600 mb-4">
            Let us know which platforms you'd like us to support. We're constantly adding new platforms based on user requests.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Request a Platform
          </button>
        </div>
      </div>
    </main>
  );
}
