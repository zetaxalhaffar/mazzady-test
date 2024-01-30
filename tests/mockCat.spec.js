import AddProduct from "@/pages/AddProduct.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("Product page", () => {
  it("fetch and render all cats", async () => {
    const wrapper = mount(AddProduct);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
