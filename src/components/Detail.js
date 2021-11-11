import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Card, Button, Popconfirm } from "antd";

const { Meta } = Card;

function Detail() {
  let location = useLocation();
  const history = useHistory();

  const text = "Are you sure to go to detail news?";

  const confirm = () => {
    window.open(
      location?.state?.url,
      "_blank" 
    );
  };
  console.log("match:::", location);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>NEWS DETAIL</h1>
      <Button onClick={() => history.goBack()} type="primary">
        Back
      </Button>
      <div style={{ width: "80%" }}>
        <Card
          style={{ margin: 10 }}
          hoverable="true"
          cover={
            <img
              alt="news image"
              src={location?.state?.urlToImage}
              style={{ objectFit: "contain", width: "100%", maxHeight: "50%" }}
            />
          }
        >
          <Meta
            title={
              // <a href={location?.state?.url} target="_blank">
              //   {location?.state?.title}
              // </a>
              <Popconfirm
                placement="topRight"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <Button>{location?.state?.title}</Button>
              </Popconfirm>
            }
            description={location?.state?.content}
          />
        </Card>
      </div>
    </div>
  );
}

export default Detail;
