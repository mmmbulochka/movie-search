import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";
import style from "./index.module.css";
import {Input} from "baseui/input";
import {getMovie} from "../../connections/movies";
import {useState} from "react";

function Header() {
  const [query, setQuery] = useState()

  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>Movie search</StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="#basic-link1">
            <img src={'heart.svg'} alt={'pop'} className={style.img}/>
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#basic-link2">
            <img src={'clock.svg'} alt={'pop'} className={style.img}/>
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem style={{display: 'flex', paddingRight: '24px', paddingLeft: 0}}>
          <Input onChange={(e) => {setQuery(e.target.value)}}/>
          <Button onClick={() => {console.log(query)}}>Search</Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}

export default Header