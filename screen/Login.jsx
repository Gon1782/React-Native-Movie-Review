import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/react-native';
import { useEffect, useRef, useState } from 'react';
import { useColorScheme } from 'react-native';
import { auth } from '../firebase';
import { emailRegex, pwRegex, SCREEN_WIDTH } from '../util';


const Login = () => {
  const emailRef = useRef(null);
  const pwRef = useRef(null);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const isDark = useColorScheme() === "dark";
  const { goBack, setOptions } = useNavigation();

  const validateInputs = () => {
    if (!email) {
      alert("email을 입력해주세요.");
      emailRef.current.focus();
      return true;
    }
    if (!pw) {
      alert("password를 입력해주세요.");
      pwRef.current.focus();
      return true;
    }
    const matchedEmail = email.match(emailRegex);
    const matchedPw = pw.match(pwRegex);

    if (matchedEmail === null) {
      alert("이메일 형식에 맞게 입력해 주세요.");
      emailRef.current.focus();
      return true;
    }
    if (matchedPw === null) {
      alert("비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.");
      pwRef.current.focus();
      return true;
    }
  };
  const handleLogin = () => {
    // 유효성 검사
    if (validateInputs()) {
      return;
    }

    // 로그인 요청
    signInWithEmailAndPassword(auth, email, pw)
      .then(() => {
        console.log("로그인성공");
        setEmail("");
        setPw("");
        goBack();
        // 로그인 화면 이전 화면으로 돌아가기
      })
      .catch((err) => {
        console.log("err.message:", err.message);
        if (err.message.includes("user-not-found")) {
          alert("회원이 아닙니다. 회원가입을 먼저 진행해 주세요.");
        }
        if (err.message.includes("wrong-password")) {
          alert("비밀번호가 틀렸습니다.");
        }
      });
  };

  const handleRegister = () => {
    // 유효성 검사
    if (validateInputs()) {
      return;
    }

    // 회원가입 요청
    createUserWithEmailAndPassword(auth, email, pw)
      .then(() => {
        console.log("로그인성공");
        setEmail("");
        setPw("");
        goBack();
      })
      .catch((err) => {
        console.log("err.message:", err.message);
        if (err.message.includes("already-in-use")) {
          alert("이미 사용중인 아이디입니다.");
        }
      });
  };

  useEffect(() => {
    setOptions({ headerRight: () => null });
  }, []);

  return (
    <LoginBox>
      <EmailInput ref={emailRef} value={email} onChangeText={(text) => setEmail(text)} placeholderTextColor={isDark ? "#547ea7" : "#d2dae2"} textContentType="emailAddress" placeholder="이메일" style={{color: isDark}} />
      <PwInput ref={pwRef} value={pw} onChangeText={(text) => setPw(text)} placeholderTextColor={isDark ? "#547ea7" : "#d2dae2"} textContentType="password" returnKeyType="send" secureTextEntry={true} placeholder="비밀번호" />
      <LoginButton style={{borderColor: isDark ? "white":"black", borderWidth: 1, borderStyle: 'solid' }} onPress={handleLogin}>
        <LoginText style={{color: isDark ? "white" : "black"}} >Login</LoginText>
      </LoginButton>
      <RegisterButton style={{borderColor: isDark ? "white":"black", borderWidth: 1, borderStyle: 'solid' }} onPress={handleRegister}>
        <RegisterText style={{color: isDark ? "white" : "black"}}>Register</RegisterText>
      </RegisterButton>
    </LoginBox>
  );
};

const LoginBox = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const LoginButton = styled.TouchableOpacity`
  width: ${SCREEN_WIDTH / 1.5 + "px"};
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const LoginText = styled.Text`
  font-size: 20px;
`;
const RegisterText = styled(LoginText)``;

const RegisterButton = styled(LoginButton)``;

const EmailInput = styled.TextInput`
  background-color: grey;
  width: ${SCREEN_WIDTH / 1.5 + "px"};
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: white;
  color: black;
`;
const PwInput = styled(EmailInput)``;

export default Login;
