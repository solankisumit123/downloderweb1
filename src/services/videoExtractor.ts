export interface VideoInfo {
  platform: string;
  title: string;
  thumbnail: string;
  duration: number;
  quality: string;
  downloadUrl: string;
  author: string;
}

const PLATFORMS = {
  instagram: {
    patterns: [/instagram\.com|instagr\.am/],
    name: 'Instagram',
    color: '#E4405F'
  },
  tiktok: {
    patterns: [/tiktok\.com|vm\.tiktok|vt\.tiktok/],
    name: 'TikTok',
    color: '#000000'
  },
  youtube: {
    patterns: [/youtube\.com|youtu\.be/],
    name: 'YouTube',
    color: '#FF0000'
  },
  facebook: {
    patterns: [/facebook\.com|fb\.watch/],
    name: 'Facebook',
    color: '#1877F2'
  },
  twitter: {
    patterns: [/twitter\.com|x\.com/],
    name: 'Twitter/X',
    color: '#000000'
  },
  reddit: {
    patterns: [/reddit\.com/],
    name: 'Reddit',
    color: '#FF4500'
  },
  pinterest: {
    patterns: [/pinterest\.com|pin\.it/],
    name: 'Pinterest',
    color: '#E60023'
  },
  linkedin: {
    patterns: [/linkedin\.com/],
    name: 'LinkedIn',
    color: '#0077B5'
  },
  snapchat: {
    patterns: [/snapchat\.com|snap\.com/],
    name: 'Snapchat',
    color: '#FFFC00'
  },
  threads: {
    patterns: [/threads\.net/],
    name: 'Threads',
    color: '#000000'
  }
};

export function detectPlatform(url: string): string | null {
  for (const [platform, config] of Object.entries(PLATFORMS)) {
    if (config.patterns.some(pattern => pattern.test(url))) {
      return platform;
    }
  }
  return null;
}

export function getPlatformInfo(platform: string) {
  return PLATFORMS[platform as keyof typeof PLATFORMS];
}

export async function extractVideoInfo(url: string): Promise<VideoInfo> {
  const platform = detectPlatform(url);

  if (!platform) {
    throw new Error('Platform not supported or URL is invalid');
  }

  const cleanUrl = encodeURIComponent(url);

  try {
    const response = await fetch(`/api/extract`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, platform })
    });

    if (!response.ok) {
      throw new Error(`Failed to extract video: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Video extraction error:', error);
    throw new Error('Failed to extract video information. Please try again.');
  }
}

export function getDownloadUrl(platform: string, videoId: string): string {
  const params = new URLSearchParams({
    platform,
    id: videoId,
    t: Date.now().toString()
  });

  return `/api/download?${params.toString()}`;
}
