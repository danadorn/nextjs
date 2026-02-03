import { SkeletonCard } from '@/app/component/skeletons/skeleton-card'
import React from 'react'

export default function ProductLoading() {
  return (
    <>
    <main className='container mx-auto p-4 grid grid-cols-4 gap-6'>
    {Object.keys(new Array(20).fill(0)).map((key) => <SkeletonCard key={key} />)}
    </main>
    </>
  )
}
