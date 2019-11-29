import React from "react";

interface Props {
  text: string;
}

const App: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

App.defaultProps = {
  text: "hello"
};
