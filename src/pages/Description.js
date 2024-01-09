
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';

const Description = () => {
    const [performance, setPerformance] = useState({});
    const [showMore, setShowMore] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);
    const { id } = useParams();
    const navigate = useNavigate();
    const context = useSelector((state) => state.context);

    useEffect(() => {
        const get = context.find((item) => item.id == id);
        setPerformance(get);
    }, []);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const setCurrent = (index) => {
        setCurrentIndex(index + 1);
    };

    const EditInformation = () => {
        navigate(`/editInformation/${performance.id}/${performance.name}`);
    }


    return (
        <div className='from-information flex flex-col gap-8 pt-10 min-h-screen bg-zinc-100 text-black'>
            <div className='flex items-center justify-between tracking-wider w-[54%] ml-auto mr-auto'>
                <p className='text-[40px] font-semibold pr-10 text-[#233794]'>LOGO</p>
                <p className='text-[14px]'>Amethyst-sols</p>
            </div>
            <div>
                <div className='flex gap-32 w-[80%] ml-auto mr-auto justify-center flex-wrap'>
                    {performance && performance.images && (
                        <div className='max-w-md flex flex-col gap-3'>
                            <Slider dots
                                infinite
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                                afterChange={(index) => setCurrent(index)}
                            >
                                {performance.images.map((image, index) => (
                                    <div key={index} >
                                        <img
                                            className='w-full h-80 object-cover object-top rounded-xl'
                                            src={image.src}
                                            alt={`carousel-image-${index}`}
                                        />
                                    </div>
                                ))}
                            </Slider>
                            <div className='flex justify-between'>
                                {performance.images.map((item, index) => (
                                    <img key={index}
                                        className='w-[105px] h-16 object-cover object-top rounded-lg'
                                        src={item.src}
                                        alt="footer-images" />
                                ))}
                            </div>
                            <p className='text-[18px] font-bold text-center'>{currentIndex} / {performance.images.length}</p>
                            <div>
                                <label className='flex gap-4'>
                                    <p className='text-[30px] leading-6'>*</p>
                                    <p className='text-[12px]'>There ate many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form,
                                        by injected humour, or randomised words which don't look even slightly believable.</p>
                                </label>
                                <label className='flex gap-4'>
                                    <p className='text-[30px] leading-6'>*</p>
                                    <p className='text-[12px]'>Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                </label>
                            </div>
                        </div>
                    )}
                    <div className='bg-white flex flex-col gap-4 w-96 rounded-lg shadow-sm border-2 border-zinc-200/50 p-5'>
                        <div className='flex justify-between items-center'>
                            {performance && (
                                <p className='font-bold text-[20px]'>{performance.name}</p>
                            )}
                            <label className='flex gap-2 items-center'>
                                <NavLink to='/' className='bg-white cursor-pointer rounded-full w-7 h-7 flex justify-center items-center shadow-sm border-2 border-zinc-200/50'>
                                    <FontAwesomeIcon icon={faArrowLeft} className='text-[#233794]/80 text-[13px]'></FontAwesomeIcon>
                                </NavLink>
                                <div onClick={EditInformation} className='bg-white cursor-pointer rounded-full w-7 h-7 flex justify-center items-center shadow-sm border-2 border-zinc-200/50'>
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        className='text-[#233794]/80 text-[13px]'></FontAwesomeIcon>
                                </div>
                            </label>
                        </div>
                        <label className='flex gap-1 text-[14px]'>
                            <p>ประเภทผลงาน</p>
                            <p>:</p>
                            {performance && (
                                <p className='font-bold'>{performance.category}</p>
                            )}
                        </label>
                        {performance.status === 'แสดง' ? <>
                            <label className='flex gap-1 text-[14px]'>
                                <p>วันที่เริ่มต้น</p>
                                <p>:</p>
                                {performance.startDate ? (
                                    <p className='font-bold'>{performance.startDate}</p>
                                ) : (
                                    <p className='font-bold'>-</p>
                                )}
                            </label>
                            <label className='flex gap-1 text-[14px]'>
                                <p>วันที่สิ้นสุดการแสดง</p>
                                <p>:</p>
                                {performance.endDate ? (
                                    <p className='font-bold'>{performance.endDate}</p>
                                ) : (
                                    <p className='font-bold'>-</p>
                                )}
                            </label>
                        </> : null}

                        <label className='flex flex-col gap-2 text-[14px]'>
                            <p className='font-bold'>เจ้าของลิขสิทธิ</p>
                            {performance && performance.copyright && (
                                <div className='bg-white flex flex-col gap-2 shadow-sm border-zinc-200/50 p-5'>
                                    <p className='font-bold'>{performance.copyright.name}</p>
                                    <div className='flex flex-col gap-1'>
                                        <label className='flex gap-1 text-[12px]'>
                                            <p>เบอร์โทร</p>
                                            <p>:</p>
                                            <p className='font-bold'>{performance.copyright.phone}</p>
                                        </label>
                                        <label className='flex gap-1 text-[12px]'>
                                            <p>อีเมล</p>
                                            <p>:</p>
                                            <p className='font-bold'>{performance.copyright.email}</p>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </label>
                        <label className=' flex flex-col gap-2'>
                            <p className='font-bold text-[14px]'>รายละเอียด</p>
                            {performance.description && (
                                <>
                                    <label className='text-[12px] tracking-wider'>
                                        {showMore ? performance.description : performance.description.slice(0, 160)}
                                        {!showMore && performance.description && performance.description.length > 160 && (
                                            <span className='pl-1 font-bold'>
                                                ...
                                                <button className='text-[#233794] pl-1' onClick={() => toggleShowMore(!showMore)}>
                                                    อ่านเพิ่มเติม
                                                </button>
                                            </span>
                                        )}
                                        {showMore && performance.description && (
                                            <span className='pl-1 font-bold'>
                                                {/* ... */}
                                                <button className='text-[#233794] pl-1' onClick={() => toggleShowMore(!showMore)}>
                                                    ย่อ
                                                </button>
                                            </span>
                                        )}
                                    </label>
                                </>
                            )}
                        </label>
                    </div>
                </div>
            </div>
            <div className='bg-[#233794] text-white w-full min-h-[139px] mt-11 py-3'>
                <div className='w-[54%] min-h-[139px] ml-auto mr-auto mt-auto mb-auto flex flex-wrap gap-6 items-center'>
                    <p className='text-[55px] font-semibold pr-10 '>LOGO</p>
                    <label className='flex flex-col items-start gap-3'>
                        <p className='text-[16px]'>Amethyst Solutions Co,Ltd.</p>
                        <p className='text-[12px]'>252/93(N) 17th Fl., Muang Thai-Phatra Complex Tower B, Rachadaphisek Road, Huaykwnag, Bangkok 10310</p>
                        <label className='flex gap-3 items-center'>
                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </label>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Description;