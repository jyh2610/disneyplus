import { AiFillHome, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PiFilmReelFill, PiTelevisionFill } from "react-icons/pi";
import { GiElvenCastle } from "react-icons/gi";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { loginmodalState } from "@/recoil/atom";
import LoginModal from "./login/LoginModal";

const Container = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  padding-top: 10px;
`;

const MenuItem = styled.p`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  padding-left: 5px;
`;

function Nav() {
  const [modal, setModal] = useRecoilState(loginmodalState);
  const modalHandler = () => {
    setModal((prev) => !prev);
  };
  return (
    <Container>
      <GiElvenCastle size="60" />
      <MenuItem>
        <AiFillHome /> 홈
      </MenuItem>
      <MenuItem>
        <FiSearch />
        검색
      </MenuItem>
      <MenuItem>
        <AiOutlinePlus />
        관심 콘텐츠
      </MenuItem>
      <MenuItem>
        <AiFillStar />
        오리지널
      </MenuItem>
      <MenuItem>
        <PiFilmReelFill />
        영화
      </MenuItem>
      <MenuItem>
        <PiTelevisionFill />
        시리즈
      </MenuItem>

      <div>
        <button onClick={modalHandler}>로그인</button>
      </div>
      {modal && <LoginModal />}
    </Container>
  );
}

export default Nav;
