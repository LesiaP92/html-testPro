const contacts = [
    {
        name: "Serhii",
        phone: "+380999999999",
        email: "example@email.com",
    },
];

function Contact({ id, name, phone, email }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {
    this.contacts = contacts;
}

Book.prototype.find = (name) => {
    return this.contacts.find((contact) => contact.name === name) || "Контакт не знайдено";
};

Book.prototype.add = (contact) => {
    return this.add()
};

Book.prototype.remove = (id) => {
    // youre awesome code here
};

Book.prototype.update = (id) => {
    // youre awesome code here
};

const mappedContacts = contacts.map((el) => {
    // youre awesome code here
    return new Contact(el);
});

const book = new Book(mappedContacts);

console.log(book);