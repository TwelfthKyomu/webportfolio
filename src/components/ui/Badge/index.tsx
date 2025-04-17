import type { FC } from 'react';

type PropsT = {
    position?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const Badge: FC<PropsT> = (props) => {
    const { position } = props;

    return (
        <div className="badge" data-position={ position }>
            <span className="badge__text">Beta</span>
        </div>
    );
};

export default Badge;
