declare global {
  namespace GraphQLModules {
    interface GlobalContext {
      request: Request;
    }
  }
}
