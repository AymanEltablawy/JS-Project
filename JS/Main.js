var prev = document.getElementById("prev");
var slider = document.getElementById("slider");
var next = document.getElementById("next");

let index = 1;
slider.style.backgroundImage = `url(/images/img${index}.jpg)`;

function changeImage() {
  setTimeout(() => {
    slider.style.backgroundImage = `url(/images/img${index}.jpg)`;
  }, 200);
}

function autoSlide() {
  index = index < 4 ? index + 1 : 1;
  changeImage();
}

let slideInterval = setInterval(autoSlide, 2000);

prev.addEventListener("click", () => {
  index = index > 1 ? index - 1 : 4;
  changeImage();
  resetAutoSlide();
});

next.addEventListener("click", () => {
  index = index < 4 ? index + 1 : 1;
  changeImage();
  resetAutoSlide();
});

function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 2000);
}

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const nameing = document.getElementById("nameing");
var logbtn = document.getElementsByClassName("log");
var logout = document.getElementById("logout");

if (loggedInUser) {
  logbtn[0].style.display = "none";
  logbtn[1].style.display = "none";
  logout.style.display = "block";
} else {
  logbtn[0].style.display = "block";
  logbtn[1].style.display = "block";
  logout.style.display = "none";
}

const products = [
  {
    id: 1,
    title: "Men-Shirt",
    price: 300,
    catigory: "menClothes",
    img: "/images/shirt1.png",
    discrebtion: "New Collection For men",
  },
  {
    id: 2,
    title: "Men-Shirt",
    price: 250,
    catigory: "menClothes",
    img: "/images/shirt2.png",
    discrebtion: "New Collection For men",
  },
  {
    id: 22,
    title: "Men-Shirt",
    price: 350,
    catigory: "menClothes",
    img: "/images/shirt4.png",
    discrebtion: "New Collection For men",
  },
  {
    id: 4,
    title: "Men-Shirt",
    price: 250,
    catigory: "menClothes",
    img: "/images/shirt5.png",
    discrebtion: "New Collection For men",
  },
  {
    id: 5,
    title: "Women-Dress",
    price: 500,
    catigory: "womanClothes",
    img: "/images/dress1.jpg",
    discrebtion: "Fashion Dress",
  },
  {
    id: 6,
    title: "Women-Dress",
    price: 700,
    catigory: "womanClothes",
    img: "/images/dress2.png",
    discrebtion: "Fashion Dress",
  },
  {
    id: 7,
    title: "Women-Dress",
    price: 800,
    catigory: "womanClothes",
    img: "/images/dress3.png",
    discrebtion: "Fashion Dress",
  },
  {
    id: 8,
    title: "Women-Dress",
    price: 1000,
    catigory: "womanClothes",
    img: "/images/dress4.jpg",
    discrebtion: "Fashion Dress",
  },
  {
    id: 9,
    title: "IPhone",
    price: 12000,
    catigory: "phones",
    img: "/images/iphone1.png",
    discrebtion: "iphone 11",
  },
  {
    id: 10,
    title: "IPhone",
    price: 18000,
    catigory: "phones",
    img: "/images/iphone2.png",
    discrebtion: "iphone 12",
  },
  {
    id: 11,
    title: "IPhone",
    price: 14000,
    catigory: "phones",
    img: "/images/iphone3.png",
    discrebtion: "iphone 10",
  },
  {
    id: 12,
    title: "IPhone",
    price: 22000,
    catigory: "phones",
    img: "/images/iphone4.png",
    discrebtion: "iphone 13",
  },
  {
    id: 13,
    title: "Watch",
    price: 4500,
    catigory: "watches",
    img: "/images/watch1.png",
    discrebtion: "Men special designed watch",
  },
  {
    id: 14,
    title: "Watch",
    price: 6000,
    catigory: "watches",
    img: "/images/watch2.jpg",
    discrebtion: "Men special designed watch",
  },
  {
    id: 15,
    title: "Watch",
    price: 2200,
    catigory: "watches",
    img: "/images/watch3.jpg",
    discrebtion: "Men special designed watch",
  },
  {
    id: 16,
    title: "Watch",
    price: 2800,
    catigory: "watches",
    img: "/images/watch4.jpg",
    discrebtion: "Men special designed watch",
  },
];

var menClothesBtn = document.getElementById("menClothes");
var womanClothesBtn = document.getElementById("womanClothes");
var phonesBtn = document.getElementById("phones");
var watchesBtn = document.getElementById("watches");
var menClothesPage = document.getElementById("menClothes-Page");
var womanClothesPage = document.getElementById("womanClothes-Page");
var phonesPage = document.getElementById("phones-Page");
var watchesPage = document.getElementById("watches-Page");

menClothesBtn.onclick = function () {
  menClothesPage.classList.add("active");
  womanClothesPage.classList.remove("active");
  phonesPage.classList.remove("active");
  watchesPage.classList.remove("active");

  menClothesBtn.classList.add("active");
  womanClothesBtn.classList.remove("active");
  phonesBtn.classList.remove("active");
  watchesBtn.classList.remove("active");

  menClothesPage.style.display = "flex";
  womanClothesPage.style.display = "none";
  phonesPage.style.display = "none";

  watchesPage.style.display = "none";
  mensClothes();
};

function mensClothes() {
  menClothesPage.innerHTML = ``;
  for (var i = 0; i < products.length; i++) {
    if (products[i].catigory == "menClothes") {
      menClothesPage.innerHTML += `
         <div class="product" >
        
                    <img src="${products[i].img}" alt="Card image cap">
                    <h3>${products[i].title}</h3>
                    <p>Price: ${products[i].price}$</p>
                    <p>${products[i].discrebtion}</p>
                    <button class="btn " onclick="sendtocart(${products[i].id})">Add To Cart</button>
                    <button class="btn " onclick="show(${products[i].id})">Details</button>
                  </div>  
    `;
    }
  }
}
mensClothes();

womanClothesBtn.onclick = function () {
  menClothesPage.classList.remove("active");
  womanClothesPage.classList.add("active");
  phonesPage.classList.remove("active");

  watchesPage.classList.remove("active");
  menClothesBtn.classList.remove("active");
  womanClothesBtn.classList.add("active");
  phonesBtn.classList.remove("active");

  watchesBtn.classList.remove("active");

  menClothesPage.style.display = "none";
  womanClothesPage.style.display = "flex";
  phonesPage.style.display = "none";

  watchesPage.style.display = "none";
  womanClothes();
};
phonesBtn.onclick = function () {
  menClothesPage.classList.remove("active");
  womanClothesPage.classList.remove("active");
  phonesPage.classList.add("active");

  watchesPage.classList.remove("active");
  menClothesBtn.classList.remove("active");
  womanClothesBtn.classList.remove("active");
  phonesBtn.classList.add("active");

  watchesBtn.classList.remove("active");

  menClothesPage.style.display = "none";
  womanClothesPage.style.display = "none";
  phonesPage.style.display = "flex";

  watchesPage.style.display = "none";
  phones();
};

watchesBtn.onclick = function () {
  menClothesPage.classList.remove("active");
  womanClothesPage.classList.remove("active");
  phonesPage.classList.remove("active");

  watchesPage.classList.add("active");
  menClothesBtn.classList.remove("active");
  womanClothesBtn.classList.remove("active");
  phonesBtn.classList.remove("active");

  watchesBtn.classList.add("active");

  menClothesPage.style.display = "none";
  womanClothesPage.style.display = "none";
  phonesPage.style.display = "none";

  watchesPage.style.display = "flex";
  watches();
};

function womanClothes() {
  womanClothesPage.innerHTML = ``;
  for (var i = 0; i < products.length; i++) {
    if (products[i].catigory == "womanClothes") {
      womanClothesPage.innerHTML += `
         <div class="product" >
                    <img src="${products[i].img}" alt="Card image cap">
                    <h3>${products[i].title}</h3>
                    <p>Price: ${products[i].price}$</p>
                    <p>${products[i].discrebtion}</p>
                    <button class="btn " onclick="sendtocart(${products[i].id})">Add To Cart</button>
                    <button class="btn " onclick="show(${products[i].id})">Details</button>
                  </div>  
   `;
    }
  }
}
function phones() {
  phonesPage.innerHTML = ``;
  for (var i = 0; i < products.length; i++) {
    if (products[i].catigory == "phones") {
      phonesPage.innerHTML += `
         <div class="product" >
                    <img src="${products[i].img}" alt="Card image cap">
                    <h3>${products[i].title}</h3>
                    <p>Price: ${products[i].price}$</p>
                    <p>${products[i].discrebtion}</p>
                    <button class="btn " onclick="sendtocart(${products[i].id})">Add To Cart</button>
                    <button class="btn " onclick="show(${products[i].id})">Details</button>
                  </div>  
   `;
    }
  }
}

function watches() {
  watchesPage.innerHTML = ``;
  for (var i = 0; i < products.length; i++) {
    if (products[i].catigory == "watches") {
      watchesPage.innerHTML += `
         <div class="product" >
                    <img src="${products[i].img}" alt="Card image cap">
                    <h3>${products[i].title}</h3>
                    <p>Price: ${products[i].price}$</p>
                    <p>${products[i].discrebtion}</p>
                    <button class="btn " onclick="sendtocart(${products[i].id})">Add To Cart</button>
                    <button class="btn " onclick="show(${products[i].id})">Details</button>
                  </div>  
   `;
    }
  }
}

var details = document.getElementById("details");

var count = localStorage.getItem("count") ? localStorage.getItem("count") : 0;

var countCart = document.getElementById("countCart");
countCart.innerText = count;

function sendtocart(id) {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    alert("Please log in first!");
    return;
  }
  count++;
  localStorage.setItem("count", count);
  countCart.innerText = count;

  let userCart =
    JSON.parse(localStorage.getItem(`cart_${loggedInUser.email}`)) || [];

  let selectedProduct = products.find((product) => product.id === id);

  if (selectedProduct) {
    userCart.push(selectedProduct);
    localStorage.setItem(
      `cart_${loggedInUser.email}`,
      JSON.stringify(userCart)
    );
    alert("Product added to cart!");
  }
}

function show(id) {
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("active");
  overlay.style.display = "block";

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      details.innerHTML = `
          <div class="card active" id="card">
              <img class="card-img-top" src="${products[i].img}" alt="Card image cap">
              <div class="card-body">
                  <h3 class="card-title">${products[i].title}'s Details</h3>
                  <h5 class="card-title">${products[i].title}</h5>
                  <h5 class="card-title">${products[i].price}$</h5>
                  <p class="card-text">${products[i].discrebtion}</p>
              </div>
          </div>`;

      const cardd = document.getElementById("card");
      cardd.classList.add("active");
    }
  }
}
document.querySelector(".overlay").addEventListener("click", function () {
  this.classList.remove("active");
  this.style.display = "none";
  details.innerHTML = "";
});

countCart.innerText = `${localStorage.getItem("count") | 0}`;

function displayCart() {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    document.getElementById("cartItems").innerHTML =
      "<p>Please log in to view your cart.</p>";
    return;
  }

  let userCart =
    JSON.parse(localStorage.getItem(`cart_${loggedInUser.email}`)) || [];

  let cartContainer = document.getElementById("cartItems");
  cartContainer.innerHTML = "";

  if (userCart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("buynow").style.visibility = "hidden";
    return;
  }

  userCart.forEach((product) => {
    cartContainer.innerHTML += ` <div class="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                  <div class="product m-auto" >
                      <img src="${product.img}" alt="${product.title}">
                      <h3>${product.title}</h3>
                      <p>Price: ${product.price}$</p>
                      <p>${product.discrebtion}</p>
                    
                      <button class="btn" onclick="removeFromCart(${product.id})">Remove</button>
                    </div>  
              </div>`;
  });
  BuyNow();
}
function removeFromCart(productId) {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) return;

  let userCart =
    JSON.parse(localStorage.getItem(`cart_${loggedInUser.email}`)) || [];

  userCart = userCart.filter((product) => product.id !== productId);

  localStorage.setItem(`cart_${loggedInUser.email}`, JSON.stringify(userCart));
  displayCart();
  updateCartCount(userCart.length);
}

function updateCartCount(count) {
  localStorage.setItem("count", count);
  var countCart = document.getElementById("countCart");
  countCart.innerText = count;
}

logout.addEventListener("click", function () {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    localStorage.removeItem(`cart_${loggedInUser.email}`);
  }
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("count");
  location.href = "index.html";
});

function BuyNow() {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    var cart =
      JSON.parse(localStorage.getItem(`cart_${loggedInUser.email}`)) || [];
  }

  document.getElementById("buynow").style.visibility = "visible";

  let total = cart.reduce((sum, item) => sum + item.price, 0);

  document.getElementById("totalPrice").innerText = `For: $${total}`;
}
