import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, graphql, http } from "msw";
import { catResponse } from "../__test__/CatResponse";
import "whatwg-fetch";
import { render } from "vue";

export const restHandlers = [
  http.get(
    "https://staging.mazaady.com/api/v1/get_all_cats",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(catResponse));
    }
  ),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
