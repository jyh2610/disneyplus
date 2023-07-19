import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function LoginModal() {
  const [swichModal, setSwichModal] = useState(false);
  return <div>{swichModal ? <LogIn /> : <SignUp />}</div>;
}

export default LoginModal;
