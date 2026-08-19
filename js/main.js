// ============================================
// القائمة الجانبية (نسختك الأصلي)
// ============================================
const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');

menu.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-w');
});

// ============================================
// نموذج الرأي (نسختك الأصلي)
// ============================================
const formBtn = document.getElementById('form-btn');
const reviewInput = document.getElementById('review-inp');

formBtn.addEventListener('click', function() {
    const review = reviewInput.value.trim();
    
    if (review === '') {
        Swal.fire({
            icon: 'warning',
            title: '⚠️ تنبيه',
            text: 'من فضلك اكتب رأيك قبل الإرسال!',
            confirmButtonColor: '#408080',
            confirmButtonText: 'حسنًا'
        });
        return;
    }
    
    Swal.fire({
        icon: 'success',
        title: '✅ شكراً لك!',
        text: 'تم استلام رأيك بنجاح، شكراً لدعمك لفلسطين 🇵🇸',
        confirmButtonColor: '#408080',
        confirmButtonText: 'نم'
    });
    
    reviewInput.value = '';
});

reviewInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        formBtn.click();
    }
});

console.log('🇵🇸 قاطِع - المنصة الرسمية لدعم فلسطين');