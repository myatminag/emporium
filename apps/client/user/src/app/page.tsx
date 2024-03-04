import Link from 'next/link';

export default async function Index() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-x-5">
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
}
