import React from 'react'
import montanhas from "../public/assets/images/Montanhas.svg"
import Image from 'next/image'

const SectionDivider = () => {
  return (
    <div className='w-full overflow-hidden leading-none absolute bottom-0 left-0'>
        <Image src={montanhas} alt="divider" className='w-full mt-auto -z-100' />
    </div>
  )
}

export default SectionDivider