import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/hak_raj.svg"
      alt="hak_raj Logo"
      className="dark:invert"
      width={100}
      height={30}
      priority
    />

  )
}

export default Logo;