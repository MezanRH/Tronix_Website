

const List = ({text,className}) => {
  return (
    <li className={` font-open text-lg font-normal list-none ${className}`}>{text}</li>
  )
}

export default List