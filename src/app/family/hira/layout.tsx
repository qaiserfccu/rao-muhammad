'use client';

import MemberLayout from '@/components/layout/MemberLayout';

const memberInfo = {
  name: 'Dr. Hira Nadeem',
  role: 'Doctor of Pharmacy (Pharm D)',
  navigationItems: [
    { name: 'About', href: '/family/hira' },
    { name: 'Education', href: '/family/hira/education' },
    { name: 'Practice', href: '/family/hira/practice' },
    { name: 'Research', href: '/family/hira/research' },
    { name: 'Gallery', href: '/family/hira/gallery' }
  ]
};

export default function HiraLayout({
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