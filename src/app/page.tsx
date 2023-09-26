import BasicButton from "@/components/commons/BasicButton";
import BasicInput from "@/components/commons/BasicInput";
import HomeTemplate from "@/components/pages/Home/HomeTemplate";

export default function Home() {
  return (
    <HomeTemplate
      Id={<BasicInput label="아이디" />}
      Password={<BasicInput label="비밀번호" />}
      SubmitButton={<BasicButton text="로그인" />}
    />
  );
}
