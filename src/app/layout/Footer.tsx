import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="footer__copyright">
				<p>&copy; { new Date().getFullYear() } Twelfth</p>
			</div>
			<div className="footer__social">
				<a
					href="https://github.com/TwelfthDannis"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				<a href="https://vk.com/dannis12" target="_blank" rel="noopener noreferrer">
					VK
				</a>
				<a href="https://t.me/dannistwelfth" target="_blank" rel="noopener noreferrer">
					Telegram
				</a>
			</div>
		</footer>
	);
};

export default Footer;
