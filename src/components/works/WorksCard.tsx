import React, { FC } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Chip,
  CardFooter,
} from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';
import { ExternalLink, StickyNote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const WorksCard: FC = () => (
  <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-5 gap-10 mt-10'>
    <Card
      className='w-[480px] h-[700px] sm:w-[650px] sm:h-[600px] relative'
      isFooterBlurred
    >
      <div className='absolute right-[-500px] w-[750px] h-[300px] rotate-[95deg] bg-[#390099] blur-[80px]' />
      <div className='absolute left-64 bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#9e0059] blur-[80px]' />
      <div className='absolute right-[-200px] bottom-[-350px] rounded-[100%] w-[750px] h-96 rotate-[-30deg] bg-[#ff0054] blur-[80px]' />
      <CardHeader className='flex-col !items-start p-5 space-y-2'>
        <div className='flex gap-3'>
          <Image
            src='./squadspacelogo.svg'
            alt='squadspace'
            width={35}
            height={35}
          />
          <p className={`${SpaceGrotesk.className} font-medium text-[28px]`}>
            Squad Space
          </p>
        </div>
        <p className='text-small dark:text-white/60 text-black/60'>
          Admin app companion for Squad Space App
        </p>
        <div className='flex gap-2'>
          <Chip
            size='sm'
            className='bg-black dark:bg-white text-white dark:text-black'
          >
            <ExternalLink size={12} className='inline mr-1' />
            <Link
              href='https://capstone-frontend-steel.vercel.app/'
              className='hover:underline'
            >
              Demo Link
            </Link>
          </Chip>
          <Chip size='sm' variant='faded'>
            Dashboard App
          </Chip>
          <Chip size='sm' variant='faded'>
            Single Page App
          </Chip>
          <Chip size='sm' variant='faded'>
            Frontend
          </Chip>
          <Chip
            size='sm'
            className='bg-black dark:bg-white text-white dark:text-black'
          >
            <ExternalLink size={12} className='inline mr-1' />
            <Link
              href='https://github.com/Aliezan/capstone-frontend'
              className='hover:underline'
            >
              Github
            </Link>
          </Chip>
        </div>
      </CardHeader>
      <CardBody className='relative flex items-center'>
        <Image
          src='./SquadSpaceMC.png'
          alt='squadspace'
          width={500}
          height={500}
        />
      </CardBody>
      <CardFooter className='absolute left-0 bottom-0 border-t-1 z-10 before:bg-white/100 border-white/20'>
        <div className='p-2 space-y-3'>
          <p className='text-black dark:text-white text-tiny font-semibold'>
            Made with
          </p>
          <div className='flex gap-2'>
            <Image src='./react.svg' alt='react' width={23} height={23} />
            <Image
              src='./tailwindcss.svg'
              alt='tailwind'
              width={23}
              height={23}
            />
            <Image src='./zustand.png' alt='react' width={23} height={23} />
            <Image src='./formik.svg' alt='formik' width={23} height={23} />
            <p className='text-small font-bold mt-1'>+4 more</p>
          </div>
        </div>
      </CardFooter>
    </Card>

    <Card
      className='w-[480px] h-[700px] sm:w-[650px] sm:h-[600px] relative'
      isFooterBlurred
    >
      <div className='absolute right-[-500px] w-[750px] h-[300px] rotate-[95deg] bg-[#f94144] blur-[80px]' />
      <div className='absolute left-64 bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#f3722c] blur-[80px]' />
      <div className='absolute right-[-200px] bottom-[-350px] rounded-[100%] w-[750px] h-96 rotate-[-30deg] bg-[#f8961e] blur-[80px]' />
      <CardHeader className='flex-col !items-start p-5 space-y-2'>
        <div className='flex gap-3'>
          <StickyNote size={35} />
          <p className={`${SpaceGrotesk.className} font-medium text-[28px]`}>
            Habit Tracker App
          </p>
        </div>
        <p className='text-small dark:text-white/60 text-black/60'>
          Habit tracking app that allows you to track your habits and your
          progress
        </p>
        <div className='flex gap-2'>
          <Chip
            size='sm'
            className='bg-black dark:bg-white text-white dark:text-black'
          >
            <ExternalLink size={12} className='inline mr-1' />
            <Link href='/' className='hover:underline'>
              Demo Link
            </Link>
          </Chip>
          <Chip size='sm' variant='faded'>
            Mobile Optimized View
          </Chip>
          <Chip size='sm' variant='faded'>
            Single Page App
          </Chip>
          <Chip size='sm' variant='faded'>
            Fullstack
          </Chip>
          <Chip
            size='sm'
            className='bg-black dark:bg-white text-white dark:text-black'
          >
            <ExternalLink size={12} className='inline mr-1' />
            <Link
              href='https://github.com/Aliezan/habits-tracker-app'
              className='hover:underline'
            >
              Github
            </Link>
          </Chip>
        </div>
      </CardHeader>
      <CardBody className='relative flex items-center'>
        <Image
          src='./HabitTrackerMC.png'
          alt='HabitTracker'
          width={500}
          height={500}
        />
      </CardBody>
      <CardFooter className='absolute left-0 bottom-0 border-t-1 z-10 before:bg-white/100 border-white/20'>
        <div className='p-2 space-y-3'>
          <p className='text-black dark:text-white text-tiny font-semibold'>
            Made with
          </p>
          <div className='flex gap-2'>
            <Image src='./react.svg' alt='react' width={23} height={23} />
            <Image
              src='./tailwindcss.svg'
              alt='tailwind'
              width={23}
              height={23}
            />
            <Image src='./graphql.svg' alt='graphql' width={23} height={23} />
            <Image src='./apollo.svg' alt='apollo' width={23} height={23} />
            <Image src='./formik.svg' alt='formik' width={23} height={23} />
            <p className='text-small font-bold mt-1'>+4 more</p>
          </div>
        </div>
      </CardFooter>
    </Card>
    <Card
      className='w-[480px] h-[900px] sm:w-[1330px] sm:h-[600px] relative sm:col-span-2'
      isFooterBlurred
    >
      <div className='absolute left-[200px] bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#008000] blur-[80px]' />
      <CardHeader className='flex-col !items-start p-5 space-y-2'>
        <div className='flex gap-3'>
          <Image src='./fav.svg' alt='identify-logo' width={35} height={35} />
          <p className={`${SpaceGrotesk.className} font-medium text-[28px]`}>
            Identify
          </p>
        </div>
        <p className='text-small dark:text-white/60 text-black/60'>
          ID Card Generator based on your Spotify Listening History
        </p>
        <div className='flex gap-2'>
          <Chip
            size='sm'
            className='bg-black dark:bg-white text-white dark:text-black'
          >
            <ExternalLink size={12} className='inline mr-1' />
            <Link href='/' className='hover:underline'>
              Demo Link
            </Link>
          </Chip>
          <Chip size='sm' variant='faded'>
            Dashboard App
          </Chip>
          <Chip size='sm' variant='faded'>
            Single Page App
          </Chip>
          <Chip size='sm' variant='faded'>
            Frontend
          </Chip>
          <Chip
            size='sm'
            className='bg-black dark:bg-white text-white dark:text-black'
          >
            <ExternalLink size={12} className='inline mr-1' />
            <Link
              href='https://github.com/Aliezan/identify'
              className='hover:underline'
            >
              Github
            </Link>
          </Chip>
        </div>
        <CardBody />
        <CardBody className='relative flex items-center'>
          <Image
            src='./IdentifyMC.png'
            alt='squadspace'
            width={800}
            height={800}
          />
        </CardBody>
        <CardFooter className='absolute left-0 bottom-0 border-t-1 z-10 before:bg-white/100 border-white/20'>
          <div className='p-2 space-y-3'>
            <p className='text-black dark:text-white text-tiny font-semibold'>
              Made with
            </p>
            <div className='flex'>
              <div className='flex gap-2'>
                <Image src='./next-js.svg' alt='next' width={23} height={23} />
                <Image
                  src='./tailwindcss.svg'
                  alt='tailwind'
                  width={23}
                  height={23}
                />
                <Image
                  src='./react-query-icon.svg'
                  alt='react-query'
                  width={23}
                  height={23}
                />
                <Image src='./typescript.svg' alt='ts' width={23} height={23} />
                <Image src='./next-auth.png' alt='ts' width={23} height={23} />
                <p className='text-small font-bold mt-1'>+4 more</p>
              </div>
            </div>
          </div>
        </CardFooter>
      </CardHeader>
    </Card>
  </div>
);

export default WorksCard;
