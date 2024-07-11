import { Link } from "lucide-react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const social = [
  {
    icon: <FaGithub />,
    path: "https://github.com/guptamudit",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mudit-gupta-830720227/",
  },
  {
    icon: <FaCode />,
    path: "https://leetcode.com/u/opguptamudit27/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <a key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
