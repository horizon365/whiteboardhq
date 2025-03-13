export default defineAppConfig({
  general: {
    title: 'Whiteboard Directory',
    logo: '',
    iconLogo: 'fluent-emoji-flat:leaf-fluttering-in-wind',
    language: 'en',
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: 'Whiteboard Directory',
    description: 'Discover the best online whiteboard tools for collaboration, education, design, brainstorming, and more. Whiteboard Hub offers a comprehensive directory to help you find the perfect whiteboard solution for your needs.',
    url: 'https://whiteboardhq.com',
    favicon: {
      image: '',
      emoji: '🍃',
    },
  },
  directory: {
    listingPageLayout: 'card',
    search: {
      placeholder: 'Search among {0} tools',
      icon: 'tabler:bow',
      tags: {
        // options: none,select,show-all,
        display: 'select',
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: 'Seems that this entry is missing from the archives.',
        // options: button, simple, link
        type: 'button',
        icon: 'tabler:exclamation-mark',
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: 'shadow',
      },
      submit: {
        show: true,
        first: false,
        title: 'Submit a template',
        description:
          'Submit a template to show off a good project to other people.',
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: 'tabler:star',
      labelForCard: 'Featured ✨',
    },
    tags: [
      { name: 'no-login-signin-account', color: 'blue' },
      { name: 'for-kids', color: 'green' },
      { name: 'add-images' },
      { name: 'drawing' },
      { name: 'at-home' },
      { name: 'working-together' },
    ],
    tagPages: {
      title: 'Available {0} products:',
      description:
        'View all available tools and templates in the {0} category...',
    },
  },
  header: {
    banner: {
      show: true,
      text: 'Find your favorite whiteboard in minutes.',
      link: 'https://whiteboardhq.com',
      brandText: 'Whiteboard HQ',
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: 'Directory', to: '/' },
        { name: 'Blog', to: '/blog' },
        { name: 'Advertise', to: '/advertise' },
        // {
        //   name: 'Analytics',
        //   to: 'https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ',
        //   target: '_blank',
        // },
      ],
    },
    actionButton: {
      text: 'Submit a listing',
      href: '/submit',
    },
  },
  footer: {
    description: "Best directory for whiteboard HQ.",
    navigation: [
      {
        title: "Directory", links: [{ title: "Submit", link: "/submit" }, { title: "Advertise", link: "/advertise" }],
      },
      {
        title: "Categories", links: [
          { title: "No Login/SignIn/Account", link: "/tags/no-login-signin-account" },
          { title: "For Kids", link: "/tags/for-kids" },
          { title: "Add Images", link: "/tags/add-images" },
          { title: "Drawing", link: "/tags/drawing" },
          { title: "At Home", link: "/tags/at-home" },
          { title: "Working Together", link: "/tags/working-together" },
        ],
      },
      {
        title: "Blog", links: [{ title: "Articles", link: "/blog" }],
      },
      {
        title: "Legal", links: [
            { title: "Privacy Policy", link: "/legal/terms-of-service" },
            { title: "Terms of Service", link: "/legal/privacy-policy" },
            { title: "Featured on Startup Fame", link: "https://startupfa.me/s/whiteboard-directory?utm_source=whiteboardhq.com" },
        ],
      },
    ],
    socials: {
      github: {
        link: '',
        icon: 'tabler:brand-github',
      },
      facebook: {
        link: '',
        icon: 'tabler:brand-facebook',
      },
      instagram: {
        link: '',
        icon: 'tabler:brand-instagram',
      },
      x: {
        link: 'https://x.com/horizon365',
        icon: 'tabler:brand-twitter',
      },
      youtube: {
        link: 'https://www.youtube.com/@horizon365',
        icon: 'tabler:brand-youtube',
      },
    },
  },
  ui: {
    icons: {
      dark: 'tabler:moon',
      light: 'tabler:sun',
    },
  },
});
