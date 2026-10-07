import type { FC } from 'react';

import { Footer } from '@/components/Footer';
import { Icon } from '@/components/Icon';
import { LiveLetters } from '@/components/LiveLetters';
import { Section } from '@/components/Section';
import { CONTACTS } from '@/constants/contacts';

import styles from './Contact.module.scss';

export const Contact: FC = () => {
    return (
        <Section
            id="contact"
            className={styles.contact}
        >
            <p className={styles.callToAction}>
                <LiveLetters
                    text="Напишите мне"
                    preset="cta"
                />
            </p>
            <p className={styles.subtitle}>Открыт к предложениям о работе и интересным проектам.</p>
            <ul className={styles.links}>
                {CONTACTS.map((contact) => (
                    <li key={contact.label}>
                        <a
                            className={styles.link}
                            href={contact.href}
                            target={contact.external ? '_blank' : undefined}
                            rel={contact.external ? 'noreferrer' : undefined}
                        >
                            <span className={styles.label}>{contact.label}</span>
                            <span className={styles.value}>{contact.value}</span>
                            <Icon
                                name="external"
                                size={28}
                            />
                        </a>
                    </li>
                ))}
            </ul>
            <Footer
                linkHref="#top"
                linkLabel="Наверх ↑"
                className={styles.footer}
            />
        </Section>
    );
};
