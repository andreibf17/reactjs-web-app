import React from "react";
import "./CallUs.css";
import { Icon } from "semantic-ui-react";

const CallUs = () => {
  return (
    <div className={"wrapper"}>
      <a id={"button"} href={"tel:+40743792091"}>
        <Icon name={"phone"} size={"big"} className={"phoneIcon"} />
      </a>
    </div>
  );
};

export default CallUs;
