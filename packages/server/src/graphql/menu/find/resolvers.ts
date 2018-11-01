import { ResolverMap } from "../../../types/graphql-utils";
import { Menu } from "../../../models/Menu";

export const resolvers: ResolverMap = {
  Menu: {
    owner: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    findMenus: async (_, __, {session}) => {
      // TODO: maybe this cache approach is not the best if we think in multiple instances
      // const listings = (await redis.lrange(listingCacheKey, 0, -1)) || [];
      // return listings.map((x: any) => JSON.parse(x));
      return Menu.find({
        where: {
          userId: session.userId
        }
      });
    }
  }
};
