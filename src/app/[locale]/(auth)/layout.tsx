function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen items-center">
      <div className="w-full">{children}</div>
    </div>
  );
}
export default AuthLayout;
