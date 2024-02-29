import Header from "../Components/Header";
import Div1 from "../Components/div1";
import Div2 from "../Components/div2";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-50">
        <Header></Header>
        <Div1></Div1>
        <Div2></Div2>
      </div>
    </div>
  );
}
