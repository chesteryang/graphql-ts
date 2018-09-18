// tslint:disable
// graphql typescript definitions

export declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    employee: IEmployee | null;
    customer: ICustomer | null;
    album: IAlbum | null;
    hello: string;
    bye: string | null;
  }

  interface IEmployeeOnQueryArguments {
    id: number;
  }

  interface ICustomerOnQueryArguments {
    id: number;
  }

  interface IAlbumOnQueryArguments {
    id: number;
  }

  interface IHelloOnQueryArguments {
    name?: string | null;
  }

  interface IEmployee {
    __typename: 'Employee';
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
  }

  interface ICustomer {
    __typename: 'Customer';
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string | null;
    city: string | null;
    country: string | null;
    postalCode: string | null;
    phone: string | null;
    company: string | null;
  }

  interface IAlbum {
    __typename: 'Album';
    id: number;
    title: string;
    artist: IArtist | null;
    tracks: Array<ITrack> | null;
  }

  interface IArtist {
    __typename: 'Artist';
    id: number;
    name: string;
  }

  interface ITrack {
    __typename: 'Track';
    id: number;
    name: string;
    unitPrice: number;
  }

  interface IMutation {
    __typename: 'Mutation';
    register: Array<IError>;
  }

  interface IRegisterOnMutationArguments {
    email: string;
    password: string;
  }

  interface IError {
    __typename: 'Error';
    path: string;
    message: string;
  }
}

// tslint:enable
