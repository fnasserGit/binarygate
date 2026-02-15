export async function onRequest() {
  return new Response("BinaryGate Functions are live.", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
