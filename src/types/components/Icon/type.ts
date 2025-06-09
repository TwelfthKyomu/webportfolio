import ArrowPrevIcon from "@public/icon/arrowPrev.svg"
import CloseIcon from "@public/icon/close.svg"
import NotificationIcon from "@public/icon/notification.svg"
import QuestionIcon from "@public/icon/question.svg"
import SearchIcon from "@public/icon/search.svg"

export type IconNameT =
    | 'notification'
    | 'arrowPrev'
    | 'question'
    | 'search'
    | 'close'
    ;

export const iconMap = {
	'notification': NotificationIcon,
	'arrowPrev': ArrowPrevIcon,
    'question': QuestionIcon,
    'search': SearchIcon,
    'close': CloseIcon
};