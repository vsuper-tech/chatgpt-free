import { redirect } from 'next/navigation';
import { auth } from '../auth';
import { Suspense } from 'react';

// Loading component
function Loading() {
  return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
}

export default async function LoginPage() {
  return (
    <Suspense fallback={<Loading />}>
      <LoginContent />
    </Suspense>
  );
}

async function LoginContent() {
  const session = await auth();

  if (session?.user) {
    redirect('/chat');
  }

  // Chuyển sang guest login hoặc signin
  redirect('/api/auth/guest?redirectUrl=/chat');
}
