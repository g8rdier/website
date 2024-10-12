import Image from 'next/image'
import bg from '../public/images/team/bg2.png'
import TeamMember from './team-member'

const TEAM_MEMBERS = [
  {
    name: 'Gregor Kobilarov',
    title: 'Co-Founder',
    imageSrc: '/images/team/gk.jpeg',
  },
  {
    name: 'Lukas Faber',
    title: 'Co-Founder',
    imageSrc: '/images/team/lf.jpeg',
  },
  {
    name: 'Wael Feriz',
    title: 'Machine Learning Engineer',
    imageSrc: '/images/team/wf.jpeg',
  },
  {
    name: 'Gaby Tatters',
    title: 'Mobile Designer',
    imageSrc: '/images/team/gt.png',
  },
  {
    name: 'Mieszko Chowaniec',
    title: 'Backend Engineer',
    imageSrc: '/images/team/mc.jpeg',
  },
  {
    name: 'Kaouther Mefteh',
    title: 'Frontend Engineer',
    imageSrc: '/images/team/km.jpeg',
  },
  {
    name: 'Shatabdi Biswas',
    title: 'Product Designer',
    imageSrc: '/images/team/sb.jpeg',
  },
  {
    name: 'Ismail Cherri',
    title: 'Frontend Engineer',
    imageSrc: '/images/team/ic.jpeg',
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
