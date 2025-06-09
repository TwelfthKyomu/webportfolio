import type { IconNameT } from "types/components/Icon/type";
import { iconMap } from "types/components/Icon/type";

type SVGProps = {
	name: IconNameT;
};

const SVG = ({name}: SVGProps) => {
	const Icon = iconMap[name];

	return Icon ? <Icon /> : null;
};

export default SVG;