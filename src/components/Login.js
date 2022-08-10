import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  console.log(inpval);

  const getData = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("user");
    console.log(getUserArr);

    const { email, password } = inpval;

    if (email === "") {
      alert("이메일을 입력하세요.");
    } else if (!email.includes("@")) {
      alert("이메일 주소를 다시 확인해주세요.");
    } else if (password === "") {
      alert("비밀번호는 입력하세요.");
    } else if (password.length < 5) {
      alert("5자 길이 이상의 비밀번호를 사용하세요.");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);

        const userLogin = userData.filter((v, i) => {
          return v.email === email && v.password === password;
        });

        if (userLogin.length === 0) {
          alert("이메일 또는 비밀번호를 잘못 입력했습니다. ");
        } else {
          console.log("로그인되었습니다.");

          localStorage.setItem("user_login", JSON.stringify(userLogin));

          history("/details");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 pt-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-8">로그인</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="이메일"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="비밀번호"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={addData}
                className="col-lg-8"
                style={{ background: "rgb(67, 185, 127)" }}
              >
                로그인
              </Button>
            </Form>
            <p className="mt-3">
              계정이 아직 없으시다면{" "}
              <span>
                <NavLink to="/">회원가입</NavLink>
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
