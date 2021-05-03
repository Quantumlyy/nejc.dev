import { constants } from 'core/consts';
import React, { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';

export const DiscordContactRow: React.FC = () => {
	const [message, setMessage] = useState(constants.discordUsername);

	const copy = async () => {
		await navigator.clipboard.writeText(constants.discordUsername);
		setMessage('Copied ✔');
		await new Promise((r) => setTimeout(r, 1500));
		setMessage(constants.discordUsername);
	};

	return (
		<a href="#" onClick={copy} className="flex items-center space-x-3">
			<FaDiscord /> <span>{message}</span>
		</a>
	);
};

export default DiscordContactRow;
