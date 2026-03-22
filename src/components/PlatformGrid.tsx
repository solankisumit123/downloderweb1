import { Instagram, MessageCircle, Music, Play, Rss, Share2, Smile, Video, Youtube } from 'lucide-react';

const PLATFORMS = [
  { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-rose-500' },
  { name: 'TikTok', icon: Music, color: 'from-black to-gray-800' },
  { name: 'YouTube', icon: Youtube, color: 'from-red-600 to-red-700' },
  { name: 'Facebook', icon: Share2, color: 'from-blue-600 to-blue-700' },
  { name: 'Twitter/X', icon: MessageCircle, color: 'from-gray-900 to-black' },
  { name: 'Reddit', icon: Rss, color: 'from-orange-500 to-red-600' },
  { name: 'Pinterest', icon: Smile, color: 'from-red-600 to-red-700' },
  { name: 'LinkedIn', icon: Share2, color: 'from-blue-700 to-blue-800' },
  { name: 'Snapchat', icon: Video, color: 'from-yellow-300 to-yellow-400' },
  { name: 'Threads', icon: MessageCircle, color: 'from-gray-900 to-black' },
];

export function PlatformGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {PLATFORMS.map((platform) => {
        const IconComponent = platform.icon;
        return (
          <div
            key={platform.name}
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <p className="font-semibold text-gray-900 text-sm">{platform.name}</p>
          </div>
        );
      })}
    </div>
  );
}
