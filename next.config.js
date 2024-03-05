// eslint-disable-next-line @typescript-eslint/no-var-requires
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/i18n.ts');

/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = withNextIntl(nextConfig);
