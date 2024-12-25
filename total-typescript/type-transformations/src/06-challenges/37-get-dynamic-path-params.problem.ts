import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<T> = T extends `${infer _}:${infer Param}/${infer Rest}`
  ? { [Key in Param | keyof ExtractPathParams<Rest>]: string }
  : T extends `${infer _}:${infer Param}`
    ? { [Key in Param]: string }
    : {};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
