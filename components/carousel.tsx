'use client'

import { gradientStyle } from '@/lib/contants'
import { useState } from 'react'
import step1 from '../public/images/steps/step1.png'
import step2 from '../public/images/steps/step2.gif'
import step3 from '../public/images/steps/step3.gif'
import Step from './step'
import StepImage from './step-image'

const STEPS = [
  { num: '1', content: 'Upload your CV' },
  { num: '2', content: 'Tweak preferences' },
  { num: '3', content: 'Get matched & Apply' },
]

const STEP_IMAGES = [
  { num: '1', imageSrc: step1 },
  { num: '2', imageSrc: step2 },
  { num: '3', imageSrc: step3 },
]

export default function Carousel() {
  const [currentActive, setCurrentActive] = useState('1')

  const handleClick = (num: string) => {
    setCurrentActive(num)
  }

  return (
    <div className="md:m-6 p-6 md:py-32 bg-slate-200 md:rounded-lg flex flex-col-reverse md:flex-row gap-12">
      <div className="md:w-6/12">
        <div className="relative flex justify-center items-center w-full h-full">
          {STEP_IMAGES.map((s) => (
            <StepImage
              key={s.num + s.imageSrc}
              imageSrc={s.imageSrc}
              active={s.num === currentActive}
            />
          ))}
        </div>
      </div>
      <div className="md:w-6/12 p-6 flex flex-col justify-center">
        <div>
          <h3 className="text-2xl md:text-5xl font-bold">
            Here is how we help you{' '}
            <span
              style={{
                ...gradientStyle,
                backgroundClip: 'text',
              }}
              className="inline-block text-transparent"
            >
              In minutes
            </span>
          </h3>
          <p className="text-lg">
            Applicants save on an average of 80% of their time per application
          </p>

          <div className="flex flex-col gap-12 mt-12">
            {STEPS.map((s) => (
              <Step
                active={currentActive === s.num}
                key={s.num + s.content}
                num={s.num}
                content={s.content}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
