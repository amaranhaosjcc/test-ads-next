import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import {HeaderCustom, AncoraCustom} from '../styles/components/Header';

const Header = () => {
    return (
        <HeaderCustom>
            <Link href="/" passHref>
                <AncoraCustom>
                    <Image src="/logo.svg"  width={215} height={32} />
                </AncoraCustom>
             </Link>
        </HeaderCustom>
    )
}

export default Header;