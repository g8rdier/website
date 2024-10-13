import ExportedImage from 'next-image-export-optimizer'
import { StaticImageData } from 'next/image'

interface Props {
  name: string
  title: string
  imageSrc: StaticImageData
}

export default function TeamMember({ name, title, imageSrc }: Props) {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <div className="rounded-full overflow-hidden relative w-40 h-40 border-white border-1">
        <ExportedImage src={imageSrc} alt={name} fill basePath="/website" />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-slate-50 text-2xl">{name}</p>
        <p className="text-slate-50 text-base w-9/12">{title}</p>
      </div>
    </div>
  )
}
