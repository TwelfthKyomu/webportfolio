import type { FC } from 'react';

import { ArrowLink } from '@/components/ArrowLink';
import { Screenshot } from '@/components/Screenshot';
import { toTwoDigits } from '@/lib/format';
import { getProjectLinks, type Project } from '@/lib/projects';

import styles from './WorkCard.module.scss';

type PropsT = {
    project: Project;
    number: number;
};

export const WorkCard: FC<PropsT> = (props) => {
    const { project, number } = props;
    const links = getProjectLinks(project);

    return (
        <article className={styles.work}>
            <span className={styles.number}>{toTwoDigits(number)}</span>
            <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.summary}</p>
                <ul className={styles.stack}>
                    {project.stack.map((technology, index) => (
                        <li key={index}>{technology}</li>
                    ))}
                </ul>
                <dl className={styles.meta}>
                    <div>
                        <dt>Роль</dt>
                        <dd>{project.role}</dd>
                    </div>
                    <div>
                        <dt>Год</dt>
                        <dd>{project.year}</dd>
                    </div>
                </dl>
                {links.length > 0 && (
                    <div className={styles.links}>
                        {links.map((link) => (
                            <ArrowLink
                                key={link.href}
                                href={link.href}
                                icon={link.external ? 'external' : undefined}
                                external={link.external}
                            >
                                {link.label}
                            </ArrowLink>
                        ))}
                    </div>
                )}
            </div>
            <Screenshot
                screen={project.cover}
                alt={project.title}
                className={styles.screenshot}
            />
        </article>
    );
};
