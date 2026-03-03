import { DurableObject } from "cloudflare:workers";

type Env = {
  CONTAINER_DO: DurableObjectNamespace;
};

export class BinarygateContainer extends DurableObject {}

async function handleRequest(request: Request, env?: Env): Promise<Response> {
  const binding =
    env?.CONTAINER_DO ?? (globalThis as { CONTAINER_DO?: DurableObjectNamespace }).CONTAINER_DO;

  if (!binding) {
    return new Response("Container binding not configured.", { status: 500 });
  }

  const id = binding.idFromName("primary");
  return binding.get(id).fetch(request);
}

export async function fetch(request: Request, env: Env): Promise<Response> {
  return handleRequest(request, env);
}

export default { fetch };

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
