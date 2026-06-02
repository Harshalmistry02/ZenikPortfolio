"use client";
import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/forms/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to subscribe');

      setMessage({ type: 'success', text: 'Subscribed successfully!' });
      setEmail('');
    } catch {
      setMessage({ type: 'error', text: 'Failed to subscribe. Try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="space-y-2">
      <div className="flex w-full max-w-sm">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 bg-[#2a2f36] border border-gray-700 text-white rounded-l-md focus:outline-none focus:border-[#00BFA6]"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-[#00BFA6] hover:bg-[#00a892] text-white font-bold rounded-r-md transition-colors whitespace-nowrap disabled:opacity-60"
        >
          {loading ? '...' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <div className={`flex items-center gap-2 text-xs ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message.type === 'success' ? <Check size={12} /> : <AlertCircle size={12} />}
          {message.text}
        </div>
      )}
    </form>
  );
}
