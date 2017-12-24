import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getNowPlaying } from "./api";
import { Loading, Text } from "../../components";

class Home extends Component {
  componentDidMount() {
    getNowPlaying();
  }

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>
            <Text weight="bolder">热映</Text>
          </Tab>
          <Tab>
            <Text>找片</Text>
          </Tab>
          <Tab>
            <Text>我的</Text>
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
