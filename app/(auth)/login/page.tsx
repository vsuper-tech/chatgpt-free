import { redirect } from 'next/navigation';

export default function LoginPage() {
  // Tạm redirect thẳng vào chat để test
  redirect('/chat');
  
  // Nếu bạn muốn giữ trang login sau này, dùng code dưới:
  /*
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Đăng nhập</h1>
        <p>Đang phát triển...</p>
      </div>
    </div>
  );
  */
}
