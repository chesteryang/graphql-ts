import { ResolverMap } from "../../types/graphql-utils";
import { GQL } from "../../types/schema";
import { ChinookContext } from "../../chinookEntities/ChinookContext";

export const resolvers: ResolverMap = {
  Query: {
    employee: async (_, { id }: GQL.IEmployeeOnQueryArguments) => {
        const repo = await ChinookContext.Instance.Employees();
        const employee = await repo.findOne({employeeId: id});
        return employee ? {... employee, id: employee.employeeId}: null;
    },

    customer: async(_, {id}: GQL.ICustomerOnQueryArguments) => {
        const repo = await ChinookContext.Instance.Customers();
        const customer = await repo.findOne({customerId: id});
        return customer? {... customer, id: customer.customerId}: null;
    },

    album: async(_, {id}: GQL.IAlbumOnQueryArguments) => {
      const dbContext = ChinookContext.Instance;
      const albumRepo = await dbContext.Albums();
      const album = await albumRepo.findOne({albumId: id});
      if(album){
        const artistRepo = await dbContext.Artists();
        const artist = await artistRepo.findOne({artistId: album.albumId});
        const tracksRepo = await dbContext.Tracks();
        const tracks = tracksRepo.find({albumId: album.albumId})
        return {... album, artist, tracks}
      }
      return null;
    }
  }
}