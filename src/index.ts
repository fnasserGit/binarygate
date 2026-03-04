import { Container } from "@cloudflare/containers";
import type { DurableObjectNamespace } from "cloudflare:workers";

type Env = {
  CONTAINER_DO: DurableObjectNamespace;
};

export class BinarygateContainer extends Container<Env> {
  defaultPort = 3000;
}

export async function fetch(request: Request, env: Env): Promise<Response> {
  const id = env.CONTAINER_DO.idFromName("primary");
  return env.CONTAINER_DO.get(id).fetch(request);
}

export default { fetch };
