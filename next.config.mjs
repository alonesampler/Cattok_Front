/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, {isServer}) => {
        // Добавляю правило для обработки двоичного модуля canvas.node
        config.module.rules.push({ test: /\.node$/, use: 'raw-loader' })

        //  Исключить canvas из процесса запуска с помощью Next.js в браузере
        if(!isServer) config.externals.push('canvas');
        return config;
    }
};

export default nextConfig;
