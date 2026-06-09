import { redirect } from 'next/navigation';

export default function LoginPage() {
  // Tạm thời redirect thẳng vào chat để build thành công và test
  redirect('/chat');
}
