import { useDispatch } from "react-redux";
import { useState } from "react";
import GradientBg from "../components/auth/GradientBg";
import { loginUser, registerUser } from "../app/slices/authSlice";
import { FormOne, FormTwo, FormThree,FinalForm} from "../components/auth/index";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formTurn, setFormTurn] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
    userName: "",
    fullName: "",
  });
  const [avatarCredential, setAvatarCredential] = useState(null);
  const [coverImageCredential, setCoverImageCredential] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    const registerResult  = await dispatch(
      registerUser({
        ...userCredential,
        avatarBlob: avatarCredential,
        coverBlob: coverImageCredential,
      })
    )
    if (registerResult?.type === "registerUser/fulfilled") {
      const userName = userCredential.userName;
      const email = userCredential.email
      const password = userCredential.password;
      const loginResult = await dispatch(
          loginUser({ userName,email, password })
      );

      if (loginResult?.type === "loginUser/fulfilled") {
          navigate("/TermsAndConditions");
      } else {
          navigate("/login");
      }
  }
    setLoading(false);
  };
  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <div className="text-white h-screen w-full flex flex-col gap-10 justify-center items-center p-6">
      <Header formTurn={formTurn} />
      {formTurn === 0 && (
        <FormOne
          setFormTurn={setFormTurn}
          setUserCredential={setUserCredential}
          buttonDisabled={buttonDisabled}
          setButtonDisabled={setButtonDisabled}
        />
      )}
      {formTurn === 1 && (
        <FormTwo
          setFormTurn={setFormTurn}
          setAvatarCredential={setAvatarCredential}
        />
      )}
      {formTurn === 2 && (
        <FormThree
          setFormTurn={setFormTurn}
          setCoverImageCredential={setCoverImageCredential}
        />
      )}
      {formTurn === 3 && (
        <FinalForm
          handleSubmit={handleSubmit}
          setFormTurn={setFormTurn}
          loading={loading}
          userCredential={userCredential}
          avatarCredential={avatarCredential}
          coverImageCredential={coverImageCredential}
        />
      )}
    </div>
  );
}

function Header({ formTurn }) {
  return (
    <div className="h-[10%] w-[35%] flex  items-center">
      <StepBox no={1} active={formTurn === 0} />
      <div
        className={`w-[40%] h-[2px] ${
          formTurn === 1
            ? "bg-gradient-to-tl to-[#562F7C] from-[#D52F79]"
            : "bg-white"
        }`}
      ></div>
      <StepBox no={2} active={formTurn === 1} />
      <div
        className={`w-[40%] h-[2px] ${
          formTurn === 2
            ? "bg-gradient-to-tl to-[#562F7C] from-[#D52F79]"
            : "bg-white"
        }`}
      ></div>
      <StepBox no={3} active={formTurn === 2} />
      <div
        className={`w-[40%] h-[2px] ${
          formTurn === 3
            ? "bg-gradient-to-tl to-[#562F7C] from-[#D52F79]"
            : "bg-white"
        }`}
      ></div>
      <StepBox no={4} active={formTurn === 3} />
    </div>
  );
}

function StepBox({ no, active }) {
  return (
    <GradientBg
      style1={"p-8"}
      style3={
        "flex text-3xl font-bold justify-center items-center " +
        `${active ? "bg-gradient-to-tl to-[#562F7C] from-[#D52F79]" : ""}`
      }
    >
      {no}
    </GradientBg>
  );
}

export default Register;
