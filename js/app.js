Vue.use(VeeValidate);
new Vue({

    el: '#app',

    data: {
        person: { name: '', sex: 'Male', hobbies: [], email: '', phone: '', username: '', password: '' },
        people: [
            { name: 'Udin', sex: 'Male', hobbies: ['Gaming'], email: 'udin@gmail.com', phone: '11111', username: 'udin', password: 'udinasdasd' },
            { name: 'Adin', sex: 'Male', hobbies: ['Gaming'], email: 'udin@gmail.com', phone: '11111', username: 'udin', password: 'udinasdasd' },
            { name: 'Idin', sex: 'Male', hobbies: ['Gaming'], email: 'udin@gmail.com', phone: '11111', username: 'udin', password: 'udinasdasd' },
            { name: 'Sudin', sex: 'Male', hobbies: ['Gaming'], email: 'udin@gmail.com', phone: '11111', username: 'udin', password: 'udinasdasd' },
            { name: 'Madun', sex: 'Male', hobbies: ['Gaming'], email: 'udin@gmail.com', phone: '11111', username: 'udin', password: 'udinasdasd' },
            { name: 'Mamat', sex: 'Male', hobbies: ['Gaming'], email: 'udin@gmail.com', phone: '11111', username: 'udin', password: 'udinasdasd' },
            { name: 'Rocky', sex: 'Male', hobbies: ['Gaming'], email: 'udin@gmail.com', phone: '11111', username: 'udin', password: 'udinasdasd' },
            { name: 'John', sex: 'Male', hobbies: ['Gaming'], email: 'udin@gmail.com', phone: '11111', username: 'udin', password: 'udinasdasd' },
        ],
        edit: false
    },

    methods: {

        add: function() {
            if (this.edit === false) {
                this.people.push(this.person);
                console.log("Added!");
            } else {
                this.people.splice(this.person.id, 1, this.person);
                this.edit = false;
                console.log("Updated!");
            }
        },

        deletePerson: function(person) {
            let index = this.people.indexOf(person);
            this.people.splice(index, 1);
            console.log("Deleted!");
        },

        editPerson: function(person) {
            this.person.id = this.people.indexOf(person);
            this.person.name = person.name;
            this.person.sex = person.sex;
            this.person.hobbies = person.hobbies;
            this.person.email = person.email;
            this.person.phone = person.phone;
            this.person.username = person.username;
            this.person.password = person.password;
            this.edit = true;
        },

        clear: function() {
            this.person = { name: '', sex: 'Male', hobbies: [], email: '', phone: '', username: '', password: '' };
            console.log("Cleared!");
            setTimeout(() => {
                this.errors.clear();
            }, 100);
        },

        capitalize: function() {
            var splitStr = this.person.name.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            this.person.name = splitStr.join(' ');
        },

        validateBeforeSubmit(form) {
            this.$validator.validateAll().then(() => {
                this.add();
                this.clear();
            }).catch(() => {
                alert('Correct them errors!');
            });
        }
    }
});
