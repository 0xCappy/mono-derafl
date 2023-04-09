import { buildAddressUrl } from "@/common/utils";
import { FooterLinksProps } from "../components/Footer";

const footerLinks: FooterLinksProps = {
  data: [
    {
      "title": "Explore",
      "links": [
        {
          "label": "Raffles",
          "link": "/raffles"
        },
        {
          "label": "Accounts",
          "link": "/accounts"
        },
        {
          "label": "Purchases",
          "link": "/purchases"
        },
      ]
    },
    {
      "title": "Collections",
      "links": [
        {
          "label": "Royalty Setter",
          "link": "/royalty"
        }
      ]
    },
    {
      "title": "Socials",
      "links": [
        {
          "label": "Discord",
          "link": "https://discord.com/invite/XcaNs5c7c7",
          newTab: true
        },
        {
          "label": "Twitter",
          "link": "https://twitter.com/derafl_",
          newTab: true
        },
        // {
        //   "label": "Medium",
        //   "link": "https://hellfirelabs.medium.com",
        //   newTab: true
        // },
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
          "label": "Terms of service",
          "link": "/terms",
          newTab: false
        },
        {
          "label": "Etherscan",
          "link": buildAddressUrl(process.env.NEXT_PUBLIC_CHAIN_ID!, process.env.NEXT_PUBLIC_DERAFL_ADDRESS!),
          newTab: true
        },
      ]
    }
  ]
}

export default footerLinks