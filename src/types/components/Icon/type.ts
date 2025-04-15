import ArrowPrevIcon from "@public/icon/arrowPrev.svg"
import NotificationIcon from "@public/icon/notification.svg"
import SearchIcon from "@public/icon/search.svg"

export type IconNameT =
	| 'notification'
	| 'arrowPrev'
	| 'search'
	;

export const iconMap = {
	'notification': NotificationIcon,
	'arrowPrev': ArrowPrevIcon,
	'search': SearchIcon
};