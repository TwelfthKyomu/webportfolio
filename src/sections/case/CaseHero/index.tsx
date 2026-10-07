import clsx from 'clsx';
import type { FC } from 'react';

import { ArrowLink } from '@/components/ArrowLink';
import { toTwoDigits } from '@/lib/format';
import { type CaseStudy, getSiteLink, type Project } from '@/lib/projects';

import styles from './CaseHero.module.scss';

type PropsT = {
    number: number;
    project: Project;
    caseStudy: CaseStudy;
};

export const CaseHero: FC<PropsT> = (props) => {
    const { number, project, caseStudy } = props;
    const siteLink = getSiteLink(project);

    return (
        <section className={clsx('container', styles.hero)}>
            <p className={styles.kicker}>
                <span>Кейс {toTwoDigits(number)}</span>
                <span>{project.role}</span>
                <span>{caseStudy.period}</span>
            </p>
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.intro}>
                <div className={styles.lead}>
                    <p className={styles.summary}>{project.summary}</p>
                    {siteLink && (
                        <ArrowLink
                            href={siteLink.href}
                            icon="external"
                            external
                        >
                            {siteLink.label}
                        </ArrowLink>
                    )}
                </div>
                <dl className={styles.facts}>
                    <div>
                        <dt>Роль</dt>
                        <dd>{project.role}</dd>
                    </div>
                    <div>
                        <dt>Период</dt>
                        <dd>{caseStudy.period}</dd>
                    </div>
                    <div>
                        <dt>Команда</dt>
                        <dd>{caseStudy.team}</dd>
                    </div>
                    <div>
                        <dt>Стек</dt>
                        <dd>{project.stack.join(', ')}</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
};
