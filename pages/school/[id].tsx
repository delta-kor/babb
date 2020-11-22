import { useRouter } from 'next/router';

export default function School() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <p>{id}</p>
    </>
  );
}
