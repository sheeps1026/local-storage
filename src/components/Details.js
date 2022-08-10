import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";

const Details = () => {
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);

  const history = useNavigate();

  const todayDate = new Date().toISOString().slice(0, 10);
  // console.log(todayDate);

  const Birthday = () => {
    const getUser = localStorage.getItem("user_login");

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      // console.log(user);

      setLoginData(user);

      const userBirth = loginData.map((v, i) => {
        return v.date === todayDate;
      });

      if (userBirth) {
        setTimeout(() => {
          console.log("ok");
        }, 3000);
      }
    }
  };

  const userLogout = () => {
    localStorage.removeItem("user_login");

    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {loginData.length === 0 ? (
        "에러"
      ) : (
        <div className="container mt-3">
          <section className="d-flex justify-content-between">
            <div className="left_data mt-3 pt-3" style={{ width: "100%" }}>
              <h3 className="text-center col-lg-8">사용자 정보</h3>
              <Form>
                <Form.Group className="mb-3 col-lg-8">
                  <label htmlFor="">이름</label>
                  <Form.Control
                    type="text"
                    placeholder={loginData[0].name}
                    disabled
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8">
                  <label htmlFor="">이메일</label>
                  <Form.Control
                    type="text"
                    placeholder={loginData[0].email}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8">
                  <label htmlFor="">생년월일</label>
                  <Form.Control
                    type="text"
                    placeholder={loginData[0].date}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8">
                  <label htmlFor="">비밀번호</label>
                  <Form.Control
                    type="text"
                    placeholder={loginData[0].password}
                    disabled
                  />
                </Form.Group>
              </Form>

              <Button
                variant="primary"
                type="submit"
                onClick={userLogout}
                className="col-lg-8"
                style={{ background: "rgb(67, 185, 127)" }}
              >
                로그아웃
              </Button>
            </div>
            <Sign_img />
          </section>
        </div>
      )}
    </>
  );
};

export default Details;
