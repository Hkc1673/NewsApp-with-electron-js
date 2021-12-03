import "./Main.css";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiRequest } from "../store/actions";
import {
  Input,
  DatePicker,
  Card,
  Menu,
  Dropdown,
  Button,
  Spin,
  Space,
} from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const { Meta } = Card;

function App() {
  const { articles, fetching } = useSelector((state) => state);
  const dispatch = useDispatch();

  const today = new Date().toISOString().slice(0, 10);

  const [query, setQuery] = useState("tesla");
  const [from, setFrom] = useState(today);
  const [sortBy, setSortBy] = useState("Select Sort By...");
  const [data, setData] = useState(null);

  useLayoutEffect(() => {
    getTable();
  }, []);

  useEffect(() => {
    setData(articles);
  }, [articles]);

  const getTable = () => {
    dispatch(apiRequest(query, from, sortBy));
  };

  function onChangeText(e) {
    setQuery(e.target.value);
  }

  function onChangeDate(value, dateString) {
    setFrom(dateString);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (query && from) {
      getTable();
    } else {
      alert("Enter search text and date");
    }
  }
  function handleMenuClick(e) {
    setSortBy(e.item.props.children[1]);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="">Select Sort By...</Menu.Item>
      <Menu.Item key="1">publishedAt</Menu.Item>
      <Menu.Item key="2">popularity</Menu.Item>
      <Menu.Item key="3">relevancy</Menu.Item>
    </Menu>
  );

  return (
    <div className="App">
      <h1>NEWS APP</h1>
      <div className="site-input-group-wrapper">
        <form onSubmit={onSubmit} className="form">
          <div>
            <Input.Group compact>
              <Input
                style={{ width: "50%" }}
                placeholder="Enter Search Text....."
                onChange={onChangeText}
                allowClear
              />
              <DatePicker
                style={{ width: "50%" }}
                onChange={onChangeDate}
                allowClear
              />
            </Input.Group>
          </div>
          <div>
            <Dropdown overlay={menu}>
              <Button>{sortBy}</Button>
            </Dropdown>
          </div>
          <div>
            <Button htmlType="submit" type="primary">
              Search
            </Button>
          </div>
        </form>
      </div>
      <div className="card">
        {data ? (
          data.map(
            ({ title, urlToImage, url, description, author, content }) => (
              <div style={{ maxHeight: 400 }}>
                <Link
                  to={{
                    pathname: `/detail/${author}`,
                    state: { title, urlToImage, author, description, url },
                  }}
                >
                  <Card
                    style={{ width: 300, margin: 2 }}
                    hoverable="true"
                    cover={
                      <img
                        alt="news image"
                        src={urlToImage}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          maxHeight: "50%",
                        }}
                      />
                    }
                  >
                    <Meta title={title} description={description} />
                  </Card>
                </Link>
              </div>
            )
          )
        ) : fetching ? (
          <Space size="middle">
            <Spin size="large" />
          </Space>
        ) : (
          <h3>No Data</h3>
        )}
      </div>
    </div>
  );
}

export default React.memo(App);
