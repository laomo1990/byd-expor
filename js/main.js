// ===== Common JS Functions =====

// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('active');
        });
    });

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// FAQ Toggle
function toggleFaq(el) {
    const item = el.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
}

// Form Submit (Formspree integration)
function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name') || 'Khách hàng';
    const submitBtn = form.querySelector('.form-submit');
    const successMsg = form.querySelector('.form-success');

    // Show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Đang gửi...';

    // ===== FORM NOTIFICATION CONFIGURATION =====
    // Option 1: Formspree (Recommended - no backend needed)
    // Register at https://formspree.io, create a form, and replace the endpoint below
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'; // ← Replace with your Formspree ID

    // Option 2: Feishu/Lark Webhook
    // Create a custom bot in Feishu group, get webhook URL, replace below
    const FEISHU_WEBHOOK = ''; // ← Optional: your Feishu webhook URL

    // Try Formspree first if configured
    if (FORMSPREE_ENDPOINT && !FORMSPREE_ENDPOINT.includes('your-form-id')) {
        fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                showSuccess();
            } else {
                showFallback();
            }
        }).catch(() => {
            showFallback();
        });
    } else if (FEISHU_WEBHOOK) {
        // Send to Feishu webhook
        const data = {
            msg_type: 'text',
            content: {
                text: `🚗 新客户询价\n\n姓名: ${formData.get('name')}\n公司: ${formData.get('company') || 'N/A'}\n电话: ${formData.get('phone')}\n邮箱: ${formData.get('email') || 'N/A'}\n车型: ${formData.get('model') || 'N/A'}\n数量: ${formData.get('quantity') || 'N/A'}\n留言: ${formData.get('message') || 'N/A'}`
            }
        };
        fetch(FEISHU_WEBHOOK, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => showSuccess()).catch(() => showFallback());
    } else {
        // Fallback: show success message (no actual sending)
        setTimeout(showFallback, 800);
    }

    function showSuccess() {
        submitBtn.disabled = false;
        submitBtn.textContent = '🚀 Gửi yêu cầu nhận báo giá';
        if (successMsg) {
            successMsg.classList.add('show');
            successMsg.textContent = '✅ Cảm ơn ' + name + '! Chúng tôi đã nhận được thông tin và sẽ liên hệ trong 2 giờ làm việc.';
        } else {
            alert('Cảm ơn ' + name + '! Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ trong 2 giờ làm việc.');
        }
        form.reset();
        setTimeout(() => { if (successMsg) successMsg.classList.remove('show'); }, 5000);
    }

    function showFallback() {
        // Fallback: open mail client
        submitBtn.disabled = false;
        submitBtn.textContent = '🚀 Gửi yêu cầu nhận báo giá';
        const subject = encodeURIComponent('Yêu cầu báo giá xe BYD từ ' + name);
        const body = encodeURIComponent(
            `Họ tên: ${formData.get('name')}\n` +
            `Công ty: ${formData.get('company')}\n` +
            `Điện thoại: ${formData.get('phone')}\n` +
            `Email: ${formData.get('email')}\n` +
            `Mẫu xe quan tâm: ${formData.get('model')}\n` +
            `Số lượng: ${formData.get('quantity')}\n` +
            `Nội dung: ${formData.get('message')}`
        );
        window.location.href = `mailto:sales@byd-vietnam-export.com?subject=${subject}&body=${body}`;
        if (successMsg) {
            successMsg.classList.add('show');
            successMsg.textContent = '✅ Đã mở ứng dụng email. Vui lòng gửi email để hoàn tất.';
        }
    }
}

// Car Card Rendering (used in multiple pages)
function renderCarCard(car) {
    const tagMap = {
        'hot': '🔥 HOT',
        'new': '✨ NEW',
        'best': '⭐ BEST',
        'flagship': '🏆 FLAGSHIP'
    };
    return `
        <div class="car-card">
            <a href="car-detail.html?id=${car.id}">
                <div class="car-image">
                    ${car.tag ? `<span class="car-tag tag-${car.tag}">${tagMap[car.tag]}</span>` : ''}
                    <img src="${car.img}" alt="${car.name}" loading="lazy" onerror="this.style.display='none'">
                </div>
            </a>
            <div class="car-body">
                <a href="car-detail.html?id=${car.id}">
                    <div class="car-name">${car.name}</div>
                    <div class="car-name-cn">${car.nameCn}</div>
                </a>
                <div class="car-specs">
                    <span class="spec-item ${car.type==='BEV'?'bev':'dmi'}">${car.type}</span>
                    <span class="spec-item">${car.range}</span>
                    <span class="spec-item">${car.power}</span>
                </div>
                <div class="car-prices">
                    <span class="car-fob">¥${car.fob}万</span>
                    <span class="car-market">¥${car.market}万 thị trường</span>
                </div>
                <div class="car-actions">
                    <a href="car-detail.html?id=${car.id}" class="car-btn car-btn-detail">Chi tiết</a>
                    <a href="https://zalo.me/84123456789" target="_blank" class="car-btn car-btn-zalo">📱 Zalo</a>
                </div>
            </div>
        </div>
    `;
}

// Filter Cars
function filterCars(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    let filtered = cars;
    if (type === 'BEV') filtered = cars.filter(c => c.type === 'BEV');
    else if (type === 'DM-i') filtered = cars.filter(c => c.type === 'DM-i');
    else if (type === 'sedan') filtered = cars.filter(c => c.body === 'sedan');
    else if (type === 'suv') filtered = cars.filter(c => c.body === 'suv');
    else if (type === 'under10') filtered = cars.filter(c => c.fob < 10);

    const grid = document.getElementById('carGrid');
    if (grid) {
        grid.innerHTML = filtered.map(car => renderCarCard(car)).join('');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
    lastScroll = currentScroll;
});
