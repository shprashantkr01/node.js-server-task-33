
// This Array contains all the services information
const servicesArray = [
    {
        imageUrl: "https://lavenderindia.com/public/uploads/category/879334603_18_08_2021_12_35_34.webp",
        serviceName: "Dry Cleaning",
        price: "200"
    },
    {
        imageUrl: "https://images.ctfassets.net/exql6ar8lq2x/7jAutDzhLPFYI43qPNVdIg/814676b136cdf3066581cd8c5ca96c0e/Woman_Holding_Folded_Clothes.jpg",
        serviceName: "Wash and Fold",
        price: "100"
    },
    {
        imageUrl: "https://img.freepik.com/free-photo/unrecognizable-man-ironing-shirts-laundry-home_1098-17141.jpg?semt=ais_hybrid&w=740&q=80",
        serviceName: "Ironing",
        price: "120"
    },
    {
        imageUrl: "https://therealleathercompany.com/cdn/shop/articles/how-to-clean-leather2.jpg?v=1713342926",
        serviceName: "Leather and seude Cleaning",
        price: "1200"
    },
    {
        imageUrl: "https://cdn.shopify.com/s/files/1/0067/1521/1879/files/rsz_wgp_commercial_photoshoot_-_0082.jpg?v=1601619647",
        serviceName: "Wedding dress cleaning",
        price: "1000"
    }
];
// This array will contain future cart items to be added by the user}
let cartItems = [];


// Two eventlisteners are attached to the hamburger icon to open and close the hamburger mobile menu
const openSideNavigation = document.getElementById('openSideNavigation');
const closeSideNavigation = document.getElementById('closeSideNavigation');
const mobileNavigation = document.getElementById('mobileNavigation');

openSideNavigation.addEventListener('click', () => {
    mobileNavigation.style.right = "0";
})
closeSideNavigation.addEventListener('click', () => {
    mobileNavigation.style.right = "-260px";
})



// UpdateServiceTab function is used to update the service information from the servicesArray.
const serviceImage = document.querySelector('.service-image');
const serviceName = document.querySelector('.service-name');
const servicePrice = document.querySelector('.service-price');
let serviceIndex = 0;
function updateServiceTab(index) {
    serviceImage.innerHTML = `<img src="${servicesArray[index].imageUrl}" alt="${servicesArray[index].serviceName}">`;
    serviceName.textContent = servicesArray[index].serviceName;
    servicePrice.textContent = `₹${servicesArray[index].price}`;
}
updateServiceTab(serviceIndex);


// event listener to provide skip button functionality.
const skipBtn = document.querySelector('.skip-btn');
skipBtn.addEventListener('click', () => {
    serviceIndex = (serviceIndex + 1) % servicesArray.length;
    updateServiceTab(serviceIndex);
});

// event listener to provide add items button functionality.
const addItemsBtn = document.querySelector('.add-btn');
const cartTableBody = document.getElementById('cartTableBody');
const emptyTableDiv = document.querySelector('.emptyTable');
const totalAmount = document.querySelector('.amount');
addItemsBtn.addEventListener('click', () => {
    let currService = servicesArray[serviceIndex];
    cartItems.push(currService);
    cartTableBody.innerHTML = cartItems.map((item, index) => {
        return `<tr><td>${index + 1}</td><td>${item.serviceName}</td><td>&#8377;${item.price}</td></tr>`
    }).join("");

    const totalBill = cartItems.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);
    totalAmount.textContent = `₹${totalBill}`;
    emptyTableDiv.style.display = "none";
    serviceIndex = (serviceIndex + 1) % servicesArray.length;
    updateServiceTab(serviceIndex);
    checkForm();
});


/* Book Now button functionality */
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const bookNowBtn = document.getElementById('bookNowBtn');
function checkForm() {
    if (
        nameInput.value.trim() !== "" &&
        emailInput.value.trim() !== "" &&
        phoneInput.value.trim() !== "" &&
        cartItems.length > 0
    ) {
        bookNowBtn.disabled = false;
    } else {
        bookNowBtn.disabled = true;
    }
}
nameInput.addEventListener("input", checkForm);
emailInput.addEventListener("input", checkForm);
phoneInput.addEventListener("input", checkForm);
const form = document.querySelector("#bookNow form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Service Booked Successfully.");
    window.location.href = '/home';
});