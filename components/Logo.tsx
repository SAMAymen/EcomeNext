import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      className="cursor-pointer rounded-full"
      alt="logo"
      width={150}
      height={120}
    />
  );
};

export default Logo;
