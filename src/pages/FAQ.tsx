import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    question: 'Is VideoGrab free?',
    answer: 'Yes! VideoGrab is completely free to use. No hidden fees, no premium plans required. Download as many videos as you want.'
  },
  {
    question: 'Do I need to sign up?',
    answer: 'No sign-up required! Just paste the video URL and download. We keep things simple and respect your privacy.'
  },
  {
    question: 'Can I download videos to my phone?',
    answer: 'Yes! VideoGrab works on both desktop and mobile browsers. Simply open the website on your phone and download videos directly to your device.'
  },
  {
    question: 'Are downloads watermark-free?',
    answer: 'Yes! All videos are downloaded in their original quality without any additional watermarks added by VideoGrab.'
  },
  {
    question: 'How long does it take to download?',
    answer: 'Downloads are typically instant, depending on your internet connection and the video size. Large 4K videos may take a few minutes.'
  },
  {
    question: 'Is it safe to use VideoGrab?',
    answer: 'Absolutely! We use secure SSL encryption and don\'t store any of your personal information or videos. Your privacy is our priority.'
  },
  {
    question: 'Which video qualities are available?',
    answer: 'Available qualities depend on the platform and original upload. We typically offer 720p, 1080p, and 4K where available.'
  },
  {
    question: 'Can I download entire playlists?',
    answer: 'Currently, you need to download videos individually. Batch download for playlists is coming soon!'
  },
  {
    question: 'Is there a limit to how many videos I can download?',
    answer: 'No limits! Download as many videos as you want. There\'s no daily or monthly quota.'
  },
  {
    question: 'What if the download fails?',
    answer: 'If a download fails, please try again. Make sure the video URL is correct and still available on the platform.'
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-left">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about VideoGrab and how to use it.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't find an answer?</h2>
          <p className="text-gray-600 mb-4">
            If you have any other questions, please reach out to our support team.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </main>
  );
}
