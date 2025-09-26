'use client';
import React from 'react'
import { Container } from '../../components/index'
import { Joti_One } from 'next/font/google';
import Image from 'next/image';
import hero_about from '../../public/assets/images/hero_about.jpg'


const jotiOne = Joti_One({
  subsets: ["latin"],
  weight: "400",
});

const HeroSection = () => {
  return (
    <section aria-labelledby="hero-heading" className='p-tb bg-gradient-to-r from-[#003F40] to-[#00A3A6]'>
        <Container className='flex flex-col md:flex-row'>
            <div className='flex-1 flex justify-center md:justify-start mb-4'>
              <h1 className={`pt-5 text-[var(--default)] text-[44px] md:text-6xl text-center relative w-fit hero-line ` + jotiOne.className}>About Us</h1>
            </div>
            <div className='flex-1 flex justify-center items-center'>
              <div className={`hero-mask`}>
              </div>
            </div>
        </Container> 
    </section>
  )
}

export default HeroSection