import createClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "aaumbjz1",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-17",
  token:
    "skwSYAn1bAkn6QF0qRn5rsZzwCSvDRmJwb2zpyBHbya6wQLkwRCoNqkDnTyGaA1DXhZW1pjwf6dHsCrjuuQ6prj94zyGt4MXOGjW2IYgxZNwukJcjLZXTpBHJyLKWVJHYIk43m6SCoPmjCcSlCXf8xNw1DXk2vjyilmm9PWibkJ5Ip4mSOp8",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
