import iphone15 from "../image/iphone15_prm.jpg";
import appleWatch from "../image/apple.jpg";
import samsungS24 from "../image/samsungs24_ultra.jpg";

export const productData = [
  {
    name: "Iphone 15 Pro Max",
    brand: "Apple",
    image: iphone15,
    title: "Điện thoại iPhone 15 Pro Max (256GB)",
    description:
      "iPhone 15 Pro Max thiết kế mới với chất liệu titan chuẩn hàng không vũ trụ bền bỉ, trọng lượng nhẹ, đồng thời trang bị nút Action và cổng sạc USB-C tiêu chuẩn giúp nâng cao tốc độ sạc. Khả năng chụp ảnh đỉnh cao của iPhone 15 bản Pro Max đến từ camera chính 48MP, camera UltraWide 12MP và camera telephoto có khả năng zoom quang học đến 5x. Bên cạnh đó, iPhone 15 ProMax sử dụng chip A17 Pro mới mạnh mẽ!",
    type: "phone",
    tags: "special",
    rating: 5,
    quantity: 10,
    sold: 2,
    price: 30890000,
    versions: [
      {
        version: [
          { storage: "256GB", color: "Titan Đen", price: 30890000 },
          { storage: "256GB", color: "Titan Trắng", price: 31990000 },
          { storage: "256GB", color: "Titan Xanh", price: 31390000 },
          {
            storage: "256GB",
            color: "Titan Tự nhiên",
            price: 31990000,
          },

          {
            storage: "512GB",
            color: "Titan Đen",
            price: 39000000,
          },
          {
            storage: "512GB",
            color: "Titan Trắng",
            price: 4090000,
          },
          {
            storage: "512GB",
            color: "Titan Tự nhiên",
            price: 41990000,
          },

          {
            storage: "1TB",
            color: "Titan Đen",
            price: 44890000,
          },

          {
            storage: "1TB",
            color: "Titan Xanh",
            price: 45890000,
          },

          {
            storage: "1TB",
            color: "Titan Tự nhiên",
            price: 46890000,
          },
        ],
      },
    ],
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    image: samsungS24,
    title: "Samsung Galaxy S24 Ultra 5G 256GB",
    description:
      "Samsung S24 Ultra là siêu phẩm smartphone đỉnh cao mở đầu năm 2024 đến từ nhà Samsung với chip Snapdragon 8 Gen 3 For Galaxy mạnh mẽ, công nghệ tương lai Galaxy AI cùng khung viền Titan đẳng cấp hứa hẹn sẽ mang tới nhiều sự thay đổi lớn về mặt thiết kế và cấu hình. SS Galaxy S24 bản Ultra sở hữu màn hình 6.8 inch Dynamic AMOLED 2X tần số quét 120Hz. Máy cũng sở hữu camera chính 200MP, camera zoom quang học 50MP, camera tele 10MP và camera góc siêu rộng 12MP.",
    color: "white",
    type: "phone",
    tags: null,
    rating: 4,
    quantity: 10,
    sold: 2,
    price: 33990000,
    versions: [
      {
        version: [
          { storage: "256GB", color: "Xám", price: 33990000 },
          { storage: "256GB", color: "Vàng", price: 33990000 },
          { storage: "256GB", color: "Đen", price: 33990000 },
          {
            storage: "256GB",
            color: "Tím",
            price: 33990000,
          },

          {
            storage: "512GB",
            color: "Xám",
            price: 37490000,
          },
          {
            storage: "512GB",
            color: "Vàng",
            price: 44890000,
          },
          {
            storage: "512GB",
            color: "Đen",
            price: 41990000,
          },

          {
            storage: "1TB",
            color: "Đen",
            price: 44890000,
          },

          {
            storage: "1TB",
            color: "Tím",
            price: 45890000,
          },

          {
            storage: "1TB",
            color: "Vàng",
            price: 46890000,
          },
        ],
      },
    ],
  },
  {
    name: "Apple Watch Series 9",
    brand: "Apple",
    image: appleWatch,
    title: "Apple Watch Series 9 45mm (GPS) viền nhôm dây cao su",
    description:
      "Đồng hồ Apple Watch Series 9 45mm sở hữu on chip S9 SiP - CPU với 5,6 tỷ bóng bán dẫn giúp mang lại hiệu năng cải thiện hơn 60% so với thế hệ S8. Màn hình thiết bị với kích thước 45mm cùng độ sáng tối đa lên 2000 nit mang lại trải nghiệm hiển thị vượt trội. Cùng với đó, đồng hồ Apple Watch s9 này còn được trang bị nhiều tính năng hỗ trợ theo dõi sức khỏe và tập luyện thông minh.",
    color: "white",
    type: "watch",
    tags: null,
    rating: 4,
    quantity: 10,
    sold: 2,
    price: 12790000,
    versions: [
      {
        version: [
          { storage: "42mm", color: "Đen", price: 12790000 },
          { storage: "42mm", color: "Trắng", price: 13390000 },
          { storage: "42mm", color: "Hồng", price: 13390000 },
          {
            storage: "44m",
            color: "Đen",
            price: 13690000,
          },

          {
            storage: "44mm",
            color: "Trắng",
            price: 13890000,
          },
          {
            storage: "44mm",
            color: "Hồng",
            price: 13890000,
          },
        ],
      },
    ],
  },
];
