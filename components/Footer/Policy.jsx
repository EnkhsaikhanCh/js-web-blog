import { policyMenuData } from "@/data/policyMenuData";

export function Policy() {
  return (
    <>
      <div className="hidden gap-5 md:flex ">
        {policyMenuData.map((policy) => (
          <a
            key={policy.id}
            href={policy.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-2"
          >
            {policy.label}
          </a>
        ))}
      </div>
    </>
  );
}
