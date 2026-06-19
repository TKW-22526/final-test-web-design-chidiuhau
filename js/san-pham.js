document.addEventListener("DOMContentLoaded", function () {
    const flowers = [
        { id: 1, name: "Hoa Hồng Pháp",     price: "250.000 ₫", img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=500" },
        { id: 2, name: "Hoa Hướng Dương",    price: "150.000 ₫", img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500" },
        { id: 3, name: "Hoa Tulip Hà Lan",   price: "350.000 ₫", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/442/027/products/img-3669-jpg.jpg?v=1723713087120" },
        { id: 4, name: "Cúc Họa Mi",          price: "120.000 ₫", img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500" },
        { id: 5, name: "Hoa Lan Hồ Điệp",    price: "800.000 ₫", img: "https://flowersight.com/wp-content/uploads/2020/03/lan-h%E1%BB%93-%C4%91i%E1%BB%87p-e1584030166650.jpg" },
        { id: 6, name: "Hoa Ly Ly",           price: "200.000 ₫", img: "https://shophoatuoi.saigonhoa.com/wp-content/uploads/2024/05/hoa-ly-tha-binh-1.jpg" },
        { id: 7, name: "Hoa Mẫu Đơn",        price: "450.000 ₫", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/442/027/products/img-8750-jpg.jpg?v=1714979700053" },
        { id: 8, name: "Hoa Lavender",        price: "300.000 ₫", img: "https://thanhcongflower.com/wp-content/uploads/2023/10/0091bd231accce9297dd.jpg" },
        { id: 9, name: "Hoa Cẩm Chướng",     price: "180.000 ₫", img: "https://flowersight.com/wp-content/uploads/2024/07/bo-hoa-cam-chuong-hong-1.jpg" }
    ];

    const grid = document.getElementById("product-grid");
    grid.setAttribute("class", "product-grid");

    flowers.forEach(flower => {
        const item = document.createElement("div");
        item.className = "product-item";

        item.innerHTML = `
            <div class="product-image">
                <img src="${flower.img}" alt="${flower.name}" loading="lazy" />
            </div>
            <div class="product-info">
                <p class="name">${flower.name}</p>
                <p class="price">${flower.price}</p>
                <a class="btn-detail" href="chi-tiet.html?id=${flower.id}">Xem chi tiết</a>
            </div>
        `;

        grid.appendChild(item);
    });
});
