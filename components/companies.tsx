import { gradientStyle } from '@/lib/contants'
import Image from 'next/image'
import logo1 from '../public/images/companies/1.svg'
import logo2 from '../public/images/companies/2.svg'
import logo3 from '../public/images/companies/3.svg'
import logo4 from '../public/images/companies/4.svg'
import logo5 from '../public/images/companies/5.svg'
import logo6 from '../public/images/companies/6.svg'

export default function Companies() {
  return (
    <div className="flex flex-col justify-around items-center p-8 lg:p-0 lg:h-[36rem]">
      <div className="md:w-9/12 lg:w-6/12 xl:w-4/12 md:text-center">
        <h3
          style={{
            ...gradientStyle,
            backgroundClip: 'text',
          }}
          className="inline-block text-transparent p-3 md:p-0 text-3xl md:text-6xl font-bold"
        >
          Companies that you would be proud to work with
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-6 md:w-9/12 lg:w-8/12 xl:w-6/12 mt-12 lg:mt-0">
        <Image src={logo1} alt="Helmholtz Munich" />
        <Image src={logo2} alt="Colliers" />
        <Image src={logo3} alt="IAC" />
        <Image src={logo4} alt="JLL" />
        <Image src={logo5} alt="DMG MORI" />
        <Image src={logo6} alt="Golding" />
      </div>
    </div>
  )
}
