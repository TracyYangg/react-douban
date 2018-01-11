import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Text, Flex, Icon } from "../../components";
import { homeList } from "./constants";
import "./home.scss";
import HotPlay from "./hotPlay/HotPlay";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    return (
      <Tabs
        className="home"
        onSelect={tabIndex => {
          this.setState({ index: tabIndex });
        }}
      >
        <TabList className="tab-list padding-0 margin-0 footer-height">
          {homeList.map((item, index) => {
            const isEqualIndex = index === this.state.index;
            return (
              <Tab key={item.title}>
                <Flex
                  flexDirection="column"
                  style={{ height: "100%" }}
                  justifyContent="center"
                >
                  <Flex justifyContent="center">
                    <Icon
                      name={item.iconName}
                      size="20px"
                      color={isEqualIndex ? "primaryColor" : "#404040"}
                    />
                  </Flex>
                  <Flex justifyContent="center">
                    <Text color={isEqualIndex ? "primaryColor" : "#404040"}>
                      {item.title}
                    </Text>
                  </Flex>
                </Flex>
              </Tab>
            );
          })}
        </TabList>

        <TabPanel>
          <HotPlay />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Home;
