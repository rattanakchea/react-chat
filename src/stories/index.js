import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Clock from "../components/Clock";
import CardItem from "../components/CardItem";
import TabCoditor from "../components/TabCoditor/TabCoditor";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Clock", module).add("simple clock", () => <Clock />);
storiesOf("CardItem", module).add("CardItem", () => (
  <CardItem item={{ front: "hello", back: "world" }} />
));

storiesOf("TabCoditor", module).add("TabCoditor", () => <TabCoditor />);
