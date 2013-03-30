var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for(var i = 0; i < l; i++) {
                e = employees[i];
                var internalHtml = '<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>';
                $('.employee-list').append(internalHtml);
            }
        });
    },

    initialize: function () {
        this.store = new MemoryStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
        this.findByName();
    }
};

app.initialize();
