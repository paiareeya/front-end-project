
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Information.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faEye, faMagnifyingGlass, faRotate } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck, faRectangleXmark, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { deletePerformance } from '../storeSlice/contextSlice/Context';

const Information = () => {

    const [search, setSearch] = useState('');
    const [information, setInformation] = useState([]);
    const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
    const [selectionDelete, setSelectionDelete] = useState([]);
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 });
    const columns = [
        {
            field: 'name',
            renderHeader: () => (
                <p className='font-bold text-[16px] ml-3'>ชื่อผลงาน</p>
            ),
            width: 400,
            disableColumnMenu: true,
            renderCell: (params) => (
                <span className='text-[16px] ml-3'>{params.row.name}</span>
            ),
        },
        {
            field: 'category',
            renderHeader: () => (
                <p className='font-bold text-[16px]'>ประเภทผลงาน</p>
            ),
            width: 250,
            disableColumnMenu: true,
            renderCell: (params) => (
                <span className='text-[16px] pl-5'>{params.row.category}</span>
            ),
        },
        {
            field: 'startDate',
            renderHeader: () => (
                <p className='font-bold text-[16px]'>วันที่แสดงผลงาน</p>
            ),
            width: 230,
            disableColumnMenu: true,
            renderCell: (params) => (
                !params.row.startDate ? (
                    <span className='text-[15px] pl-14'>-</span>
                ) : (
                    <span className='text-[15px] pl-5'>{params.row.startDate}</span>
                )
            ),
        },
        {
            field: 'endDate',
            renderHeader: () => (
                <p className='font-bold text-[16px]'>วันที่สิ้นสุดแสดงผลงาน</p>
            ),
            width: 300,
            disableColumnMenu: true,
            renderCell: (params) => (
                !params.row.endDate ? (
                    <span className='text-[15px] pl-14'>-</span>
                ) : (
                    <span className='text-[15px] pl-5'>{params.row.endDate}</span>
                )
            ),
        },
        {
            field: 'status',
            renderHeader: () => (
                <p className='font-bold text-[16px] pl-10'>สถานะ</p>
            ),
            width: 230,
            disableColumnMenu: true,
            renderCell: (params) => (
                params.row.status === 'แสดง' ? (
                    <div className='flex gap-2 pl-10 items-center text-emerald-500'>
                        <FontAwesomeIcon icon={faSquareCheck} className='text-[16px]'></FontAwesomeIcon>
                        <span className='text-[16px] pt-1'>{params.row.status}</span>
                    </div>
                ) : (
                    <div className='flex gap-2 pl-10 items-center text-red-500'>
                        <FontAwesomeIcon icon={faRectangleXmark} className='text-[16px]'></FontAwesomeIcon>
                        <span className='text-[16px] pt-1'>{params.row.status}</span>
                    </div>
                )
            ),
        },
        {
            field: 'actions',
            headerName: '',
            type: 'number',
            width: 150,
            renderCell: (params) => (
                <div className='flex gap-3 items-center justify-end w-[100%]'>
                    <div onClick={() => viewInformation(params.row)} className='flex gap-3 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faEye} className='w-4 h-4'></FontAwesomeIcon>
                        <p className='text-[15px] font-semibold'>รายละเอียด</p>
                    </div>
                </div>
            ),
        }
    ]
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const context = useSelector((state) => state.context);

    useEffect(() => {
        setInformation(context)
    }, [context, setInformation]);

    const changeSearch = (e) => {
        const search = e.target.value;
        let MAX_LENGTH = 255
        if (search.length <= MAX_LENGTH) {
            setSearch(search);
        }
    }

    const Search = () => {
        const filtered = information.filter((data) => {
            return data.name.toLowerCase().includes(search.toLowerCase())
        })
        setInformation(filtered)
    }

    const Reset = () => {
        setSearch('')
        setInformation(context)
    }

    const viewInformation = (data) => {
        navigate(`/description/${data.id}/${data.name}`);
    }

    const handleSelectionModelChange = (newSelectionModel) => {
        const selectedRowsData = information.filter(row => newSelectionModel.includes(row.id));
        setSelectionDelete(selectedRowsData);
        setRowSelectionModel(newSelectionModel);
    };

    const Delete = async () => {
        if (!information) {
            return
        }
        await dispatch(deletePerformance(selectionDelete));
    }

    const DeleteAll = async () => {
        if (!information) {
            return
        }
        let get = []
        information.forEach(element => {
            get.push(element.id)
        });
        setRowSelectionModel(get);
        await dispatch(deletePerformance(information));
    };

    const setPag = (model) => {
        setPaginationModel(model)
    }

    return (
        <div className='from-information flex flex-col gap-8 pt-10 px-10 min-h-screen pb-2 bg-[#233794] text-white'>
            <div className='flex border-b-2 border-white/10 h-24'>
                <p className='text-[40px] font-semibold pt-2 pr-10 tracking-wider border-r-2 border-white/10'>LOGO</p>
                <div className='flex flex-wrap justify-between w-[100%] text-[15px] pt-7 pl-1 tracking-wider'>
                    <p>Test Front-end (Amethyst Solutions)</p>
                    <p className='font-semibold pr-5'>นายทดสอบ ทำดี</p>
                </div>
            </div>

            <div className='h-[75%] text-black'>
                <div className='h-14 flex flex-row ml-auto mr-auto pl-14'>
                    <div className='section-information'>
                        <FontAwesomeIcon icon={faHouse} className='text-[20px]'></FontAwesomeIcon>
                        <p className='text-[15px] font-bold'>หน้าหลัก</p>
                        <div className="border-information"></div>
                    </div>
                </div>
                <div className='bg-zinc-100 h-[100%] rounded-3xl p-5 pt-10 flex flex-col gap-5 '>
                    <p className='text-xl tracking-wide font-bold'>รายการผลงาน</p>
                    <div className='bg-white shadow-lg rounded-md py-5 px-3 flex flex-col gap-8'>
                        <div className='px-8 flex gap-3 flex-wrap items-center justify-between'>
                            <div className='flex flex-wrap w-full max-w-5xl items-center gap-3'>
                                <label className='flex gap-3 w-full max-w-xl'>
                                    <p className='text-[17px] font-bold items-center'>ค้นหา</p>
                                    <input
                                        className='w-full max-w-4xl border-2 border-zinc-200/50 ml-3 rounded-md px-2 py-1 placeholder:text-black/25 shadow-sm shadow-zinc-200 text-[14px] outline-none'
                                        type="text"
                                        value={search}
                                        onChange={changeSearch}
                                        placeholder='ชื่อผลงาน' />
                                </label>
                                <label className='flex gap-3 items-center'>
                                    <button onClick={Search} className='bg-[#233794] px-2 py-1 rounded-md'>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[16px] text-white'></FontAwesomeIcon>
                                    </button>
                                    <button onClick={Reset} className='px-2 py-1 rounded-md border-4 border-zinc-200/50'>
                                        <FontAwesomeIcon icon={faRotate} className='text-[16px]'></FontAwesomeIcon>
                                    </button>
                                </label>
                            </div>
                            <div className='flex items-center gap-3'>
                                <button onClick={Delete} className='border-4 border-zinc-200/50 px-2 py-1 rounded-md'>
                                    <FontAwesomeIcon icon={faTrashCan} className='text-[16px]'></FontAwesomeIcon>
                                </button>
                                <button onClick={DeleteAll} className='flex items-center text-[16px] gap-3 px-2 py-1 rounded-md border-4 border-zinc-200/50 '>
                                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                    <p className='font-bold tracking-wide'>Delete All</p>
                                </button>
                            </div>
                        </div>
                        <DataGrid
                            className='border-0 px-8'
                            rows={information}
                            columns={columns}
                            pageSize={5}
                            paginationModel={paginationModel}
                            onPaginationModelChange={(model) => setPag(model)}
                            pageSizeOptions={[5, 10, 25, 50, 100]}
                            checkboxSelection
                            disableColumnReorder={true}
                            onRowSelectionModelChange={handleSelectionModelChange}
                            rowSelectionModel={rowSelectionModel}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;