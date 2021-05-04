import React from 'react';
import type { IconType } from 'react-icons';
import { Tooltip } from 'react-tippy';

export interface IconProps {
	icon: IconType;
	title: string;
}

const Icon: React.FC<IconProps> = ({ icon, title }) => {
	return <Tooltip title={title}>{icon({ className: 'inline' })}</Tooltip>;
};

export default Icon;
