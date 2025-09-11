// 1️⃣ تعريف الواجهة Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2️⃣ إنشاء طالبين
const student1: Student = {
  firstName: "Ilyass",
  lastName: "Benbraik",
  age: 24,
  location: "Morocco",
};

const student2: Student = {
  firstName: "Sara",
  lastName: "Ali",
  age: 22,
  location: "Egypt",
};

// 3️⃣ وضع الطالبين في مصفوفة
const studentsList: Student[] = [student1, student2];

// 4️⃣ إنشاء جدول HTML باستخدام Vanilla JS
const table = document.createElement("table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const thName = document.createElement("th");
thName.textContent = "First Name";
const thLocation = document.createElement("th");
thLocation.textContent = "Location";

headerRow.appendChild(thName);
headerRow.appendChild(thLocation);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

// 5️⃣ إضافة صف لكل طالب
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);

// 6️⃣ إضافة الجدول إلى صفحة HTML
document.body.appendChild(table);
