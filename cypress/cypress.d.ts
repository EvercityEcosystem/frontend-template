import { ApolloQueryResult, DefaultContext, OperationVariables } from "@apollo/client/core/types";
import { MutationOptions, QueryOptions } from "@apollo/client/core/watchQueryOptions";
import { ApolloCache } from "@apollo/client/cache";
import { FetchResult } from "@apollo/client/link/core";

declare global {
  namespace Cypress {
    interface Chainable {
      checkError(selector: string): Chainable<JQuery<HTMLElement>>;
      clickOutside(): Cypress.Chainable<JQuery<HTMLBodyElement>>;
      tree(selector: string, options: string[]): Chainable<JQuery<HTMLElement>>;
      choose(selector: string, options: string[]): Chainable<JQuery<HTMLElement>>;
      choose(selector: string, option: string): Chainable<JQuery<HTMLElement>>;
      getBySel(
        selector: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<JQuery<HTMLElement>>;
      query<T = any, TVariables extends OperationVariables = OperationVariables>(
        options: QueryOptions<TVariables, T>,
      ): Promise<ApolloQueryResult<T>>;
      mutate<
        TData = any,
        TVariables extends OperationVariables = OperationVariables,
        TContext extends Record<string, any> = DefaultContext,
        TCache extends ApolloCache<any> = ApolloCache<any>,
      >(
        options: MutationOptions<TData, TVariables, TContext>,
      ): Promise<FetchResult<TData>>;
    }
  }
}
