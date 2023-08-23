export const imgPath = (path:string | undefined) => {
  return path ? `${import.meta.env.STRAPI_URL}${path}` : '';
}
