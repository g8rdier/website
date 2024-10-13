import ExportedImage from 'next-image-export-optimizer'
import appMockup from '../public/images/app-mockup/app.png'

export default function AppMockup() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-start">
      <ExportedImage
        src={appMockup}
        alt="App"
        fill
        className="object-contain"
        basePath="/"
      />
      <div className="z-10 flex flex-col items-center justify-center text-sm sm:text-lg md:text-2xl text-slate-50 font-bold text-center">
        <div className="absolute top-[27%] sm:top-[20%] lg:top-[27%]">
          <p className="">made for the</p>
          <div className="overflow-hidden h-8">
            <div className="animate-slide">
              <p>High Achievers</p>
              <p>Seekers</p>
              <p>Top Performers</p>
              <p>Go-Getters</p>
              <p>Leaders</p>
              <p>Visionaries</p>
              <p>High performers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
