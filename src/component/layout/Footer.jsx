import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo from '../../assets/Tronix.png'
import Mastar from '../../assets/master card.png'
import visa from '../../assets/Visa.png'
import Paypal from '../../assets/paypal.png'
import Paragraph from '../Paragraph'
import Flex from '../Flex'
import { BiPhone, BiLogoInstagram, BiLogoTwitter, BiLogoFacebookSquare } from 'react-icons/bi'
import { HiOutlineMailOpen } from 'react-icons/hi'
import PortionHadding from '../PortionHadding'
import List from '../List'

const Footer = () => {
  return (
    <>
    <Container className="flex">
      <div className='w-2/5'>
        <Image src={Logo}/>
        <Paragraph className=" w-96 mt-8" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. "/>
        <Flex className="my-9">
          <BiPhone className=' text-primary text-xl mr-2 my-1'/>
          <Paragraph text="+12 345 6789 0"/>
        </Flex>
        <Flex>
          <HiOutlineMailOpen className=' text-primary text-xl mr-2 mt-1'/>
          <Paragraph text="support@tronix.com"/>
        </Flex>
      </div>
      <Flex className='w-3/5'>
        <div className='w-2/6'>
          <PortionHadding text="Company" className=" text-2xl"/>
          <ul className=' mt-9'>
            <List text="About"/>
            <List text="Products" className=" my-4"/>
            <List text="Contact"/>
            <List text="Blog" className=" my-4"/>
            <List text="Careers"/>
          </ul>
        </div>
        <div className='w-2/6'>
        <PortionHadding text="Information" className=" text-2xl"/>
          <ul className=' mt-9'>
            <List text="Help Center "/>
            <List text="Payment Methods" className=" my-4"/>
            <List text="Return & Refund"/>
            <List text="Privacy Policy" className=" my-4"/>
          </ul>
        </div>
        <div className='w-2/6'>
          <PortionHadding text="Follow Us" className=" text-2xl"/>
          <Flex className="mt-9">
            <div className=' bg-primary p-2 rounded-lg'>
              <BiLogoInstagram className=' text-3xl text-white'/>
            </div>
            <div className=' bg-primary p-2 rounded-lg mx-6'>
              <BiLogoTwitter className=' text-3xl text-white'/>
            </div>
            <div className=' bg-primary p-2 rounded-lg'>
              <BiLogoFacebookSquare className=' text-3xl text-white'/>
            </div>
          </Flex>
        </div>
      </Flex>
    </Container>
    <Container className="mt-32">
      <div className=' bg-secound h-[1px] w-full'></div>
      <Flex className="mt-10">
        <div className=' w-2/4'>
          <Paragraph text="Copyright © 2021 Tronix. All Right Reseved"/>
        </div>
        <div className=' w-2/4 flex justify-end'>
          <Image src={Mastar}/>
          <Image src={visa} className=" px-4"/>
          <Image src={Paypal}/>
        </div>
      </Flex>
    </Container>
    </>
  )
}

export default Footer