import type { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import type { AnchorHTMLAttributes, FC } from 'react';

import SVG from '@/lib/SVG';
import type { IconNameT } from 'types/Icon/type';

export type LinkT = {
    startAdornment?: IconNameT;
    endAdornment?: IconNameT;
    className?: string;
    disabled?: boolean;
} & NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: FC<LinkT> = (props) => {
    const { href, children, startAdornment, endAdornment, className, target, rel, ...rest } = props;

    return (
        <NextLink
            href={ href }
            target={ target }
            rel={ rel }
            className={ className }
            { ...rest }
        >
            { startAdornment && <SVG name={ startAdornment } /> }
            <span className="link-content">{ children }</span>
            { endAdornment && <span className="adornment end-adornment">{ endAdornment }</span> }
        </NextLink>
    );
};

export default Link;
