'use client';

import MemberLayout from '@/components/layout/MemberLayout';

const memberInfo = {
  name: 'Dr. Faisal Nadeem',
  role: 'MBBS Doctor - Pulmonologist',
  navigationItems: [
    { name: 'About', href: '/family/faisal' },
    { name: 'Education', href: '/family/faisal/education' },
    { name: 'Practice', href: '/family/faisal/practice' },
    { name: 'Research', href: '/family/faisal/research' },
    { name: 'Gallery', href: '/family/faisal/gallery' }
  ]
};

export default function FaisalLayout({
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