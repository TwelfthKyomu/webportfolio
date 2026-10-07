import { Fragment, type FC } from 'react';

import { tokenizeCode } from '../../lib/tokenizeCode';

import styles from './CodeSample.module.scss';

type PropsT = {
    source: string;
    caption?: string;
};

export const CodeSample: FC<PropsT> = (props) => {
    const { source, caption } = props;

    return (
        <figure className={styles.codeSample}>
            <pre>
                {tokenizeCode(source).map((line, lineIndex) => (
                    <Fragment key={lineIndex}>
                        {line.map((token, tokenIndex) => (
                            <span
                                key={tokenIndex}
                                className={styles[token.type]}
                            >
                                {token.text}
                            </span>
                        ))}
                        {'\n'}
                    </Fragment>
                ))}
            </pre>
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
};
