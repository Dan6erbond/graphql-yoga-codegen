/* eslint-disable */
import * as Types from "@graphql/types";
import * as gm from "graphql-modules";
export namespace ScalarsModule {
  export type Scalars = Pick<Types.Scalars, 'Date'>;
  export type DateScalarConfig = Types.DateScalarConfig;
  
  export interface Resolvers {
    Date?: Types.Resolvers['Date'];
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
  };
}