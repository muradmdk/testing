import React from 'react'
import tag from "@/app/assets/feed/tag.png";
import Image from 'next/image';

export default function PackageCard({ index, packageLevel, packageDiscount, packageAlbum, packageSongs, isPopular, setVisible }) {
    return (
        <>
            <div className="single-subscription-card position-relative mt-4">
                <div className="subscription-desc subscription-level mt-3">
                    <h4>Level {index}</h4>
                    <p className="mb-0">{packageLevel}</p>
                </div>
                <div className="subscription-desc subscription-save mt-3">
                    <h4>Save 33%</h4>
                    <p className="mb-0">${packageDiscount}</p>
                </div>
                <div className="subscription-desc subscription-albums mt-3">
                    <h4>Albums</h4>
                    <p className="mb-0">{packageAlbum}</p>
                </div>
                <div className="subscription-desc subscription-songs mt-3">
                    <h4>Songs</h4>
                    <p className="mb-0">{packageSongs}</p>
                </div>
                <div className="subscription-modal mt-3">
                    <button type="button" onClick={() => setVisible((prev) => !prev)}>
                        View Details
                    </button>
                </div>
                {isPopular && (
                    <div className="popular-tag">
                        <Image src={tag} width={125} height={20} alt="tag" />
                    </div>
                )}

            </div>
        </>
    )
}
