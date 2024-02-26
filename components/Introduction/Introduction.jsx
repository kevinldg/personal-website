import Image from "next/image";
import ContactButton from "./ContactButton";
import IntroductionText from "./IntroductionText";

export default function Introduction() {
  return (
    <div className="flex desktop:px-[25vw] px-8 py-8 justify-between gap-8 items-center">
      <div className="flex flex-col gap-4">
        <IntroductionText />
        <ContactButton />
      </div>
      <div className=" bg-dark-300 hidden tablet:block px-4 pt-4 shadow-lg rounded">
        <Image src={"/avatar.png"} alt="Avatar" width={248} height={248} />
      </div>
    </div>
  );
}
