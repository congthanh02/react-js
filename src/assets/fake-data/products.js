// all images 
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";


import product_07_image_02 from "../images/pho(1).jpg";
import product_07_image_03 from "../images/pho(2).jpg";
import product_07_image_01 from "../images/pho(3).jpg";

// import product_08_image_02 from "../images/pho(1).jpg";
// import product_08_image_03 from "../images/pho(2).jpg";  
// import product_08_image_01 from "../images/pho(3).jpg";
// import product_08_image_02 from "../images/pho(1).jpg";
// import product_08_image_03 from "../images/pho(2).jpg";
// import product_08_image_01 from "../images/pho(3).jpg";


const products = [
  {
    id: "01",
    title: "HamBurger gà",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Mình đã từng oder thức ăn từ nhà hàng để mang về.lần này mình đến trực tiếp để được thưởng thức món hamburger nóng hổi đậm kiểu phương tây. Mình oder cheese burger,bạn mình gọi món prince burger theo lời giới thiệu của bạn nhân viên.cả 2 đều rất ngon,thật tuyệt vời.ở đây không gian ấm cúng,sạch sẽ,nhân viên thân thiện,niềm nở với khách hàng,chất lượng phục tốt 10/10",
  },

  {
    id: "02",
    title: "Pizza chay",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Bạn Đã Thử Loại loại này Chưa, Hãy Thử Và Cho Chúng Tôi Nhận Xét.",
  },

  {
    id: "03",
    title: "Pizza xúc xích phô mai",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Lần đầu tiên ăn món này theo giới thiệu từ bạn bè. Phải chờ mất 10 phút mới có bàn để ngồi vì khách rất đông. nhân viên tư vấn nhiệt tình,hamburger bò rất thơm,bò Uc mềm khác hẳn với bò Việt Nam",
  },

  {
    id: "04",
    title: "Pizza khoai lang",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },

  {
    id: "05",
    title: "Burger bò phô mai",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },
  {
    id: "06",
    title: "Burger nướng Hàn Quốc",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },
// pizza
  {
    id: "07",
    title: "Pizza hải sản",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },

  {
    id: "08",
    title: "Pizza Hawaii",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },

  {
    id: "09",
    title: "Pizza nấm hương",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },

  {
    id: "10",
    title: "Burger phô mai xanh",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },
//banh my
  {
    id: "11",
    title: "Bánh mỳ ",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },

  {
    id: "12",
    title: "Bánh mỳ ",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },

  {
    id: "13",
    title: " Bánh mỳ sandich",
    price: 45.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },
//pho
  {
    id: "14",
    title: " Phở gà ",
    price: 45.0,
    image01: product_07_image_02,
    image02: product_07_image_01,
    image03: product_07_image_03,
    category: "Pho",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },

  {
    id: "15",
    title: " Phở đặc biệt",
    price: 45.0,
    image01: product_07_image_01,
    image02: product_07_image_02,
    image03: product_07_image_03,
    category: "Pho",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },

  {
    id: "16",
    title: " Phở bò ",
    price: 35.0,
    image01: product_07_image_03,
    image02: product_07_image_02,
    image03: product_07_image_03,
    category: "Pho",

    desc: "Là một món ăn tuyệt vời, một thực phẩm thiết yếu, bổ sung các chất cần thiết để cung cấp các chất dinh dưỡng cho hoạt động của bạn.",
  },

//thuc uong


];

export default products;
