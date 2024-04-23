import Component from "./usa-time-picker.twig";

export default {
  title: "Components/Form Inputs/Time Picker",
  argTypes: {
    disabled_state: {
      name: "Disabled state",
      control: { type: "radio" },
      options: ["none", "disabled", "aria-disabled"],
    },
    error_state: {
      name: "Error state",
      control: { type: "boolean" },
      defaultValue: false
    },
  },
};

const Template = (args) => Component(args);

export const TimePicker = Template.bind({});

export const TimePickerDefaultValue = Template.bind({});
TimePickerDefaultValue.args = {
  defaultValue: "1:00pm",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled_state: "disabled",
};

export const AriaDisabled = Template.bind({});
AriaDisabled.args = {
  disabled_state: "aria-disabled",
};

export const Error = Template.bind({});
Error.args = {
  error_state: true,
};
