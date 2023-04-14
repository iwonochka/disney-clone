import { Session } from 'next-auth';
import { signOut } from "next-auth/react";
import React from 'react'
import { DropDown, NavMenu, SignOut, UserImg } from '../styles';
import {AiOutlineHome, AiOutlineSearch,AiOutlinePlusCircle, AiOutlineStar, AiOutlineVideoCamera} from 'react-icons/ai'
import {TfiVideoClapper} from 'react-icons/tfi'

interface Props {
  session: Session;
}

function SignedInHeader({session}: Props) {

  const image = session?.user?.image as string;
  const name = session?.user?.name as string;

  return (
    <>
    <NavMenu>
        <a>
          <AiOutlineHome/>
          <span>HOME</span>
        </a>
        <a>
          <AiOutlineSearch/>
          <span>SEARCH</span>
        </a>
        <a>
          <AiOutlinePlusCircle/>
          <span>WATCHLIST</span>
        </a>
        <a>
          <AiOutlineStar/>
          <span>ORIGINALS</span>
        </a>
        <a>
          <AiOutlineVideoCamera/>
          <span>MOVIES</span>
        </a>
        <a>
          <TfiVideoClapper/>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
        {session !== null ? <UserImg src={image} alt={name} /> : null}
        <DropDown>
          <span onClick={() => signOut()}>Sign out</span>
        </DropDown>
      </SignOut>
    </>
  )
}

export default SignedInHeader
