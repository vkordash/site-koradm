// 31154 Червоненський психоневрологічний інтернат
// 31299 Центр професійного розвитку педагогічних працівників Бобровицької міської ради
// 31288 КЗ «Замглайський психоневрологічний інтернат»
// 31130 Любецький психоневрологічний інтернат
// 31265 Козелецький геріатричний пансіонат
// 966 Економіка
// 23 Корюківка
//import { SafeUrl } from "@angular/platform-browser";

// 31289 Ніжинський дитячий будинок-інтернат

//const id_org= 41747;
const id_org= 2468;
const IdMenu = 26617; //Горизонтальное меню
export const oo_api = "http://10.0.0.239/web-apps/apps/api/documents/api.js";  //  тестовая
// export const oo_api = "https://cg.gov.ua:444/web-apps/apps/api/documents/api.js";  // product

export const GlobalVar = Object.freeze({
    id_site    : id_org,              // id - сайта
    url_site   : 'https://nosgromada.cg.gov.ua/',
    id_menu    : IdMenu, 
    captcha    : '6Letg1MdAAAAALBt4Agti4Yne61TJcWfbZENSScB', // капча сайта
    carousel   : true,               // признак наличия слайдера в aside
    cols       : 3,                  // число колонок по умолчанию
    limit      : 5,                   // кол-во списка страниц по умолчанию (новостей например)
    path_photo : "./web_docs/"+id_org+"/photos",
//    db_url     : 'https://cg.gov.ua:20021'        //  для продукта
//    db_url     : 'http://localhost:3000'
//    db_url     : 'http://192.168.77.10:3000'     
    // db_url     : 'https://node-serv.cg.gov.ua'     
    db_url     : 'http://192.168.77.253:20022',     
    db_url_nest: 'http://192.168.77.253:10101',
    serv_site: 'https://serv-site.menarada.gov.ua',
    serv_docs: 'https://serv-docs.menarada.gov.ua',
    nest: true     
});