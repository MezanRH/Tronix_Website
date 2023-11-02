import Container from '../Container'
import Flex from '../Flex'
import { AiOutlineInstagram,AiFillFacebook } from 'react-icons/ai'
import { BsTwitter,BsLinkedin } from 'react-icons/bs'
import { BiPhone,BiUser } from 'react-icons/bi'
import { HiOutlineMailOpen } from 'react-icons/hi'
import Paragraph from '../Paragraph'
const Topbar = () => {
  return (
    <Container>
    <Flex>
      <Flex className='w-1/2'>
        <AiOutlineInstagram className=' mr-5 text-xl cursor-pointer'/>
        <AiFillFacebook className=' mr-5 text-xl cursor-pointer'/>
        <BsTwitter className=' mr-5 text-xl cursor-pointer'/>
        <BsLinkedin className='text-xl cursor-pointer'/>
      </Flex>
      <Flex className='w-1/2 justify-end text-secound'>
        <Flex className="mr-5">
          <BiPhone className=' text-primary text-xl mr-2 mt-1'/>
          <Paragraph text="+12 345 6789 0"/>
        </Flex>
        <Flex className="mr-5">
          <HiOutlineMailOpen className=' text-primary text-xl mr-2 mt-1'/>
          <Paragraph text="support@tronix.com"/>
        </Flex>
        <Flex>
          <BiUser className=' text-primary text-xl mr-2 mt-1'/>
          <Paragraph text="Account"/>
        </Flex>
      </Flex>
    </Flex>
    </Container>
  )
}

export default Topbar