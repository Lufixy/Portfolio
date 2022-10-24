import useSWR from 'swr';

export default function swr(url, interval = 1000) {
    return useSWR(url, (href) => fetch(href, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json' 
    }
    }).then(res => res.json())
    , { refreshInterval: interval }
    );
};