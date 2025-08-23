import Student from "./props practice/Studen";

function App() {
  return (
    <div className="flex flex-col gap-7">
      <Student name = "Mubarak" age = {30}/>
      <Student name = "Habeeb" age = {20}/>
    </div>
  )

}
export default App;