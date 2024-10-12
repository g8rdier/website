'use client'

import Image, { StaticImageData } from 'next/image'

interface Props {
  imageSrc: StaticImageData
  active: boolean
}

export default function StepImage({ imageSrc, active }: Props) {
  if (!active) {
    return null
  }

  return (
    <div className="flex flex-row gap-3 justify-center items-center relative w-full h-full">
      <Image src={imageSrc} alt="Success" className="object-contain" />
    </div>
  )
}
