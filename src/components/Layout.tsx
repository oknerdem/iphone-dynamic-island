function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen h-screen w-full p-8 flex flex-col items-start justify-start'>
      {children}
    </main>
  );
}

export default Layout;
