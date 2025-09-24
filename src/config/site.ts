const links = {
  x: "https://twitter.com/sample",
  github: "https://github.com/sample/furniture",
  githubAccount: "https://github.com/sample",
  discord: "https://discord.com/users/sample",
};

export const siteConfig = {
  name: "Diabetes Blog",
  subTitle: "Welcome to diabetes blog",
  title: "Medical Knowledge and Everything You Need to Know",
  description:
    "Diabetes Blog is your trusted source for tips, news, and support on living with diabetes. From healthy recipes and lifestyle advice to the latest treatment updates, we help you take control and live well every day.",
  links,
  mainNav: [
    {
      menu: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Blog",
          href: "blogs",
        },
        {
          title: "About Us",
          href: "about",
        },
        {
          title: "Contact",
          href: "contact",
        },
      ],
    },
  ],
  footerNav: [
    {
      title: "Diabetes Types",
      items: [
        {
          title: "Type 1 Diabetes",
          href: "/types/seating",
          external: true,
        },
        {
          title: "Type 2 Diabetes",
          href: "/types/lying",
          external: true,
        },
        {
          title: "Gestational Diabetes",
          href: "/types/entertainment",
          external: true,
        },
        {
          title: "Prediabetes ",
          href: "/types/tables",
          external: true,
        },
        {
          title: "Other Rare Types",
          href: "/types/storage",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "X",
          href: links.x,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Discord",
          href: links.discord,
          external: true,
        },
      ],
    },
    {
      title: "Partner",
      items: [
        {
          title: "Shoppy",
          href: "https://shoppy.com",
          external: true,
        },
        {
          title: "Poppy",
          href: "https://poppy.com",
          external: true,
        },
        {
          title: "Talkie",
          href: "https://talkie.com",
          external: true,
        },
        {
          title: "coffee",
          href: "https://coffee.com",
          external: true,
        },
      ],
    },
  ],
};
