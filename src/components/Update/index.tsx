import type { FC } from 'react';

import Badge from 'components/ui/Badge';
import Divider from 'components/ui/Divider';

const Index: FC = () => {
    return (
        <ul className="update">
            <li className="update__block">
                <Badge position="top-left" />
                <div className="update__content">
                    <div className="update__title">
                        <h3>Улучшение производительности</h3>
                        <span>29.02.2000</span>
                    </div>
                    <Divider />
                    <ul className="update__description">
                        <li>
                            Следить за развитием проекта Читать подробности каждого апдейта
                            Узнавать,
                        </li>
                        <li>
                            Следить за развитием проекта Читать подробности каждого апдейта
                            Узнавать,
                        </li>
                        <li>
                            Следить за развитием проекта Читать подробности каждого апдейта
                            Узнавать,
                        </li>
                        <li>
                            Следить за развитием проекта Читать подробности каждого апдейта
                            Узнавать,
                        </li>
                        <li>
                            Следить за развитием проекта Читать подробности каждого апдейта
                            Узнавать,
                        </li>
                        <li>
                            Следить за развитием проекта Читать подробности каждого апдейта
                            Узнавать,
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    );
};

export default Index;
