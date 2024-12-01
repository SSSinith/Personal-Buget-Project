const VALID_USERNAME = "admin";
const VALID_PASSWORD = "password";

const loginScreen = document.getElementById("login-screen");
const dashboardScreen = document.getElementById("dashboard-screen");
const entryFormScreen = document.getElementById("entry-form-screen");

const loginBtn = document.getElementById("login-btn");
const addBtn = document.getElementById("add-btn");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");

const filterInput = document.getElementById("filter-input");
const entryList = document.getElementById("entry-list");

const entryForm = document.getElementById("entry-form");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const notesInput = document.getElementById("notes");

const eyeIcon = document.getElementById("eyeicon");
const passwordInput = document.getElementById("password");
                                                    
eyeIcon.addEventListener("click", function () {
if (passwordInput.type === "password") {
    // Show password
     passwordInput.type = "text";
                                                                
    // Change to eye-open icon
     eyeIcon.innerHTML = `
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="24 / basic / eye">
        <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 4.41992C14.7271 4.41992 17.3352 5.85055 19.7658 8.20107C20.595 9.00297 21.3452 9.85908 22.0056 10.7155C22.4041 11.2324 22.6871 11.6389 22.842 11.8811L23.1866 12.4199L22.842 12.9587C22.6871 13.2009 22.4041 13.6075 22.0056 14.1243C21.3452 14.9808 20.595 15.8369 19.7658 16.6388C17.3352 18.9893 14.7271 20.4199 11.9995 20.4199C9.27199 20.4199 6.66386 18.9893 4.23324 16.6388C3.40403 15.8369 2.65384 14.9808 1.99344 14.1243C1.59494 13.6075 1.31201 13.2009 1.1571 12.9587L0.8125 12.4199L1.1571 11.8811C1.31201 11.6389 1.59494 11.2324 1.99344 10.7155C2.65384 9.85908 3.40403 9.00297 4.23324 8.20107C6.66386 5.85055 9.27199 4.41992 11.9995 4.41992ZM20.4218 11.9368C19.8171 11.1526 19.1297 10.3681 18.3755 9.63877C16.282 7.6143 14.1046 6.41992 11.9995 6.41992C9.89446 6.41992 7.71703 7.6143 5.62358 9.63877C4.86937 10.3681 4.18192 11.1526 3.57728 11.9368C3.44669 12.1062 3.32602 12.2677 3.2157 12.4199C3.32602 12.5721 3.44669 12.7337 3.57728 12.903C4.18192 13.6872 4.86937 14.4717 5.62358 15.2011C7.71703 17.2255 9.89446 18.4199 11.9995 18.4199C14.1046 18.4199 16.282 17.2255 18.3755 15.2011C19.1297 14.4717 19.8171 13.6872 20.4218 12.903C20.5524 12.7337 20.673 12.5721 20.7834 12.4199C20.673 12.2677 20.5524 12.1062 20.4218 11.9368ZM7.99953 12.4199C7.99953 14.6291 9.7904 16.4199 11.9995 16.4199C14.2087 16.4199 15.9995 14.6291 15.9995 12.4199C15.9995 10.2108 14.2087 8.41992 11.9995 8.41992C9.7904 8.41992 7.99953 10.2108 7.99953 12.4199ZM13.9995 12.4199C13.9995 13.5245 13.1041 14.4199 11.9995 14.4199C10.895 14.4199 9.99953 13.5245 9.99953 12.4199C9.99953 11.3154 10.895 10.4199 11.9995 10.4199C13.1041 10.4199 13.9995 11.3154 13.9995 12.4199Z" fill="#005B52"/>
        </g>
     </svg>`;
    } else {
        // Hide password
        passwordInput.type = "password";
                                                    
        // Change to eye-closed icon
        eyeIcon.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="eyeicon">
            <g id="24 / basic / eye-no">
            <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M2.70664 1.29297L1.29243 2.70718L5.35725 6.772C4.97859 7.08582 4.60385 7.42283 4.23324 7.78123C3.40403 8.58312 2.65384 9.43923 1.99344 10.2957C1.59494 10.8125 1.31201 11.2191 1.1571 11.4613L0.8125 12.0001L1.1571 12.5389C1.31201 12.7811 1.59494 13.1876 1.99344 13.7045C2.65384 14.5609 3.40403 15.417 4.23324 16.2189C6.66386 18.5695 9.27199 20.0001 11.9995 20.0001C13.7204 20.0001 15.3938 19.4306 17.0051 18.4198L21.2924 22.7072L22.7066 21.293L2.70664 1.29297ZM15.5442 16.9589L14.0315 15.4463C13.436 15.7981 12.7413 16.0001 11.9995 16.0001C9.7904 16.0001 7.99953 14.2092 7.99953 12.0001C7.99953 11.2583 8.20146 10.5636 8.55335 9.96811L6.77925 8.19401C6.39186 8.50642 6.00631 8.8488 5.62357 9.21893C4.86937 9.94828 4.18192 10.7328 3.57728 11.517C3.44669 11.6863 3.32602 11.8479 3.2157 12.0001C3.32602 12.1523 3.44669 12.3138 3.57728 12.4832C4.18192 13.2674 4.86937 14.0519 5.62357 14.7812C7.71703 16.8057 9.89446 18.0001 11.9995 18.0001C13.1677 18.0001 14.3581 17.6323 15.5442 16.9589ZM10.0673 11.482C10.0231 11.6473 9.99953 11.8209 9.99953 12.0001C9.99953 13.1046 10.895 14.0001 11.9995 14.0001C12.1787 14.0001 12.3524 13.9765 12.5176 13.9323L10.0673 11.482ZM20.0976 15.891L18.6834 14.4768C19.3175 13.8357 19.9004 13.1593 20.4218 12.4832C20.5524 12.3138 20.673 12.1523 20.7834 12.0001C20.673 11.8479 20.5524 11.6863 20.4218 11.517C19.8171 10.7328 19.1297 9.94828 18.3755 9.21893C16.282 7.19445 14.1046 6.00008 11.9995 6.00008C11.4772 6.00008 10.9505 6.0736 10.4217 6.21509L8.83968 4.63312C9.87213 4.22145 10.9266 4.00008 11.9995 4.00008C14.7271 4.00008 17.3352 5.4307 19.7658 7.78123C20.595 8.58312 21.3452 9.43923 22.0056 10.2957C22.4041 10.8125 22.6871 11.2191 22.842 11.4613L23.1866 12.0001L22.842 12.5389C22.6871 12.7811 22.4041 13.1876 22.0056 13.7045C21.4345 14.4452 20.7961 15.1857 20.0976 15.891Z" fill="#005B52"/>
            </g>
         </svg>`;
    }
    });

// State
let entries = JSON.parse(localStorage.getItem("budgetEntries")) || [];
let editingIndex = null;

// Event Listeners
loginBtn.addEventListener("click", handleLogin);
addBtn.addEventListener("click", () => showScreen(entryFormScreen));
saveBtn.addEventListener("click", saveEntry);
cancelBtn.addEventListener("click", () => showScreen(dashboardScreen));
filterInput.addEventListener("input", filterEntries);

document.getElementById("login-form").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleLogin();
    }
});

function clearForm() {
    categoryInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
    notesInput.value = "";
}

addBtn.addEventListener("click", () => {
    clearForm();
    showScreen(entryFormScreen);
});


function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        const expirationTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes
        localStorage.setItem("isLoggedIn", JSON.stringify({ isLoggedIn: true, expiresAt: expirationTime }));
        showScreen(dashboardScreen);
        renderEntries();
    } else {
        alert("Invalid username or password");
    }
}

function showScreen(screen) {
    loginScreen.classList.add("d-none");
    dashboardScreen.classList.add("d-none");
    entryFormScreen.classList.add("d-none");

    screen.classList.remove("d-none");
}

function saveEntry() {
    const category = categoryInput.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;
    const notes = notesInput.value;

    if (!category || isNaN(amount) || !date) {
        alert("Please fill in all fields.");
        return;
    }

    const entry = { category, amount, date, notes };

    if (editingIndex !== null) {
        entries[editingIndex] = entry;
        editingIndex = null;
    } else {
        entries.push(entry);
    }

    localStorage.setItem("budgetEntries", JSON.stringify(entries));
    renderEntries();
    showScreen(dashboardScreen);
    entryForm.reset();
}

function calculateTotal(entries) {
    return entries.reduce((total, entry) => total + entry.amount, 0).toFixed(2);
}

function renderEntries(filteredEntries = entries) {
    entryList.innerHTML = "";
    filteredEntries.forEach((entry, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${entry.category} - $${entry.amount.toFixed(2)} (${entry.date})</span>
            <div>
                <button class="btn btn-sm btn-info mr-2" onclick="viewEntry(${index})" data-toggle="modal" data-target="#viewModal">View</button>
                <button class="btn btn-sm btn-warning mr-2" onclick="editEntry(${index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteEntry(${index})">Delete</button>
            </div>
        `;
        entryList.appendChild(li);
    });

    const totalSpent = calculateTotal(filteredEntries);
    document.getElementById("totalSpent").textContent = totalSpent;
}


function viewEntry(index) {
    const entry = entries[index];
    document.getElementById("viewCategory").textContent = entry.category;
    document.getElementById("viewAmount").textContent = entry.amount.toFixed(2);
    document.getElementById("viewDate").textContent = entry.date;
    document.getElementById("viewNotes").textContent = entry.notes;
}


function editEntry(index) {
    const entry = entries[index];
    categoryInput.value = entry.category;
    amountInput.value = entry.amount;
    dateInput.value = entry.date;
    notesInput.value = entry.notes;

    editingIndex = index;
    showScreen(entryFormScreen);
}

function deleteEntry(index) {
    entries.splice(index, 1);
    localStorage.setItem("budgetEntries", JSON.stringify(entries));
    renderEntries();
}

function filterEntries() {
    const filter = filterInput.value.toLowerCase();
    const filteredEntries = entries.filter(entry =>
        entry.category.toLowerCase().includes(filter)
    );
    renderEntries(filteredEntries);
    entryList.innerHTML = "";
    filteredEntries.forEach((entry, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${entry.category} - $${entry.amount.toFixed(2)} (${entry.date})</span>
            <div>
                <button class="btn btn-sm btn-info mr-2" onclick="viewEntry(${index})" data-toggle="modal" data-target="#viewModal">View</button>
                <button class="btn btn-sm btn-warning mr-2" onclick="editEntry(${index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteEntry(${index})">Delete</button>
            </div>
        `;
        entryList.appendChild(li);
    });
}

function checkLoginStatus() {
    const loginData = JSON.parse(localStorage.getItem("isLoggedIn"));
    const currentTime = new Date().getTime();

    if (loginData && loginData.isLoggedIn && loginData.expiresAt > currentTime) {
        showScreen(dashboardScreen);
        renderEntries();
    } else {
        localStorage.removeItem("isLoggedIn");
        showScreen(loginScreen);
    }
    
}


window.onload = checkLoginStatus;
