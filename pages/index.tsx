import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const [input, setInput] = useState('');
  const router = useRouter();

  return (
    <>
      <h1>babb</h1>
      <input type={'text'} onChange={e => setInput(e.target.value)} />
      <button onClick={() => router.push(`/search?q=${input}`)}>검색</button>
    </>
  );
}
