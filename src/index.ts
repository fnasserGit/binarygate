type ContainerBinding = {
  fetch: (request: Request) => Promise<Response> | Response;
};

type Env = {
  CONTAINER?: ContainerBinding;
  container?: ContainerBinding;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const binding = env.CONTAINER ?? env.container;
    if (binding) {
      return binding.fetch(request);
    }
    return new Response("Container binding not configured.", { status: 500 });
  },
};
