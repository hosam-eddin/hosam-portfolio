import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubLine,
  RiFacebookFill,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex gap-x-5 text-xl">
      <Link
        href={"https://www.linkedin.com/in/hosam-sharaf-570245284/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href="mailto:hosamsharafxi@gmail.com"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=100007870787693"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookFill />
      </Link>
      <Link
        href={"https://wa.me/01102507988"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"https://github.com/hosam-eddin"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
