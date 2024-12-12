export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portafolio",
  description: "Diego Valenzuela González - Developer Front-End and VideoGames",
  navItems: [
    {
      label: "Sobre Mí",
      href: "/",
    },
    {
      label: "Proyectos",
      href: "/projects",
    },
    {
      label: "Curriculum",
      href: "/Curriculum",
    },
    {
      label: "Habilidades",
      href: "/skills",
    },
    {
      label: "Contacto",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Dazetazo",
    twitter: "/",
    docs: "/",
    discord: "/",
    sponsor: "https://ko-fi.com/diegodev",
    contact: "/",
  },
};
