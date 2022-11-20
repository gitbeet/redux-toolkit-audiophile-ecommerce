import InTheBox from "./InTheBox"
import '../css/InTheBoxList.css'

export default function InTheBoxList({includes}) {
  return (
    <div className="in-the-box-list">
      {includes.map((item,index) => <InTheBox key={index} item={item}/>)}
    </div>
  )
}
