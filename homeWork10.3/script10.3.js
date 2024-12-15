const book = {
    contacts: [
        {
            name: "Oksana",
            phone: "+380988870888",
            email: "example@email.com",
        },
    ],

    find: function (name) {
        return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    },
    add: function (contact) {
        this.contacts.push(contact);
    },
};

