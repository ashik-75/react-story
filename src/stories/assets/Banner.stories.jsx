import Banner from "../../components/Banner";

export default {
  title: "VideoBanner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Basic = Template.bind({});

export const Complete = Template.bind({});

Complete.args = {
  complete: true,
};
