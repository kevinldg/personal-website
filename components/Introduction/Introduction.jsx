import Image from "next/image";
import ContactButton from "./ContactButton";
import IntroductionText from "./IntroductionText";

export default function Introduction() {
  return (
    <div className="flex px-20 py-8 justify-between items-center">
      <div className="flex flex-col gap-4">
        <IntroductionText />
        <ContactButton />
      </div>
      <div className=" bg-dark-300 px-4 pt-4 rounded">
        <Image src={"/avatar.png"} alt="Avatar" width={248} height={248} />
      </div>
    </div>
  );
}
