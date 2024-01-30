import getToken from "./GetToken";

export default defineEventHandler(async (event) => {
  const token = getToken();
  const data = await $fetch("https://staging.mazaady.com/api/v1/get_all_cats", {
    headers: {
      "private-key": token,
    },
  });

  return data.data
});
