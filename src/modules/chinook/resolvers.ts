import { ResolverMap } from "../../types/graphql-utils";
import { GQL } from "../../types/schema";
import { ChinookContext } from "../../chinookEntities/ChinookContext";

export const resolvers: ResolverMap = {
  Query: {
    getEmployee: async (_, { id }: GQL.IGetEmployeeOnQueryArguments) => {
        const repo = await ChinookContext.Instance.Employees();
        const employee = await repo.findOne({EmployeeId: id});
        if(employee){
            return {
                id: employee.EmployeeId,
                firstName: employee.FirstName,
                lastName: employee.LastName,
                title: employee.Title,
                email: employee.Email
            }
        }
        return null;
    }
  }
}