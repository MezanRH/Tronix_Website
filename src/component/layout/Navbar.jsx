import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Tronix.png'
import List from '../List'
import { BiSearchAlt2 } from 'react-icons/bi'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
    <Flex className=" mt-16">
      <div className='w-1/6'>
        <Image src={Logo}/>
      </div>
      <Flex className='w-2/6 justify-between'>
        <ul className='flex gap-x-12'>
          <Link to={"/"}>
            <List text="Home"/>
          </Link>
          <Link to={"/about"}>
            <List text="About"/>
          </Link>
          <List text="Product"/>
          <List text="Blog"/>
          <List text="Contact"/>
        </ul>
      </Flex>
      <div className='w-2/6'>
        <input type="text" placeholder='Search here' className='bg-secound justify-end py-2 pl-3 ml-28 bg-white text-secound absolute w-96'/>
        <div className=' bg-primary relative left-[420px] -top-[2px] py-3 w-20 rounded-e-[8px] text-white'>
          <BiSearchAlt2 className='text-xl ml-3 cursor-pointer'/>
        </div>
      </div>
      <Flex className='w-1/6 justify-end'>
        <LiaShoppingBagSolid className=' text-2xl'/>
        <AiOutlineMail className=' text-2xl ml-8'/>

      </Flex>
    </Flex>
    </Container>
  )
}

export default Navbar