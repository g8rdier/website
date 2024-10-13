import ExportedImage from 'next-image-export-optimizer'
import bg from '../public/images/background.png'
import logo from '../public/images/logo.svg'
import AppMockup from './app-mockup'

export default function Header() {
  return (
    <header className="relative overflow-hidden h-[48rem]">
      <ExportedImage
        className="absolute object-cover top-0 left-0 w-full h-full"
        src={bg}
        alt="background"
        priority
      />

      <div className="z-10 relative flex justify-start items-center px-6 pt-6">
        <ExportedImage
          src={logo}
          alt="Purpose"
          priority
          basePath="/huconwebsite"
        />
      </div>
      <div className="z-10 flex h-full justify-center relative mt-6">
        <div className="flex flex-col lg:flex-row lg:w-9/12 justify-center items-center gap-16 h-full">
          <div className="px-6 md:px-auto md:w-9/12 lg:6/12">
            <h1 className="text-4xl font-bold leading-normal lg:leading-relaxed lg:text-6xl text-slate-50">
              Stop searching—
              <br className="hidden lg:block" />
              start discovering a fulfilling career.
            </h1>
          </div>
          <div className="flex flex-col justify-end items-center h-full w-6/12">
            <AppMockup />
          </div>
        </div>
      </div>
    </header>
  )
}
