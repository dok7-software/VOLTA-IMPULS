import type { ApiResponse } from "@/core/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function apiClient<T>(
  path: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    return { data: null as T, error: response.statusText };
  }

  const data = (await response.json()) as T;
  return { data };
}
