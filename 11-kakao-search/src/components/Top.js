import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuLink = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;
  line-height: 40px;

  &:hover {
    color: #22b8cf;
  }

  &:after {
    content: "|";
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child {
    &:after {
      color: #fff;
    }
  }

  &.active {
    text-decoration: underline;
    color: #22b8cf;
    &:after {
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const Top = () => {
  return (
    <div>
      <h1>카카오 검색</h1>
      <hr />
      <form>
        <input type="search" name="query" />
        <button type="submit">검색</button>
      </form>
      <hr />
      <nav>
        <MenuLink to="/web">웹</MenuLink>
        <MenuLink to="/image">이미지</MenuLink>
        <MenuLink to="/blog">블로그</MenuLink>
        <MenuLink to="/cafe">카페</MenuLink>
        <MenuLink to="/book">책</MenuLink>
      </nav>
    </div>
  );
};

export default Top;
