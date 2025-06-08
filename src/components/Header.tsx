import Link from "next/link";

export function Header() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        bg-transparent
        fade-slide fade-delay-1   /* header container fades in first */
        py-[20px]                 /* padding: 20px 0 */
      "
    >
      <div
        className="
          flex items-center justify-between
          px-[20px]
        "
      >
        {/* Logo (left) */}
        <Link href="/" className="fade-slide fade-delay-2 flex-shrink-0">
          <img
            id="logo"
            src="/assets/images/saudade_logo_white.png"
            alt="Saudade Logo"
            className="max-h-[40px] w-auto"
          />
        </Link>

        {/* Nav (right) */}
        <nav className="fade-slide fade-delay-3">
          <ul className="flex list-none gap-[30px]">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative inline-block group no-underline"
                >
                  <span className="text-[#f1f1f1] font-bold text-[1.1rem] py-[5px] block">
                    {label}
                  </span>
                  {/* underline bar */}
                  <span
                    className="
                      absolute -bottom-[2px] left-0
                      w-full h-[2px] bg-[#b8860b]
                      origin-left scale-x-0 transform
                      transition-transform duration-300 ease
                      group-hover:scale-x-100
                    "
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
