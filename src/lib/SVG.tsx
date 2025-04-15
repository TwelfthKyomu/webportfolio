import { iconMap, IconNameT } from "types/components/Icon/type";

type SVGProps = {
	name: IconNameT;
};

const SVG = ({name}: SVGProps) => {
	const Icon = iconMap[name];

	return Icon ? <Icon /> : null;
};

export default SVG;