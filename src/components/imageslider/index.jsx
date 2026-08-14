import { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css';

export default function ImageSlider({ url = "https://picsum.photos/v2/list", limit = 10 }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(url) {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=1&limit=${limit}`);
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            const data = await response.json();
            if (data) {
                setLoading(false);
                setImages(data);
                // console.log(data);
            }
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }
    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
    }, [url]);

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={() => handlePrevious()} />
            {
                images && images.length ?
                    images.map((imageItem,index) => (
                        <img key={imageItem.id} src={imageItem.download_url} alt={imageItem.author}
                            className={currentSlide === index ? "currentImage" : "currentImage hide"}
                        />
                    )) : null
            }
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={() => handleNext()} />
            <span className="circle-indicator">
                {
                    images && images.length ?
                        images.map((_, index) => <button key={index} className={currentSlide === index ?
                            'current-indicator' :
                            'current-indicator inactive-indicator'}
                            onClick={() => setCurrentSlide(index)}
                            ></button>)
                        : null
                }
            </span>
        </div>
    );
}