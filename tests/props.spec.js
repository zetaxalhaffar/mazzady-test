import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import MazzadyButton from "@/components/MazzadyButton.vue";

describe('pass props through component', () => {
  test('props passed correctly', async () => {
    expect(MazzadyButton).toBeTruthy()

    const wrapper = mount(MazzadyButton, {
      props: {
        text: "Add Review"
      }
    })

    expect(wrapper.text()).toContain("Add Review")
  })
})