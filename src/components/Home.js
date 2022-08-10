import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";

const Home = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
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

    const { name, email, date, password } = inpval;

    if (name === "") {
      alert("이름은 필수 정보입니다.");
    } else if (email === "") {
      alert("이메일은 필수 정보입니다.");
    } else if (!email.includes("@")) {
      alert("이메일 주소를 다시 확인해주세요.");
    } else if (date === "") {
      alert("생년월일은 필수 정보입니다.");
    } else if (password === "") {
      alert("비밀번호는 필수 정보입니다.");
    } else if (password.length < 5) {
      alert("5자 길이 이상의 비밀번호를 사용하세요.");
    } else {
      console.log("회원가입이 완료되었습니다.");

      localStorage.setItem("user", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 pt-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-8">회원가입</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getData}
                  placeholder="이름을 입력하세요"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="이메일을 입력하세요"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="date" name="date" onChange={getData} />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="비밀번호를 입력하세요"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={addData}
                className="col-lg-8"
                style={{ background: "rgb(67, 185, 127)" }}
              >
                가입하기
              </Button>
            </Form>
            <p className="mt-3">
              계정이 이미 있으시다면{" "}
              <span>
                <NavLink to="/login">로그인</NavLink>
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
