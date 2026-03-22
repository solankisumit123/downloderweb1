import { AlertCircle, Loader, Copy } from 'lucide-react';
import { useState } from 'react';
import { detectPlatform } from '../services/videoExtractor';

interface URLInputProps {
  onSubmit: (url: string) => void;
  loading?: boolean;
  error?: string;
}

export function URLInput({ onSubmit, loading = false, error }: URLInputProps) {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setUrl(value);
    setPlatform(detectPlatform(value));
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      handleChange(text);
    } catch (err) {
      console.error('Failed to paste:', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim() && platform) {
      onSubmit(url);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Paste video URL here... (Instagram, TikTok, YouTube, etc.)"
          value={url}
          onChange={(e) => handleChange(e.target.value)}
          disabled={loading}
          className="w-full px-6 py-4 pr-14 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors disabled:bg-gray-50"
        />
        <button
          type="button"
          onClick={handlePaste}
          disabled={loading}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
          title="Paste from clipboard"
        >
          <Copy className="w-5 h-5" />
        </button>
      </div>

      {url && (
        <div className="mt-3 flex items-center gap-2">
          {platform ? (
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
              ✓ {platform.charAt(0).toUpperCase() + platform.slice(1)} detected
            </span>
          ) : (
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
              Platform not recognized
            </span>
          )}
        </div>
      )}

      {error && (
        <div className="mt-3 flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!platform || loading}
        className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          'Download'
        )}
      </button>
    </form>
  );
}
