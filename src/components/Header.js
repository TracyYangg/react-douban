import React, { Component } from "react";
import Flex from "./Flex";
import Text from "./Text";
import Icon from "./Icon";
import StyleHoc from "./StyleHoc";

type Props = {
  title?: any,
  renderRightComponents?: Functiom,
  showBack?: boolean,
  headerHeight?: string
};

@StyleHoc
class Header extends Component {
  props: Props;

  render() {
    const {
      title,
      renderRightComponents,
      showBack,
      headerHeight,
      ...args
    } = this.props;
    return (
      <Flex
        className="dividend padding-horizontal-15"
        justifyContent="center"
        {...args}
        style={{ height: headerHeight }}
      >
        <Flex flex={1} flexDirection="row" alignItems="center">
          {showBack && (
            <Flex>
              <Icon name="back" size="20px" className="margin-top-5" />
              <Text size="llarger">返回</Text>
            </Flex>
          )}
        </Flex>
        <Flex flex={3} alignItems="center" justifyContent="center">
          <Text size="llarger">{title}</Text>
        </Flex>
        <Flex flex={1} alignItems="center" justifyContent="flex-end">
          {renderRightComponents && renderRightComponents()}
        </Flex>
      </Flex>
    );
  }
}

Header.defaultProps = {
  showBack: true
};

export default Header;
