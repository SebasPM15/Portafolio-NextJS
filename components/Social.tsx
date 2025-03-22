import Link from "next/link";
import path from "path";
import {FaGithub, FaLinkedinIn, FaTwitter, FaFacebook} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/SebasPM15'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/mateo-pilco-1703611a9/'},
    {icon: <FaFacebook/>, path: 'https://www.facebook.com/sebaspm15'},
    {icon: <FaTwitter/>, path: 'https://x.com/MateoPilco'},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social;