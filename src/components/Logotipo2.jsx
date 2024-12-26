import React from 'react';

const Logotipo2 = ({ color = "currentColor", width = "155", height = "39", className = "" }) => {
    return (
        <svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 155 39"
        >
        <path
            d="M3.399 0c1.867 0 3.399 1.372 3.399 3.335 0 1.963-1.532 3.381-3.4 3.381C1.532 6.716 0 5.345 0 3.336S1.531 0 3.399 0zm2.877 9.553v20.546H.522V9.553h5.754zM19.837 13.373c-1.346 0-2.242 1.067-2.877 2.259v14.465h-5.754V9.553h5.754v3.985c1.157-2.793 3.175-4.643 5.603-4.643 2.914 0 5.118 1.972 5.788 5.301 1.085-3.164 3.213-5.301 5.826-5.301 3.474 0 6.015 2.836 6.015 7.439V30.1h-5.754V17.772c0-2.546-.858-4.396-2.952-4.396-1.383 0-2.317 1.15-2.952 2.424v14.3h-5.716V17.772c0-2.546-.896-4.396-2.987-4.396l.006-.003zM44.901 38.316V9.553h5.528v3.37c1.195-2.384 3.213-4.028 5.678-4.028 3.886 0 6.986 3.738 6.986 10.93s-3.1 10.93-6.986 10.93c-2.427 0-4.483-1.56-5.678-4.068v11.629H44.9zm8.666-11.876c2.09 0 3.622-2.546 3.622-6.615 0-4.068-1.531-6.615-3.622-6.615-1.384 0-2.39 1.152-3.138 2.712v6.409c.223 2.303 1.27 4.11 3.138 4.11zM75.717 26.278c1.456 0 2.352-1.067 3.025-2.303V9.553h5.753V30.1h-5.753v-3.985c-1.157 2.796-3.214 4.643-5.754 4.643-3.698 0-6.238-2.836-6.238-7.438V9.553h5.754v12.328c0 2.55 1.009 4.397 3.213 4.397zM95.217.102V30.1h-5.754V.102h5.754zM114.644 9.553v5.096l-11.122 10.356h11.496V30.1H99.404v-5.095l11.197-10.356H99.404V9.553h15.24zM133.956 9.553v5.096l-11.122 10.356h11.496V30.1h-15.614v-5.095l11.194-10.356h-11.194V9.553h15.24zM146.843 25.332c2.129.125 6.015-1.11 7.584-1.85l-.412 5.463c-2.54 1.027-5.977 1.767-8.143 1.767-5.38 0-9.002-3.863-9.002-10.725 0-6.861 3.735-11.095 9.263-11.095 4.968 0 8.366 3.944 8.366 10.805h-12.101c.113 3.738 1.569 5.423 4.445 5.63v.005zm2.393-7.645c-.299-2.792-1.233-4.683-3.138-4.683-1.905 0-3.251 2.013-3.587 4.683H149.236z"
            fill={color} // El color se pasa como prop
        />
        </svg>
    );
};

export default Logotipo2;
