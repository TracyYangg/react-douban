import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getNowPlaying } from "./api";
import { Loading, Text, Flex } from "../../components";
import "./home.scss";

class Home extends Component {
  componentDidMount() {
    console.log(11111111);
    getNowPlaying();
  }

  render() {
    return (
      <Tabs className="home ">
        <TabList className="tab-list margin-0 padding-vertical-15">
          <Tab>
            <Flex justifyContent="center">
              <Text color="primaryColor">热映</Text>
            </Flex>
          </Tab>
          <Tab>
            <Flex justifyContent="center">
              <Text>找片</Text>
            </Flex>
          </Tab>
          <Tab>
            <Flex justifyContent="center">
              <Text>我的</Text>
            </Flex>
          </Tab>
        </TabList>

        <TabPanel>
          <Loading overly />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Home;
