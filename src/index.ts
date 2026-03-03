import { DurableObject } from "cloudflare:workers";

type Env = {
  CONTAINER_DO: DurableObjectNamespace;
};

export class BinarygateContainer extends DurableObject {
  async fetch(request: Request): Promise<Response> {
    return new Response("Container is running", { status: 200 });
  }
}

export async function fetch(request: Request, env: Env): Promise<Response> {
  const id = env.CONTAINER_DO.idFromName("primary");
  return env.CONTAINER_DO.get(id).fetch(request);
}

export default { fetch };
