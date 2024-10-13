import ExportedImage from 'next-image-export-optimizer'
import bg from '../public/images/team/bg2.png'
import gk from '../public/images/team/gk.jpeg'
import gt from '../public/images/team/gt.png'
import ic from '../public/images/team/ic.jpeg'
import km from '../public/images/team/km.jpeg'
import lf from '../public/images/team/lf.jpeg'
import mc from '../public/images/team/mc.jpeg'
import sb from '../public/images/team/sb.jpeg'
import wf from '../public/images/team/wf.jpeg'
import TeamMember from './team-member'

const TEAM_MEMBERS = [
  {
    name: 'Gregor Kobilarov',
    title: 'Co-Founder',
    imageSrc: gk,
  },
  {
    name: 'Lukas Faber',
    title: 'Co-Founder',
    imageSrc: lf,
  },
  {
    name: 'Wael Feriz',
    title: 'Machine Learning Engineer',
    imageSrc: wf,
  },
  {
    name: 'Gaby Tatters',
    title: 'Mobile Designer',
    imageSrc: gt,
  },
  {
    name: 'Mieszko Chowaniec',
    title: 'Backend Engineer',
    imageSrc: mc,
  },
  {
    name: 'Kaouther Mefteh',
    title: 'Mobile Engineer',
    imageSrc: km,
  },
  {
    name: 'Shatabdi Biswas',
    title: 'Product Designer',
    imageSrc: sb,
  },
  {
    name: 'Ismail Cherri',
    title: 'Frontend Engineer',
    imageSrc: ic,
  },
]

export default function Team() {
  return (
    <div className="relative">
      <ExportedImage
        className="absolute object-cover top-0 left-0 w-full h-full"
        src={bg}
        alt="background"
        basePath="/website"
      />
      <div className="z-10 relative text-center p-8">
        <h3 className="text-slate-50 font-bold text-xl md:text-4xl">
          Founding Team
        </h3>
      </div>
      <div className="p-8 md:p-16 z-10 relative grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:max-w-9/12">
        {TEAM_MEMBERS.map((t) => (
          <TeamMember
            name={t.name}
            title={t.title}
            imageSrc={t.imageSrc}
            key={t.name + t.title}
          />
        ))}
      </div>
    </div>
  )
}
