export async function fetchRetry(n: number, input: RequestInfo, init?: RequestInit): Promise<Response> {
  try {
    return await fetch(input, init);
  } catch (err) {
    if (n === 1) {
      throw err;
    }
    return await fetchRetry(n - 1, input, init);
  }
}