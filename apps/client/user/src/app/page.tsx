import Link from 'next/link';

export default async function Index() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Link href="/login">Login</Link>
    </div>
  );
}
