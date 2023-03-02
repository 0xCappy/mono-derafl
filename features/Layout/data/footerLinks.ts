import { FooterLinksProps } from "../components/Footer";

const footerLinks: FooterLinksProps = {
  data: [
    {
      "title": "Explore",
      "links": [
        {
          "label": "Raffles",
          "link": "raffles"
        },
        {
          "label": "Accounts",
          "link": "accounts"
        },
        {
          "label": "Purchases",
          "link": "purchases"
        },
      ]
    },
    {
      "title": "Socials",
      "links": [
        {
          "label": "Discord",
          "link": "https://discord.gg/Fr9Dau9C",
          newTab: true
        },
        {
          "label": "Twitter",
          "link": "https://twitter.com/derafl_",
          newTab: true
        },
        {
          "label": "Medium",
          "link": "https://hellfirelabs.medium.com",
          newTab: true
        },
      ]
    },
    {
      "title": "Knowledge",
      "links": [
        {
          "label": "Documentation",
          "link": "https://docs.derafl.com",
          newTab: true
        },
        {
          "label": "FAQ",
          "link": "#",
          newTab: false
        },
        {
          "label": "Etherscan",
          "link": "https://goerli.etherscan.io/address/0xE109e34C8a1DCA47822e1D8b5eaF9f47e9b81A3C",
          newTab: true
        },
      ]
    }
  ]
}


export default footerLinks