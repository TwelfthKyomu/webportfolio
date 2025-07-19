'use client'
import type { FC} from 'react';
import React, { useEffect, useState } from 'react';

const StatusBar: FC = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        setCurrentTime(new Date());

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            clearInterval(timer);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('ru-RU', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="status-bar">
            <div className="status-bar__time">
                <div className="status-bar__clock">
                    { currentTime ? formatTime(currentTime) : '--:--:--' }
                </div>
                <div className="status-bar__date">
                    { currentTime ? formatDate(currentTime) : 'Загрузка...' }
                </div>
            </div>
            <div className="status-bar__indicators">
                <div className={ `status-bar__indicator ${isOnline ? 'online' : 'offline'}` }>
                    <div className="status-bar__indicator-dot"></div>
                    <span>{ isOnline ? 'Online' : 'Offline' }</span>
                </div>
                <div className="status-bar__indicator">
                    <div className="status-bar__indicator-dot active"></div>
                    <span>Active</span>
                </div>
            </div>
        </div>
    );
};

export default StatusBar;