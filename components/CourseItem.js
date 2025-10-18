'use client';
import React, { useEffect } from 'react';
import styles from './CourseItem.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';
import RazorpayCheckoutButton from './RazorpayCheckoutButton';

const CourseItem = (props) => {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ duration: 600, delay: 100 });
    }, []);

    const handleViewCourse = () => {
        router.push(`/courses/${props.urlCourseDetail}`);
    };

    return (
        <div className={styles.CourseItem} data-aos="slide-up">
            <h4 className={styles.CourseItem_h4}>{props.offer}% OFF</h4>
            <h3 className={styles.CourseItem_h3}>{props.title}</h3>
            <h5 className={styles.CourseItem_h5}>{props.description}</h5>
            <p className={styles.CourseItem_p}>
                &#8377;{props.newPrice}{' '}
                <span>&#8377;{props.oldPrice}</span>
            </p>
            <button className={styles.CourseItem_btn1} onClick={handleViewCourse}>
                View Course Detail
            </button>
            <RazorpayCheckoutButton
                amount={props.newPrice}
                courseId={props.id}
                courseTitle={props.title}
            />
        </div>
    );
};

export default CourseItem;









// handleBuyCourse Function (DEV MODE)
// const handleBuyCourse = async () => {
//     try {
//         const purchasedCourses = JSON.parse(sessionStorage.getItem('purchasedCourses')) || [];

//         // Avoid duplicates
//         if (!purchasedCourses.find(c => c.id === props.id)) {
//             purchasedCourses.push({
//                 id: props.id,
//                 title: props.title,
//                 description: props.description,
//             });
//             sessionStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
//         }

//         alert('Course unlocked! ✅');
//     } catch (error) {
//         console.error(error);
//         alert('Something went wrong while unlocking the course.');
//     }
// };