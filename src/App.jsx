import Student from "./props practice/Studen";

function App() {
  return (
    <div className="flex flex-col gap-7 py-10">
      <Student name = "Mubarak" age = {30}/>
      <Student name = "Habeeb" age = {20}/>
      <Student name = "Yusuf" age = {10}/>

      <Student name = "Mubarak"/>
    </div>
  )

}
export default App;