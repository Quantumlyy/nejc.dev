import React from 'react';

const Layout: React.FC = (props) => {
	return <div className="flex min-h-screen flex-col p-5 md:p-14">{props.children}</div>;
};

export default Layout;
