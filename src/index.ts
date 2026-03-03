import { Container } from "@cloudflare/containers";

type Env = {
  CONTAINER_DO: DurableObjectNamespace;
};

export class BinarygateContainer extends Container<Env> {}

export async function fetch(request: Request, env: Env): Promise<Response> {
  const id = env.CONTAINER_DO.idFromName("primary");
  return env.CONTAINER_DO.get(id).fetch(request);
}

export default { fetch };
