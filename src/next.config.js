module.exports = {
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
    },
}
