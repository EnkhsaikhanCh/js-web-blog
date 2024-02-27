import { socialData } from "@/data/socialDate";

export function SocialMediaLinks() {
  return (
    <div className="flex flex-col items-center gap-2">
      <ul className="flex h-full w-[80px] flex-col gap-2 text-[#ADBAC7]">
        {socialData.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-2"
          >
            {social.label}
          </a>
        ))}
      </ul>
    </div>
  );
}
