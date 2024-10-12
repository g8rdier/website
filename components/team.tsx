import Image from 'next/image'
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
    title: 'Frontend Engineer',
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
      <Image
        className="absolute object-cover top-0 left-0 w-full h-full"
        src={bg}
        alt="background"
      />
      <div className="p-16 z-10 relative flex flex-wrap justify-center lg:justify-start gap-20 lg:w-9/12 lg:mx-auto">
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
