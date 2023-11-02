

const Paragraph = ({text,className }) => {
  return (
    <h4 className={` font-open font-normal text-lg text-secound ${className}`}>{text}</h4>
  )
}

export default Paragraph