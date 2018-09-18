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
    },
    getCustomer: async(_, {id}: GQL.IGetCustomerOnQueryArguments) => {
        const repo = await ChinookContext.Instance.Customers();
        const customer = await repo.findOne({CustomerId: id});
        if(customer){
            return {
                id: customer.CustomerId,
                firstName: customer.FirstName,
                lastName: customer.LastName,
                email: customer.Email,
                company: customer.Company
            }
        }
        return null;        
    }

  }
}