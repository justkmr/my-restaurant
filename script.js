// Sample Data for Menu Array
const menuData = [
    {
        id: 1,
        title: "Crispy Spring Rolls",
        category: "starter",
        price: "₹149",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
        desc: "Golden fried crispy wrappers stuffed with fresh spiced vegetables."
    },
    {
        id: 2,
        title: "Paneer Tikka",
        category: "starter",
        price: "₹249",
        img: "https://images.unsplash.com/photo-1567184109411-47a7a39ea897?auto=format&fit=crop&w=400&q=80",
        desc: "Marinated cottage cheese cubes grilled to perfection in a tandoor."
    },
    {
        id: 3,
        title: "Butter Chicken",
        category: "main",
        price: "₹380",
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80",
        desc: "Tender chicken cooked in a rich, creamy, and buttery tomato gravy."
    },
    {
        id: 4,
        title: "Dal Makhani",
        category: "main",
        price: "₹280",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80",
        desc: "Slow-cooked black lentils with cream, butter, and authentic Indian spices."
    },
    {
        id: 5,
        title: "Chocolate Brownie",
        category: "dessert",
        price: "₹180",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        desc: "Fudgy warm chocolate brownie served with a scoop of vanilla ice cream."
    },
    {
        id: 6,
        title: "Gulab Jamun",
        category: "dessert",
        price: "₹99",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80",
        desc: "Soft, deep-fried berry-sized balls made of milk solids, soaked in rose-flavored sugar syrup."
    }
];

const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Load items on page load
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menuData);
});

// Function to render menu items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-card">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="menu-info">
                        <div class="menu-title-price">
                            <h3>${item.title}</h3>
                            <span class="price">${item.price}</span>
                        </div>
                        <p>${item.desc}</p>
                    </div>
                </article>`;
    }).join("");
    
    menuGrid.innerHTML = displayMenu;
}

// Filter Functionality
filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // Toggle active class on buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const category = e.currentTarget.dataset.filter;
        
        if(category === 'all') {
            displayMenuItems(menuData);
        } else {
            const filteredMenu = menuData.filter((item) => item.category === category);
            displayMenuItems(filteredMenu);
        }
    });
});

// Reservation Form Handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    
    alert(`Thank you, ${name}! Your table for ${guests} has been provisionally booked.`);
    document.getElementById('contact-form').reset();
});