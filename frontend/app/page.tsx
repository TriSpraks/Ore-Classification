'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('Failed to reach backend'));
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Ore Classification</h1>
      <p>Backend status: <strong>{status}</strong></p>
    </main>
  );
}