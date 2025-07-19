import type { IconNameT } from "types/Icon/type";
import { iconMap } from "types/Icon/type";

type SVGProps = {
	name: IconNameT;
};

const SVG = ({name}: SVGProps) => {
	const Icon = iconMap[name];

	return Icon ? <Icon /> : null;
};

export default SVG;