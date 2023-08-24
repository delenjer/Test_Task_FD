interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

export const PRODUCT_URL = 'products?populate=*';

export default async function fetchApi<T>({
  endpoint,
  query,
}: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  try {
    const res = await fetch(url.toString());

    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data from the API");
  }
}
