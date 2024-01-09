
import React, { useEffect, useState } from 'react';
import '../styles/EditInformation.css'
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faFloppyDisk, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { editPerformance } from '../storeSlice/contextSlice/Context';

const EditInformation = () => {

    const [copyright, setCopyright] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const [date, setDate] = useState({
        startDate: "",
        endDate: "",
    });
    const [errors, setErrors] = useState({});
    const [performance, setPerformance] = useState({});
    const [checkboxShow, setCheckboxShow] = useState(false);
    const [checkboxNotShow, setCheckboxNotShow] = useState(false);
    const [checkboxEndDate, setCheckboxEndDate] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const context = useSelector((state) => state.context);
    const [value, setValue] = useState('');
    const category = [
        { name: 'วรรณกรรม' },
        { name: 'ศิลปกรรม' },
        { name: 'สื่อวิดีโอ' },
    ];
    const navigate = useNavigate();

    useEffect(() => {
        const getInformation = context.find((item) => item.id == id);
        setPerformance(getInformation);
        setCopyright({
            name: getInformation.copyright.name,
            phone: getInformation.copyright.phone,
            email: getInformation.copyright.email
        });
        setDate({
            startDate: getInformation.startDate,
            endDate: getInformation.endDate,
        });
        if (getInformation.status === "แสดง") {
            setCheckboxShow(true);
            setCheckboxNotShow(false);
        } else {
            setCheckboxNotShow(true);
            setCheckboxShow(false);
        }
        if (getInformation.endDate) {
            setCheckboxEndDate(true);
        }
        setValue(getInformation.category);
    }, []);

    const changeName = (e) => {
        const name = e.target.value;
        setCopyright({
            name: name,
            phone: copyright.phone,
            email: copyright.email,
        });
    }

    const changePhone = (e) => {
        const phone = e.target.value;
        const sanitizedPhone = phone.replace(/[^0-9]/g, '');
        setCopyright({
            name: copyright.name,
            phone: sanitizedPhone,
            email: copyright.email,
        });
    }

    const changeEmail = (e) => {
        const email = e.target.value;
        setCopyright({
            name: copyright.name,
            phone: copyright.phone,
            email: email,
        });
    }

    const changeStartDate = (e) => {
        const startDate = e.target.value;
        const sanitizedStart = startDate.replace(/[^0-9/]/g, '');
        setDate({
            startDate: sanitizedStart,
            endDate: date.endDate,
        });
    }

    const changeEndDate = (e) => {
        const endDate = e.target.value;
        const sanitizedEnd = endDate.replace(/[^0-9/]/g, '');
        setDate({
            startDate: date.startDate,
            endDate: sanitizedEnd,
        });
    }
    const validateValues = (inputValues) => {
        let errors = {};
        if (!inputValues.email.length) {
            errors.email = "validate email";
        }
        if (!inputValues.phone.length) {
            errors.phone = "validate phone";
        }
        if (!inputValues.name.length) {
            errors.name = "validate name";
        }
        if (!inputValues.startDate.length) {
            errors.startDate = "validate date";
        }
        if (!inputValues.endDate.length && checkboxEndDate) {
            errors.endDate = "validate date";
        }
        return errors;
    };

    const handleCheckboxShowChange = () => {
        setCheckboxShow(true);
        setCheckboxNotShow(false);
    }

    const handleCheckboxNotShowChange = () => {
        setCheckboxNotShow(true);
        setCheckboxShow(false);
    }

    const UpdateInformation = async () => {
        const validate = {
            name: copyright.name,
            phone: copyright.phone,
            email: copyright.email,
            startDate: date.startDate,
            endDate: date.endDate,
        };
        setErrors(validateValues(validate));
        if (!validate.name || !validate.phone || !validate.email || !validate.startDate || !validate.endDate) {
            return;
        }
        const seleted = {
            id: parseInt(id),
            category: value,
            copyright: copyright,
            startDate: date.startDate,
            endDate: date.endDate,
            status: checkboxShow ? "แสดง" : "ไม่แสดง",
            description: performance.description
        }
        await dispatch(editPerformance(seleted))
        navigate(`/description/${id}/${performance.name}`);
    }

    const Bank = () => {
        navigate(`/description/${id}/${performance.name}`);
    }

    const handleCategory = (event) => {
        setValue(event.target.value);
    };

    const handleCheckboxEndDate = () => {
        setCheckboxEndDate(!checkboxEndDate)
        setDate({
            startDate: date.startDate,
            endDate: ''
        })
    }




    return (
        <div className='text-black bg-zinc-100 pt-10 h-auto flex flex-col gap-5 '>
            <div className='flex items-center justify-between tracking-wider w-[80%] ml-auto mr-auto'>
                <p className='text-[40px] font-semibold pr-10 text-[#233794]'>LOGO</p>
                <p className='text-[14px]'>Amethyst-sols</p>
            </div>
            <div className='w-[80%] ml-auto mr-auto flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-[18px]'>แก้ไขการแสดงผลงาน</p>
                    <label className='flex gap-5 items-center'>
                        <div onClick={Bank} className='bg-white cursor-pointer rounded-full w-9 h-9 flex justify-center items-center shadow-sm border-2 border-zinc-200/50'>
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className='text-[#233794]'></FontAwesomeIcon>
                        </div>
                        <div onClick={UpdateInformation} className='bg-white cursor-pointer rounded-full w-9 h-9 flex justify-center items-center shadow-sm border-2 border-zinc-200/50'>
                            <FontAwesomeIcon
                                icon={faFloppyDisk}
                                className='text-[#233794]'></FontAwesomeIcon>
                        </div>
                    </label>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5 bg-white p-5 px-10 rounded-2xl shadow-sm border-2 border-zinc-200/50'>
                        <p className='font-bold text-[18px]'>{performance.name}</p>
                        <label className='text-[15px] flex gap-4 items-center'>
                            <p>ประเภทผลงาน</p>
                            <select
                                value={value}
                                onChange={handleCategory}
                                className="border cursor-pointer rounded-lg px-3 py-2 text-sm w-60 outline-none hover:bg-transparent font-bold tracking-wider">
                                {category.map((category, index) => (
                                    <option
                                        key={index}
                                        value={category.name}
                                        onClick={() => handleCategory(category.name)}>{category.name}</option>
                                ))}

                            </select>
                        </label>
                        <div className='flex flex-col gap-4 text-[15px]'>
                            <p className='font-bold'>เจ้าของลิขสิทธิ</p>
                            <div className='flex flex-col gap-3 w-full max-w-4xl'>
                                <div className='flex flex-wrap gap-3 w-full justify-between'>
                                    <label className='w-full max-w-96'>
                                        <label className='flex gap-1'>
                                            <p className='font-bold'>ชื่อ</p>
                                            <p className='font-bold text-red-500'>*</p>
                                        </label>
                                        <input
                                            className='w-full border-2 border-zinc-200/50 text-black/70 rounded-md pl-2 py-1 placeholder:text-black/25 shadow-sm shadow-zinc-200 text-[14px] outline-none'
                                            type="text"
                                            value={copyright.name}
                                            onChange={changeName} />
                                        {errors.name ? (
                                            <p className="error text-red-500">validate name!</p>
                                        ) : null}
                                    </label>
                                    <label className='w-full max-w-96'>
                                        <label className='flex gap-1'>
                                            <p className='font-bold'>เบอร์โทร</p>
                                            <p className='font-bold text-red-500'>*</p>
                                        </label>
                                        <input
                                            className='w-full border-2 border-zinc-200/50 text-black/70 rounded-md pl-2 py-1 placeholder:text-black/25 shadow-sm shadow-zinc-200 text-[14px] outline-none'
                                            type="text"
                                            value={copyright.phone}
                                            onChange={changePhone} />
                                        {errors.phone ? (
                                            <p className="error text-red-500" >validate phone!</p>
                                        ) : null}
                                    </label>
                                </div>

                                <label>
                                    <label className='flex gap-1'>
                                        <p className='font-bold'>อีเมล</p>
                                        <p className='font-bold text-red-500'>*</p>
                                    </label>
                                    <input
                                        className='w-full max-w-96 border-2 border-zinc-200/50 text-black/70 rounded-md pl-2 py-1 placeholder:text-black/25 shadow-sm shadow-zinc-200 text-[14px] outline-none'
                                        type="text"
                                        value={copyright.email}
                                        onChange={changeEmail} />
                                    {errors.email ?
                                        <p className="error text-red-500">validate email!</p>
                                        : null}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white px-5 rounded-2xl shadow-sm border-2 border-zinc-200/50'>
                        <p className='font-bold text-[16px] p-5'>ข้อมูลผลงาน</p>
                        <p className='w-[100%] h-[1px] bg-zinc-200/50 leading-3'></p>
                        <div className='flex flex-col gap-4 text-[15px] p-5'>
                            <div className='flex flex-wrap gap-10 w-[70%]'>
                                <label className='flex flex-col gap-2'>
                                    <p className='font-bold'>ระยะเวลาการแสดงผลงานให้ผู้อื่นเห็น</p>
                                    <div className="container w-48">
                                        <label className="flex gap-2 items-center w-[100%]">
                                            <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={checkboxNotShow}
                                                onChange={handleCheckboxNotShowChange} />
                                            <div className="checkmark"></div>
                                            <p className='font-bold'>ไม่แสดง</p>
                                        </label>
                                        <label className="flex gap-2 items-center w-[100%]">
                                            <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={checkboxShow}
                                                onChange={handleCheckboxShowChange} />
                                            <div className="checkmark"></div>
                                            <p className='font-bold'>แสดง</p>
                                        </label>
                                    </div>
                                </label>
                                <div className='flex flex-wrap gap-10'>
                                    <label className='flex flex-col gap-1'>
                                        <label className='flex gap-1'>
                                            <p className='font-bold'>วันที่เริ่มต้น</p>
                                            <p className='font-bold text-red-500'>*</p>
                                        </label>
                                        <label className='flex gap-3 items-center pr-2 border-2 border-zinc-200/50 rounded-md pl-2 py-1 placeholder:text-black/25 shadow-sm shadow-zinc-200 text-[14px]'>
                                            <FontAwesomeIcon icon={faCalendar} className='text-black/60'></FontAwesomeIcon>
                                            <input
                                                className='outline-none text-[16px] text-black/70 w-full max-w-96'
                                                type="text"
                                                value={date.startDate}
                                                onChange={changeStartDate} />
                                        </label>

                                        {errors.startDate ? (
                                            <p className="error text-red-500" >validate date!</p>
                                        ) : null}
                                        <p className='text-[12px] text-black/70'>ตัวอย่าง : 01/01/2565</p>
                                    </label>
                                    <label className='flex flex-col gap-1'>
                                        <label className='flex gap-1'>
                                            <p className='font-bold'>วันที่สิ้นสุด</p>
                                            <p className='font-bold text-red-500'>*</p>
                                        </label>
                                        <div className='flex flex-wrap gap-3 items-center'>
                                            <div className={`checkbox-wrapper-51 ${!checkboxEndDate ? 'unchecked' : ''}`}>
                                                <input id="cbx-51" type="checkbox" checked={checkboxEndDate} onChange={handleCheckboxEndDate} />
                                                <label className="toggle" htmlFor="cbx-51">
                                                    <span>
                                                        <svg viewBox="0 0 10 10" height="10px" width="10px">
                                                            <FontAwesomeIcon icon={faCheck} className='text-white'></FontAwesomeIcon>
                                                        </svg>
                                                    </span>
                                                </label>
                                            </div>
                                            <label className='flex gap-3 items-center h-9 pr-2 border-2 border-zinc-200/50 rounded-md pl-2 py-1 placeholder:text-black/25 shadow-sm shadow-zinc-200 text-[14px]'>
                                                <FontAwesomeIcon icon={faCalendar} className='text-black/60'></FontAwesomeIcon>
                                                {checkboxEndDate ? (
                                                    <input
                                                        className='outline-none text-[16px] text-black/70 w-full max-w-96'
                                                        type="text"
                                                        value={date.endDate}
                                                        onChange={changeEndDate} />
                                                ) : null}

                                            </label>
                                        </div>
                                        {errors.endDate && checkboxEndDate ?
                                            <p className="error text-red-500">validate date!</p>
                                            : null}
                                        <p className='text-[12px] text-black/70'>ตัวอย่าง : 01/01/2565</p>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold'>รายละเอียด</p>
                                <textarea
                                    className='max-w-7xl text-black/70 text-[14px] h-28 border-2 border-zinc-200/50 resize-none rounded-md outline-none p-2'
                                    value={performance.description}
                                    rows=""
                                    cols=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='bg-[#233794] text-white text-center w-full h-40 mt-20'>
                <div className='w-[54%] h-full ml-auto mr-auto flex gap-6 items-center'>
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
            </div> */}
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

export default EditInformation;