import { useEffect, useState } from 'react';
import './styles.css'



export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0)

    function handleScrollPercentage() {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    async function fetchData(url) {
        try {
            setLoading(true)
            const response = await fetch(url)
            const result = await response.json()

            if (result && result.products && result.products.length > 0) {
                setData(result.products)
                setLoading(false)
            } else {
                throw new Error("No Data")
            }
        } catch (e) {
            setLoading(false)
            setError(e)
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData(url)
    }, [url])

    if (loading) {
        return <div>Loding....</div>
    }

    return (
        <div>
            <div className='top-container'>
                <h1>Custom Scroll Indicator</h1>
                <div className='scroll-progress-tracking-container'>
                    <div className='current-progress-bar' style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>
            <div className='data-container'>
                {
                    data && data.length > 0 ?
                        data.map(item => <p>{item.title}</p>)
                        : null
                }
            </div>
        </div>
    );
}