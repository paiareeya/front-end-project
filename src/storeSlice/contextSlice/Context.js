import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: 'เจ้าขุนทอง',
        category: 'วรรณกรรม',
        startDate: '13/5/2023',
        endDate: '18/5/2023',
        status: 'แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    },
    {
        id: 2,
        name: 'ภาพวาดต้นไม้',
        category: 'ศิลปกรรม',
        startDate: '13/5/2023',
        endDate: '18/5/2023',
        status: 'ไม่แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    },
    {
        id: 3,
        name: 'การ์ตูนเด็กน้อย',
        category: 'สื่อวิดีโอ',
        startDate: '13/5/2023',
        endDate: '',
        status: 'แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    },
    {
        id: 4,
        name: 'Mona Lisa',
        category: 'ศิลปกรรม',
        startDate: '13/5/2023',
        endDate: '',
        status: 'แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    },
    {
        id: 5,
        name: 'The Last Supper',
        category: 'ศิลปกรรม',
        startDate: '13/5/2023',
        endDate: '20/5/2023',
        status: 'แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    },
    {
        id: 6,
        name: 'The Creation Of Adam',
        category: 'วรรณกรรม',
        startDate: '13/5/2023',
        endDate: '18/5/2023',
        status: 'แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    },
    {
        id: 7,
        name: 'Starry Night',
        category: 'ศิลปกรรม',
        startDate: '13/5/2023',
        endDate: '18/5/2023',
        status: 'แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    },
    {
        id: 8,
        name: 'The Scream',
        category: 'วรรณกรรม',
        startDate: '13/5/2023',
        endDate: '',
        status: 'ไม่แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    },
    {
        id: 9,
        name: 'The Persistence of Memory',
        category: 'ศิลปกรรม',
        startDate: '13/5/2023',
        endDate: '19/5/2023',
        status: 'แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    },
    {
        id: 10,
        name: 'Girl With A Pearl Earring',
        category: 'ศิลปกรรม',
        startDate: '13/5/2023',
        endDate: '',
        status: 'แสดง',
        copyright: {
            name: 'Amethyst-sols',
            phone: '0987654321',
            email: 'test@amethyst-sols.com',
        },
        images: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            },
            {
                src: 'https://www.danpal.in.th/wp-content/uploads/2016/02/MONA-LISA5.jpg'
            },
            {
                src: 'https://media.cnn.com/api/v1/images/stellar/prod/ap23284367588024.jpg?q=w_2000,c_fill'
            },
            {
                src: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg'
            },
        ],
        description: 'โมนาลิซา หรือ ลาโจกอนดา หรือ ลาฌอกงด์ คือภาพวาดสีน้ำมัน สูง 77 เซนติเมตร กว้าง 53 เซนติเมตร เลโอนาร์โด ดา วินชีวาดขึ้นในคริสต์ศตวรรษที่ 16 ระหว่าง ค.ศ. 1503–1507 เป็นภาพที่มีชื่อเสียงทั่วโลกภาพหนึ่ง เป็นที่รู้จักในฐานะภาพของสุภาพสตรีที่มีรอยยิ้มอันเป็นปริศนา ที่ไม่รู้ว่าเธอจะยิ้ม หัวเราะ หรือร้องไห้กันแน่ ปัจจุบันอยู่ในความครอบครองของรัฐบาลฝรั่งเศส และเก็บรักษาอยู่ที่พิพิธภัณฑ์ลูฟวร์ กรุงปารีส ประเทศฝรั่งเศส'
    }
]

export const contextSlice = createSlice({
    name: 'context',
    initialState,
    reducers: {
        editPerformance: (state, action) => {
            const { id } = action.payload;
            const idIndex = state.findIndex((performance) => performance.id === id);
            state[idIndex].category = action.payload.category
            state[idIndex].startDate = action.payload.startDate
            state[idIndex].endDate = action.payload.endDate
            state[idIndex].status = action.payload.status
            state[idIndex].copyright.name = action.payload.copyright.name
            state[idIndex].copyright.phone = action.payload.copyright.phone
            state[idIndex].copyright.email = action.payload.copyright.email
            state[idIndex].description = action.payload.description
            return state
        },
        deletePerformance: (state, action) => {
            const newData = state.filter(data => !action.payload.map(item => item.id).includes(data.id));
            return newData;
        },
    }
})

export const { editPerformance, deletePerformance } = contextSlice.actions;
export default contextSlice.reducer

