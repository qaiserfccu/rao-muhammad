'use client';

import MemberLayout from '@/components/layout/MemberLayout';

const memberInfo = {
  name: 'Dr. Memoona Umar',
  role: 'MBBS Doctor - Gynecologist',
  navigationItems: [
    { name: 'About', href: '/family/memoona' },
    { name: 'Education', href: '/family/memoona/education' },
    { name: 'Practice', href: '/family/memoona/practice' },
    { name: 'Research', href: '/family/memoona/research' },
    { name: 'Gallery', href: '/family/memoona/gallery' }
  ]
};

export default function MemoonaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MemberLayout memberInfo={memberInfo}>
      {children}
    </MemberLayout>
  );
}