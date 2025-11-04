'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function FamilyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout will only apply to pages directly under /family
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isMainFamilyPage = pathname === '/family' || 
    pathname === '/family/gallery' || 
    pathname === '/family/timeline' || 
    pathname === '/family/tree';

  return (
    <>
      {isMainFamilyPage && <Header />}
      <main className="min-h-screen pt-16">
        {children}
      </main>
      {isMainFamilyPage && <Footer />}
    </>
  );
}