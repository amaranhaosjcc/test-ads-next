import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import {FiChevronRight } from 'react-icons/fi'
import {Card} from '../styles/components/Box';

interface IUser {
    user: {
        id: string;
        login: string;
        name: string;
        bio: string;
        avatar_url: string;
    }
  }

const Box = ({ user }: IUser) => {
    const { id, name, login, bio, avatar_url} = user;

    return (
        <Link href={`/users/oi`} passHref key={id}>
            <Card>
                <Image src={avatar_url ? avatar_url : '/logo.svg'}  alt="Picture of the author" width={80} height={80} />

                <div className="description">
                    <strong>{name}</strong>
                    <p>{bio}</p>
                </div>
                
                <FiChevronRight size={24} />
            </Card>
        </Link>
    )
}

export default Box