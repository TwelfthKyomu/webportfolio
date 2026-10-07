import clsx from 'clsx';
import type { FC } from 'react';

import { toTwoDigits } from '@/lib/format';
import type { CaseStudy } from '@/lib/projects';

import { Chapter } from './components/Chapter';
import { CodeSample } from './components/CodeSample';
import styles from './Story.module.scss';

type PropsT = {
    caseStudy: CaseStudy;
};

export const Story: FC<PropsT> = (props) => {
    const { caseStudy } = props;

    return (
        <section className={clsx('container', styles.story)}>
            <Chapter
                number={1}
                title="Задача"
            >
                <p>{caseStudy.task}</p>
            </Chapter>
            <Chapter
                number={2}
                title="Решение"
            >
                <p>{caseStudy.approach}</p>
                <ol className={styles.decisions}>
                    {caseStudy.decisions.map((decision, index) => (
                        <li key={index}>
                            <span>/{toTwoDigits(index + 1)}</span>
                            <h3>{decision.title}</h3>
                            <p>{decision.description}</p>
                        </li>
                    ))}
                </ol>
                {caseStudy.code && (
                    <CodeSample
                        source={caseStudy.code.source}
                        caption={caseStudy.code.caption}
                    />
                )}
            </Chapter>
            <Chapter
                number={3}
                title="Результат"
            >
                <p>{caseStudy.result}</p>
                <div className={styles.metrics}>
                    {caseStudy.metrics.map((metric, index) => (
                        <div key={index}>
                            <strong>{metric.value}</strong>
                            <span>{metric.label}</span>
                        </div>
                    ))}
                </div>
            </Chapter>
        </section>
    );
};
