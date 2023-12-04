"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/redux/reducers/testReducer";
import { useRouter } from "next/navigation";
import Home from '@/app/Home/page';
const App = () => {

  return (
    <main>
      <div>
        <Home/>
      </div>
    </main>
  );
};
export default App;
