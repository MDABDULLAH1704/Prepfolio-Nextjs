'use client';
import React from 'react';
import Image from 'next/image';
import styles from './SeeDemo.module.css';
import demo1 from '../../public/image/demoImg1.png';
import demo2 from '../../public/image/demoImg2.png';
import demo3 from '../../public/image/demoImg3.png';
import demo4 from '../../public/image/demoImg4.png';
import demo5 from '../../public/image/demoImg5.png';


const SeeDemo = () => {
    const demoImages = [demo1, demo2, demo3, demo4, demo5];

    return (
        <>
            <div className={styles.SeeDemo}>
                <h2 className={styles.SeeDemo_title}>Course Demo <span>Preview</span></h2>

                {demoImages.map((img, index) => (
                    <div key={index} className={styles.SeeDemo_imageWrapper}>
                        <Image
                            src={img}
                            alt={`Demo ${index + 1}`}
                            className={styles.SeeDemo_demoImage}
                            width={1600}
                            height={900}
                            sizes='100vw'
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SeeDemo
