import { ParseObjectBase } from '.';

export default interface Collection extends ParseObjectBase {
  contractAddress: string;
  name: string;
  symbol: string;
  schema: string;
  contractCreatedAt: Date;
  website: string;
  description: string;
  imageUrl: string;
  bannerImageUrl: string;
  totalSupply: number
  discordUrl: string;
  openseaHidden: boolean;
  openseaSafelistStatus: string;
  openseaSubjectToWhitelist: boolean;
  mediumUsername: string;
  shortDescription: string;
  openseaSlug: string;
  telegramUrl: string;
  twitterUsername: string;
  instagramUsername: string;
  wikiUrl: string;
  nsfw: boolean;
  chainId: string
}
