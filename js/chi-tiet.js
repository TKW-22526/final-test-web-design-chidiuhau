document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const flowerId = parseInt(urlParams.get("id")) || 1;

    const database = {
        1: { name: "Hoa Hồng Pháp", price: "250.000 ₫",
             images: ["https://stc.hoatuoihoangnga.com/data/uploads/products/920/hoa-chuc-mung-sinh-nhat-nguoi-yeu-bo-hoa-hong-do-10-bong-mix-la-bac.1.jpg?v=1701668241",
                      "https://hoatuoihoangnga.com/data/uploads/products/1361/bo-hoa-hong-do-10-bong-tang-sinh-nhat-nguoi-yeu.6.jpg",
                      "https://linhflower.com/wp-content/uploads/2025/07/462135205_1208234737550861_2921491338036912604_n.jpg.jpg"],
             desc: "Hoa hồng đỏ nhập khẩu trực tiếp. Độ tươi lâu từ 5–7 ngày. Kèm theo thiệp chúc mừng, băng rôn theo yêu cầu. Giao hàng miễn phí nội thành, thời gian 1–2 giờ." },
        2: { name: "Hoa Hướng Dương", price: "150.000 ₫",
             images: ["https://linhflower.com/wp-content/uploads/2025/08/34e5c817e43727697e26.jpg.jpg",
                      "https://hoatuoiangel.com/upload/elfinder/z6780029815515_c7233759d61cc4df4ebc8253d8c3ad70.jpg",
                      "https://vuonhoatuoi.vn/wp-content/uploads/2023/09/phonto-82-400x400.jpg"],
             desc: "Biểu tượng của sự rực rỡ và hy vọng. Thích hợp tặng lễ tốt nghiệp. Giao hàng miễn phí nội thành, thời gian 1–2 giờ." },
        3: { name: "Hoa Tulip Hà Lan", price: "350.000 ₫",
             images: ["https://product.hstatic.net/200000015764/product/z5198597547556_04afb30b86a0c7b97609910af4d2677c_780ff65486234e39bfefb2a704dfa340_master.jpg",
                      "https://bizweb.dktcdn.net/thumb/1024x1024/100/442/027/products/img-4058-jpg.jpg?v=1723713087120",
                      "https://product.hstatic.net/200000015764/product/z5198597522794_434b821020b15fa64d38ea270a276d53_c9a3ff441c6b46ed8360151435b2411c_master.jpg"],
             desc: "Nhập khẩu trực tiếp từ Hà Lan. Thể hiện tình yêu hoàn hảo và chân thành. Giao hàng miễn phí nội thành, thời gian 1–2 giờ." },
        4: { name: "Cúc Họa Mi", price: "120.000 ₫",
             images: ["https://flowersight.com/wp-content/uploads/2023/08/Cuc-hoa-mi-hoai-hoa-tuong-trung-cho-tinh-me-cao-ca-min-682x1024.jpg",
                      "https://storage.googleapis.com/cdn_dlhf_vn/public/products/WYP6/WYP60AD006/1713242936_661e03387e967.jpg",
                      "https://flowercorner.b-cdn.net/image/cache/catalog/products/B%C3%B3%20Hoa/bo-cuc-hoa-mi-be-xinh-v2.jpg.webp"],
             desc: "Mang vẻ đẹp tinh khôi, giản dị nhưng vô cùng cuốn hút. Phù hợp cho nhiều dịp khác nhau." },
        5: { name: "Hoa Lan Hồ Điệp", price: "800.000 ₫",
             images: ["https://hoatuoi360.vn/uploads/file/Baiviet2025/tai-sao-lan-ho-diep-trang-duoc-nhieu-khach-ua-chuong.jpg",
                      "https://static.chotot.com/storage/chotot-kinhnghiem/nha/2021/04/b2f51786-hoa-lan-ho-diep-2.jpg",
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66z8F3mE_mjMNijmOT_7ZVFfxnkUrzVSpig&s"],
             desc: "Sang trọng, quý phái. Rất bền, có thể chưng được hơn 1 tháng. Lựa chọn hoàn hảo tặng khai trương, sự kiện." },
        6: { name: "Hoa Ly Ly", price: "200.000 ₫",
             images: ["https://flowercorner.b-cdn.net/image/cache/catalog/products/B%C3%B3%20Hoa/bo-hoa-ly-little-fancy.jpg.webp",
                      "https://shophoatuoi.saigonhoa.com/wp-content/uploads/2022/12/hoa-de-ban-hoa-lily.jpg",
                      "https://storage.googleapis.com/cdn_dlhf_vn/blog/2016/05/lily-in-vase-e1696320871952.jpg"],
             desc: "Hương thơm nồng nàn, mang ý nghĩa thanh cao và kiêu hãnh. Giao hàng miễn phí nội thành, thời gian 1–2 giờ." },
        7: { name: "Hoa Mẫu Đơn", price: "450.000 ₫",
             images: ["https://www.flowercorner.vn/image/catalog/products/August%202023/bo-hoa-mau-don-dep.jpg",
                      "https://flowercorner.b-cdn.net/image/cache/catalog/products/B%C3%B3%20Hoa/bo-hoa-mau-don-nu-hoa-he-mo.jpg.webp",
                      "https://moonflowerhanoi.com/wp-content/uploads/2021/07/bohoamaudondep2500.jpg"],
             desc: "Vương giả, lộng lẫy — vua của các loài hoa mang lại may mắn. Giao hàng miễn phí nội thành, thời gian 1–2 giờ." },
        8: { name: "Hoa Lavender", price: "300.000 ₫",
             images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEfGoEVSrtmu1PuEQAMm6ZPpQ4fq42Z1ZYQ&s",
                      "https://flowercorner.b-cdn.net/image/cache/catalog/products/Autumn_2024/gia-dieu-tim.jpg.webp",
                      "https://flowercorner.b-cdn.net/image/cache/catalog/products/Autumn_2024/NEWBOUQUET_082.jpg.webp"],
             desc: "Hoa oải hương khô thơm dịu, giúp thư giãn tinh thần. Giao hàng miễn phí nội thành, thời gian 1–2 giờ." },
        9: { name: "Hoa Cẩm Chướng", price: "180.000 ₫",
             images: ["https://hoatuoiangel.com/thumbs/765x699x2/upload/product/z5768444534241d45fd5d9ae7aa5c4507bad6cca1fa740-2888.jpg",
                      "https://flowercorner.b-cdn.net/image/cache/catalog/products/B%C3%B3%20Hoa/bo-hoa-cam-chuong-tinh-lang-man.jpg.webp",
                      "https://bizweb.dktcdn.net/100/487/411/products/z5674633333598-7fa0239261b86a97f352d9218fa72db5-1722653812374.jpg?v=1760432524250"],
             desc: "Tượng trưng cho tình mẫu tử, tình bạn và sự chân thành. Giao hàng miễn phí nội thành, thời gian 1–2 giờ." }
    };

    const flower = database[flowerId] || database[1];
    let currentIndex = 0;

    const root = document.getElementById("detail-root");

    // breadcumb
    const breadcrumb = document.createElement("div");
    breadcrumb.className = "breadcrumb";
    breadcrumb.innerHTML = `<a href="san-pham.html">← Sản phẩm</a> &rsaquo; <span>${flower.name}</span>`;
    root.appendChild(breadcrumb);

    // congtano
    const container = document.createElement("div");
    container.className = "detail-container";

    // hinh
    const imageBox = document.createElement("div");
    imageBox.className = "detail-image-box";

    const mainImg = document.createElement("img");
    mainImg.src = flower.images[0];
    mainImg.alt = flower.name;
    mainImg.id = "main-img";
    imageBox.appendChild(mainImg);

    // nutkeohinh
    const btnPrev = document.createElement("button");
    btnPrev.className = "slider-btn prev-btn";
    btnPrev.innerHTML = "&#10094;";
    imageBox.appendChild(btnPrev);

    const btnNext = document.createElement("button");
    btnNext.className = "slider-btn next-btn";
    btnNext.innerHTML = "&#10095;";
    imageBox.appendChild(btnNext);

    // . duoi hinh nho
    const dotRow = document.createElement("div");
    dotRow.className = "dot-row";
    const dots = flower.images.map((_, i) => {
        const d = document.createElement("span");
        d.className = "dot" + (i === 0 ? " active" : "");
        d.onclick = () => goTo(i);
        return d;
    });
    dots.forEach(d => dotRow.appendChild(d));
    imageBox.appendChild(dotRow);

    function goTo(idx) {
        currentIndex = idx;
        mainImg.src = flower.images[idx];
        dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    }
    btnPrev.onclick = () => goTo((currentIndex - 1 + flower.images.length) % flower.images.length);
    btnNext.onclick = () => goTo((currentIndex + 1) % flower.images.length);

    container.appendChild(imageBox);

    // info
    const infoBox = document.createElement("div");
    infoBox.className = "detail-info-box";

    const title = document.createElement("h1");
    title.textContent = flower.name;
    infoBox.appendChild(title);

    const price = document.createElement("div");
    price.className = "detail-price";
    price.textContent = flower.price;
    infoBox.appendChild(price);

    const desc = document.createElement("p");
    desc.className = "detail-desc";
    desc.innerHTML = `<strong>Mô tả:</strong><br>${flower.desc}`;
    infoBox.appendChild(desc);

    // nut
    const btnGroup = document.createElement("div");
    btnGroup.className = "button-group";

    const topBtns = document.createElement("div");
    topBtns.className = "top-buttons";

    const btnBuy = document.createElement("button");
    btnBuy.className = "btn-cart";
    btnBuy.innerHTML = "🛒 Chọn Mua";
    btnBuy.onclick = () => alert(`Đã đặt mua: ${flower.name}!`);

    const btnCart = document.createElement("button");
    btnCart.className = "btn-cart-icon";
    btnCart.innerHTML = "📦 Giỏ Hàng";
    btnCart.onclick = () => alert("Đã thêm vào giỏ hàng!");

    topBtns.appendChild(btnBuy);
    topBtns.appendChild(btnCart);
    btnGroup.appendChild(topBtns);

    const btnReview = document.createElement("button");
    btnReview.className = "btn-review-small";
    btnReview.innerHTML = "⭐ Đánh giá sản phẩm";
    btnReview.onclick = () => alert("Tính năng đánh giá sẽ sớm ra mắt.");
    btnGroup.appendChild(btnReview);

    infoBox.appendChild(btnGroup);
    container.appendChild(infoBox);
    root.appendChild(container);
});
