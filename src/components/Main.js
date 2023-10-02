import Ellipsis from '@/svg/Ellipsis'
import React from 'react'

const trackings = [
  {
    name: 'Work',
    lastWeek: '36',
    time: '32',
  },
  {
    name: 'Play',
    lastWeek: '36',
    time: '10',
  },
  {
    name: 'Study',
    lastWeek: '7',
    time: '4',
  },
  {
    name: 'Exercise',
    lastWeek: '5',
    time: '4',
  },
  {
    name: 'Social',
    lastWeek: '10',
    time: '5',
  },
  {
    name: 'Self-Care',
    lastWeek: '2',
    time: '2',
  },
]

const setBgColor = (index) => {
  if (index == 0) return 'bg-orange'
  if (index == 1) return 'bg-blue'
  if (index == 2) return 'bg-red'
  if (index == 3) return 'bg-green'
  if (index == 4) return 'bg-violet'
  if (index == 5) return 'bg-yellow'
}

export default function Main() {
  return (
    <>
      {trackings.map(({ name, time, lastWeek }, index) => {
        let trackColor = setBgColor(index)

        return (
          <div key={name} className="relative h-fit">
            <div
              className={`${trackColor} min-h-[180px] lg:min-h-[250px] radius flex flex-col items-end overflow-hidden`}
            >
              <img
                src={`/images/icon-${name.toLowerCase()}.svg`}
                alt="Tracking icon"
                className="mr-6 w-[78px] relative -top-2"
              />
            </div>
            <div className="absolute top-14 flex flex-col gap-[7px] card bottom-0 w-full px-6 py-[28px]">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-lg">{name}</h2>
                <Ellipsis props="fill-lila hover:fill-white cursor-pointer" />
              </div>
              <div className="flex lg:flex-col justify-between items-center lg:items-start">
                <p className="text-[32px] lg:text-[56px] font-light">
                  {time}hrs
                </p>
                <p className="text-lila text-[15px]">
                  Last Week - {lastWeek}hrs
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
