function openWhatsApp() {
    var phoneNumber = "966532926288"; // Saudi Arabia WhatsApp number without the '+'
    var message = "مرحبًا، أود الاستفسار عن خدمة نقل العفش.";
    var url = "https://wa.me/" + 966532926288 + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
function openContact() {
    // Replace with your contact page or phone number
    window.location.href = "tel:+966532926288";
}
