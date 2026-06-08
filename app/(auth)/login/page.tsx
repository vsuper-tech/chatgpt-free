import { redirect } from 'next/navigation';
import { auth } from '../auth';

export default async function LoginPage() {
  const session = await auth();

  // Nếu đã có session → chuyển thẳng vào chat
  if (session?.user) {
    redirect('/chat');
  }

  // Nếu chưa login → hiển thị trang login (hoặc redirect guest)
  redirect('/api/auth/guest?redirectUrl=/chat');
}
