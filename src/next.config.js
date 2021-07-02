const { withPlausibleProxy } = require('next-plausible');

// @ts-ignore
module.exports = withPlausibleProxy()({
    async rewrites() {
        return [
            {
                source: '/index',
                destination: '/'
            }
        ];
    },
    future: {
        webpack5: true,
    }
});
