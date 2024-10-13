'use client'

import ExportedImage from 'next-image-export-optimizer'
import { StaticImageData } from 'next/image'

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
      <ExportedImage
        src={imageSrc}
        alt="Success"
        className="object-contain"
        basePath="/"
      />
    </div>
  )
}
