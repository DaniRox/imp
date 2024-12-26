import React from 'react';

const Logotipo1 = ({ width = 65, height = 75, color = '#000' }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65 75"
        width={width}
        height={height}
        >
        <path
            d="M5.5 0a5.5 5.5 0 110 10.88A5.5 5.5 0 010 5.4 5.5 5.5 0 015.5 0ZM10.15 15.47v33.27H.85V15.47h9.3ZM32.08 21.66c-2.18 0-3.63 1.73-4.65 3.66v23.41h-9.3V15.47h9.3v6.45c1.88-4.52 5.14-7.52 9.06-7.52 4.71 0 8.27 3.2 9.36 8.61 1.75-5.12 5.19-8.58 9.45-8.58 5.62 0 9.73 4.59 9.73 11.04v22.29h-9.3V28.78c0-4.12-1.39-7.11-4.77-7.11-2.23 0-3.74 1.86-4.8 3.93v23.15h-9.24V28.78c0-4.13-1.45-7.12-4.83-7.12ZM.84 74.37V57.5h3.24v1.98c.7-1.4 1.88-2.36 3.32-2.36 2.27 0 4.08 2.19 4.08 6.43s-1.81 6.43-4.08 6.43c-1.42 0-2.63-.92-3.32-2.39v6.81H.84ZM5.92 67.4c1.22 0 2.12-1.49 2.12-3.87s-.9-3.87-2.12-3.87c-.81 0-1.44.67-1.84 1.58v3.56c.13 1.34.74 2.41 1.84 2.41ZM18.88 67.31c.85 0 1.38-.63 1.77-1.35v-8.47h3.37v12.04h-3.37v-2.34c-.68 1.64-1.88 2.72-3.37 2.72-2.16 0-3.65-1.66-3.65-4.36v-8.47h3.37v7.23c0 1.49.59 2.6 1.88 2.6ZM30.3 51.97v17.58h-3.37V51.97h3.37ZM41.67 57.51v2.99l-6.51 6.07h6.73v2.99H32.75v-2.99l6.55-6.07h-6.55v-2.99h8.92ZM52.97 57.51v2.99l-6.51 6.07h6.73v2.99h-9.14v-2.99l6.55-6.07h-6.55v-2.99h8.92ZM60.52 66.75c1.25.07 3.52-.65 4.44-1.08l-.24 3.2c-1.49.6-3.5 1.04-4.78 1.04-3.15 0-5.27-2.27-5.27-6.25s2.19-6.5 5.42-6.5c2.91 0 4.89 2.31 4.89 6.33h-7.08c.06 2.2.88 3.19 2.62 3.26Zm1.4-4.48c-.17-1.64-.72-2.75-1.84-2.75-1.12 0-1.8 1.18-2 2.75h3.84Z"
            fill={color}
        />
        </svg>
    );
};

export default Logotipo1;
