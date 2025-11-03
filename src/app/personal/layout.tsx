'use client';

import PersonalHeader from '@/components/layout/PersonalHeader';
import Footer from '@/components/layout/Footer';

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PersonalHeader />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}