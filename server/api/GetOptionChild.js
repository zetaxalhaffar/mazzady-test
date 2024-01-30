import getToken from "./GetToken";

export default defineEventHandler(async (event) => {
  const token = getToken();
  const { id } = getQuery(event);

  const data = await $fetch(
    `https://staging.mazaady.com/api/v1/get-options-child/${id}`,
    {
      headers: {
        "private-key": token,
      },
    }
  );

  return data;
});
