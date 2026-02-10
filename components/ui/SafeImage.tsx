import React, { ImgHTMLAttributes, useEffect, useState } from 'react';
import defaultFallbackImage from '../../assets/placeholders/safe-image-fallback.svg';

interface SafeImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onError'> {
    critical?: boolean;
    containerClassName?: string;
    fallbackSrc?: string;
    fallbackText?: string;
    onError?: ImgHTMLAttributes<HTMLImageElement>['onError'];
}

const SafeImage: React.FC<SafeImageProps> = ({
    src,
    alt,
    className = '',
    containerClassName = 'aspect-video',
    critical = false,
    fallbackSrc = defaultFallbackImage,
    fallbackText = 'Image indisponible',
    loading,
    onError,
    onLoad,
    ...props
}) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [isUsingFallback, setIsUsingFallback] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);

    useEffect(() => {
        setCurrentSrc(src);
        setIsLoading(true);
        setIsUsingFallback(false);
        setHasFailed(!src);
    }, [src]);

    const handleLoad: ImgHTMLAttributes<HTMLImageElement>['onLoad'] = (event) => {
        setIsLoading(false);
        onLoad?.(event);
    };

    const handleError: ImgHTMLAttributes<HTMLImageElement>['onError'] = (event) => {
        if (!isUsingFallback && fallbackSrc) {
            setCurrentSrc(fallbackSrc);
            setIsUsingFallback(true);
            return;
        }

        setIsLoading(false);
        setHasFailed(true);
        onError?.(event);
    };

    if (hasFailed) {
        return (
            <div
                role="img"
                aria-label={alt || fallbackText}
                className={`w-full bg-slate-100 text-slate-500 text-sm font-medium flex items-center justify-center text-center p-4 ${containerClassName}`}
            >
                {fallbackText}
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden bg-slate-100 ${containerClassName}`}>
            {isLoading && (
                <div className="absolute inset-0 animate-pulse bg-slate-200/80" aria-hidden="true" />
            )}
            <img
                src={currentSrc}
                alt={alt}
                className={`w-full h-full aspect-video object-cover ${className}`}
                loading={loading ?? (critical ? 'eager' : 'lazy')}
                onError={handleError}
                onLoad={handleLoad}
                {...props}
            />
        </div>
    );
};

export default SafeImage;
