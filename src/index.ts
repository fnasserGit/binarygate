import { DurableObject } from "cloudflare:workers";

type Env = {
  CONTAINER_DO: DurableObjectNamespace;
};

export class BinarygateContainer extends DurableObject {}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const id = env.CONTAINER_DO.idFromName("primary");
    return env.CONTAINER_DO.get(id).fetch(request);
  },
};
