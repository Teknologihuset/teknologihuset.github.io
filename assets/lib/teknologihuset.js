Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,2);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
};

moment.locale('nb');

var Teknologihuset = Ember.Application.create({
    currentWeek: function() {
        var now = new Date();
        var weekNumber = now.getWeek();
        var year = now.getFullYear();

        return year + ";" + weekNumber;
    },

    currentDay: function() {
        var rightNow = new Date();
        var res = rightNow.toISOString().slice(0,10);
        return res;
    },

    firstBookingDay: function() {
        var rightNow = moment().add(2, "days");

        while (rightNow.isoWeekday() == 6 || rightNow.isoWeekday() == 7) {
            rightNow.add(1, 'days');
        }

        var res = rightNow.format("YYYY-MM-DD");
        return res;
    }
});
Teknologihuset.AnimateInViewMixin = Ember.Mixin.create({
    didInsertElement: function() {
        this._super();

        console.log('AnimateInViewMixin didInsertElement!!');

        this.animate();
    },

    modelObserver: function() {
        console.log('MODEL OBSERVER!!');

        this.animate();
    }.observes('model').on('init'),

    animate: function() {
        console.log('animateIn: ' + this.get('elementId'));
        console.log('parent: ' + this.get('_view'));
        console.log('animateCssClass: ' + this.get('animateCssClass'));

        var cssClass = this.get('animateCssClass');
        if (cssClass) {
            $("." + cssClass).first().hide();
            Ember.run.schedule("afterRender", function() {
                $("." + cssClass).first().fadeIn();
            });
        } else {
            var elementId = this.get('elementId');
            $("#" + elementId).hide();

            Ember.run.schedule("afterRender", function() {
                $("#" + elementId).fadeIn(500);
            });
        }
    }
});
Teknologihuset.AnimateOutViewMixin = Ember.Mixin.create({
    willDestroyElement: function() {
        this._super();

        console.log('AnimateOutViewMixin willDestroyElement!!');

        this.animateOut();
    },

    animateOut: function() {
        console.log('animateIn: ' + this.get('elementId'));
        console.log('parent: ' + this.get('_view'));
        console.log('animateCssClass: ' + this.get('animateCssClass'));

        var cssClass = this.get('animateCssClass');
        if (cssClass) {
            var cloned = $("." + cssClass).first().clone();

            this.$().parent().prepend(clone);
            clone.fadeOut(function() {

            });
        } else {
            var clone = this.$().clone();
            this.$().parent().prepend(clone);
            clone.fadeOut(function() {

            });
        }
    }
});


Teknologihuset.CommunityController = Ember.ObjectController.extend({
    currQuotePage: 0,

    sortProperties: ['name:asc'],
    sortedCommunities: Ember.computed.sort('communities', 'sortProperties'),

    hasAtLeastTwoQuotes: function() {
        return this.get('currQuotes.length') >= 2;
    }.property('currQuotes.length'),

    currQuotes: function() {
        var currQ = [];

        if (this.get('quotes')) {
            this.get('quotes').forEach(function(quote) {
                if (quote.get('type') === 'community') {
                    currQ.pushObject(quote);
                }

                if (currQ.get('length') >= 2) {
                    return currQ;
                }
            });
        }

        return currQ;
    }.property('quotes.length', 'currQuotePage')
});
Teknologihuset.CommunityRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            page: this.store.find('page', 'community'),
            communities: this.store.find('community'),
            quotes: this.store.find('quote')
        });
    }
});
Teknologihuset.CommunityView = Ember.View.extend(Teknologihuset.AnimateInViewMixin, {});
Teknologihuset.BackgroundParallaxComponent = Ember.Component.extend({
    classNames: ['backgroundParallax'],
    attributeBindings: ['backgroundRatio:data-stellar-background-ratio', 'backgroundRatio:data-stellar-ratio', 'backgroundSize:background-size', 'dataStellarVerticalOffset:data-stellar-vertical-offset', 'dataStellarOffsetParent:data-stellar-offset-parent'],
    backgroundRatio: 0.7,
    backgroundSize: "cover",

    dataStellarVerticalOffset: 0,
    dataStellarOffsetParent: true,

    didInsertElement: function() {
        var offset = 0;

        var elementId = this.get('elementId');
        console.log('elementId: ' + elementId);
        if ($("#" + elementId).offset()) {
            console.log("offset1: " + $("#" + elementId).offset().top);
            offset = ($("#" + elementId).offset().top * -1);
        }

        console.log("offset2: " + offset);

        //this.set('dataStellarVerticalOffset', offset);


    },

    dataStellarVerticalOffsetObserver: function() {
        var elementId = this.get('elementId');
        $("#" + elementId).stellar();
    }.observes('dataStellarVerticalOffset'),

    photoUrlObserver: function() {
        Ember.run.schedule('afterRender', this, function(){
            this.updateBackground();
        });
    }.observes('photo').on('init'),

    updateBackground: function() {

        var component = this;
        $('#' + this.get('elementId')).fadeOut(function() {
            $('#' + component.get('elementId')).css('background', 'url("' + component.get('photoUrl') + '") 0% 50% no-repeat').css('background-size', 'cover').fadeIn('slow');
        });

        $("#" + this.get('elementId')).stellar();
    }
});

Teknologihuset.DatePickerComponent = Ember.Component.extend({
    classNames: ['text-center','fullWidth'],

    didInsertElement: function() {

        var elementId = this.get('elementId');
        $("#" + elementId).hide();

        var comp = this;
        $("#" + this.get('elementId')).datepicker({
            "calendarWeeks": true,
            "startDate": new Date(),
            daysOfWeekDisabled: [0,6],
            "weekStart": 1,
            "todayBtn": true,
            "todayHighlight": true,
            "language": "no"
        }).on("changeDate", function(e){
                console.log('new date picked: ' + e);
                console.log(e.date.getWeek());
                var dateStr = moment(e.date).format('YYYY-MM-DD');

                if (dateStr) {
                    comp.sendAction('action', dateStr);
                }
            });

        Ember.run.schedule("afterRender", function() {
            $("#" + elementId).slideDown();
        });
    }
});
Teknologihuset.DeltakereVelgerComponent = Ember.Component.extend(Teknologihuset.AnimateInViewMixin, {
    elementId: 'deltakereVelger',

    classNameBindings: ['initialClassName'],


    actions: {
        velgFaaDeltakere: function() {
            this.set('deltakere', "faa");
            this.set('antallDeltakereValgt', true);
        },

        velgMangeDeltakere: function() {
            this.set('deltakere', "mange");
            this.set('antallDeltakereValgt', true);
        }
    },

    isValgtObserver: function() {
        if (this.get('antallDeltakereValgt') === true && this.get('animateSelection')) {
            var self = this;
            /*Ember.run.scheduleOnce('afterRender', function() {
                Ember.$("#" + self.get('elementId')).animate({ 'marginTop': '0px', opacity: 0.5 }, 500, function() {
                    Ember.$("#" + self.get('elementId') + " h1").animate({ 'marginBottom': '10px', opacity: 0.5 }, 500);
                });
            });*/
        }
    }.observes('antallDeltakereValgt').on('init'),

    deltakereObserver: function() {
        if (this.get('deltakere') === 'faa') {
            this.set('isFaaDeltakere', true);
            this.set('isMangeDeltakere', false);
        } else if (this.get('deltakere') === 'mange') {
            this.set('isFaaDeltakere', false);
            this.set('isMangeDeltakere', true);
        }
    }.observes('deltakere').on('init')
});
Teknologihuset.FormGroupComponent = Ember.Component.extend({
    classNames: ['form-group','has-feedback'],
    classNameBindings: ['hasSuccess', 'hasWarning'],

    hasSuccess: function() {
        return this.get('inputValid');
    }.property('inputValid'),

    hasWarning: function() {
        return !this.get('hasSuccess');
    }.property('hasSuccess')
});
Teknologihuset.FormalitetVelgerComponent = Ember.Component.extend(Teknologihuset.AnimateInViewMixin, {
    elementId: "velgFormalitet",
    classNames: [],

    isUformelt: Ember.computed.not('isFormelt'),

    actions: {
        velgFormalitet: function() {
            this.set('formelt', "formelt");
            this.set('formalitetValgt', true);
        },

        velgUformalitet: function() {
            this.set('formelt', "uformelt");
            this.set('formalitetValgt', true);
        }
    },

    isValgtObserver: function() {
        if (this.get('formalitetValgt') === true && this.get('animateSelection')) {
            var self = this;
            Ember.run.scheduleOnce('afterRender', function () {
                Ember.$("#" + self.get('elementId')).animate({'marginTop': '0px', opacity: 0.5}, 500, function () {
                    Ember.$("#" + self.get('elementId') + " h1").animate({'marginBottom': '10px', opacity: 0.5}, 500);
                });
            });
        }
    }.observes('formalitetValgt').on('init'),

    formeltObserver: function() {
        if (this.get('formelt') === 'formelt') {
            this.set('isFormelt', true);
            this.set('isUformelt', false);
        } else if (this.get('formelt') === 'uformelt') {
            this.set('isFormelt', false);
            this.set('isUformelt', true);
        }
    }.observes('formelt').on('init')
});
Teknologihuset.HighlightButtonComponent = Ember.Component.extend({
    tagName: 'button',
    classNames: ['tn-btn'],
    classNameBindings: ['isButtonSelected'],
    selected: false,
    active: false,

    actions: {
        clickedAction: function() {
            this.sendAction();
        }
    },

    click: function() {
        this.sendAction('clickedAction');
    },

    isButtonSelected: function() {
        console.log('isButtonSelected: ' + this.get('active') + " :: " + this.get('selected'));
        if (this.get('active') === true && this.get('selected') === true) {
            return this.get('selectedClassName');
        } else {
            return this.get('nonSelectedClassName');
        }
    }.property('active', 'selected')
});
Teknologihuset.RoomDescriptionComponent = Ember.Component.extend(Teknologihuset.AnimateInViewMixin, {
    deltakere: function() {
        var qp = "faa";
        if (this.get('room.kapasitet') > 20) {
            qp = "mange";
        }

        return qp;
    }.property('room.kapasitet')
});
Teknologihuset.HeaderController = Ember.ArrayController.extend({
    needs: ['index'],

    currentWeek: function() {
        return Teknologihuset.currentWeek();
    }.property('Teknologihuset.currentWeek')
});
Teknologihuset.HeaderView = Ember.View.extend({
    didInsertElement: function() {
        $("#mobile-menu-button").sidr();
        $().stellar();
    }
});
Ember.Handlebars.registerBoundHelper('buttonDate', function(property) {
    if (property) {
        return moment(property).format('dd D MMM');
    }
});

Ember.Handlebars.registerBoundHelper('dmy', function(property) {
    if (property) {
        return moment(property).format('DD/MM/YYYY');
    }
});
Ember.Handlebars.registerBoundHelper('week-time-period', function(property) {
    if (property !== null && property.get('week') && property.get('year')) {
        var week = property.get('week');
        var year = property.get('year');

        console.log(week + " : " + year);
        if (year === null) {
            year = (new Date()).getFullYear();
        }

        var date = new Date();
        date.setYear(year);
        date.setDate(1);
        date.setMonth(0);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        // 0 correspond au dimanche et 6 correspond au samedi.
        var FIRST_DAY_OF_WEEK = 1; // Monday, according to iso8601
        var WEEK_LENGTH = 7; // 7 days per week
        var day = date.getDay();
        day = (day === 0) ? 7 : day; // make the days monday-sunday equals to 1-7 instead of 0-6
        var dayOffset=-day+FIRST_DAY_OF_WEEK; // dayOffset will correct the date in order to get a Monday
        if (WEEK_LENGTH-day+1<4) {
            // the current week has not the minimum 4 days required by iso 8601 => add one week
            dayOffset += WEEK_LENGTH;
        }
        date = new Date(date.getTime()+dayOffset*24*60*60*1000);

        var weekTime   = 1000 * 60 * 60 * 24 * 7 * (week - 1);
        var targetTime = date.getTime() + weekTime;

        date.setTime(targetTime);

        var toDate = new Date(date.getTime() + (1000 * 60 * 60 * 24 * 7));

        return date.getDate() + "/" + (date.getMonth() + 1) + " - " + toDate.getDate() + "/" + (toDate.getMonth() + 1);
    }
});


Ember.Handlebars.registerBoundHelper('markdown', function(property) {
    var converter = new Showdown.converter();
    if (property) {
        return new Handlebars.SafeString(converter.makeHtml(property));
    }
});
Teknologihuset.IndexController = Ember.ArrayController.extend({
    toppmenySider: []
});
Teknologihuset.IndexIndexController = Ember.ObjectController.extend({
    needs: ['index']
});
Teknologihuset.IndexIndexRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            forside: this.store.find('page', 'forside'),
            kontakt: this.store.find('page', 'kontakt')
        });
    }
});
Teknologihuset.IndexIndexView = Ember.View.extend({
    didInsertElement: function() {
        var self = this;
        Ember.run.schedule('afterRender', function() {
           self.showGoogleMaps();
        });
    },

    showGoogleMaps: function () {
        var position = [59.923449, 10.7317854];
        var latLng = new google.maps.LatLng(position[0], position[1]);

        var mapOptions = {
            zoom: 16, // initialize zoom level - the max value is 21
            streetViewControl: false, // hide the yellow Street View pegman
            scaleControl: true, // allow users to zoom the Google Map
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: latLng
        };

        map = new google.maps.Map(document.getElementById('googlemaps'),
            mapOptions);

        // Show the default red marker at the location
        marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP
        });
    }
});
Teknologihuset.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('page');
    },

    setupController: function(controller, model) {
        var toppPages = [];

        model.forEach(function(page) {
            if (page.get('forsidePlassering') === 'topp') {
                controller.set('toppArtikkel', page);
            }

            if (page.get('forsidePlassering') === 'venstre') {
                controller.set('venstreArtikkel', page);
            }

            if (page.get('forsidePlassering') === 'hoyre') {
                controller.set('hoyreArtikkel', page);
            }

            if (page.get('toppmeny')) {
                toppPages.pushObject(page);
            }
        });

        var sortedPages = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:toppPages, sortProperties: ['toppIndex'] }
        );

        controller.set('toppmenySider', sortedPages);
    }
});
Teknologihuset.Upload = DS.Model.extend({
    href: DS.attr('string')
});
/*
    Not in use yet
*/
Teknologihuset.BookingInquiry = DS.Model.extend({
    firmanavn: DS.attr('string'),
    epost: DS.attr('string'),
    tlf: DS.attr('string'),
    beskrivelse: DS.attr('string'),
    oenskerBevertning: DS.attr('boolean'),

    events: DS.attr('raw'),

    start: function() {
        var events = this.get('events');
        var start = null;

        if (events) {
            events.forEach(function(event) {
                if (start === null || event.start() < start) {
                    start = event.get('start');
                }
            });
        }

        return start;
    }.property('events.length'),

    end: function() {
        var events = this.get('events');
        var end = null;

        if (events) {
            events.forEach(function(event) {
                if (end === null || event.start() > end) {
                    end = event.get('end');
                }
            });
        }

        return end;
    }.property('events.length'),

    contains: function(event) {
        var doContain = false;

        var events = this.get('events');

        if (events) {
            events.forEach(function(event) {
                if (event.get('id') === event.get('id')) {
                    doContain = true;
                }
            });
        }

        return doContain;
    }
});
Teknologihuset.Community = DS.Model.extend({
    name: DS.attr('string'),
    cLogo: DS.belongsTo('upload', {async: true}),
    content: DS.attr('string'),
    http: DS.attr('string')
});
Teknologihuset.GeneratedEvent = Ember.Object.extend({
    roomEvents: []
});

Teknologihuset.Page = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    overskrift: DS.attr('string'),
    ingress: DS.attr('string'),
    forsideInnhold: DS.attr('string'),
    forsidePlassering: DS.attr('string'),
    erArtikkel: DS.attr('boolean'),
    bilde: DS.attr('string'),
    toppmeny: DS.attr('boolean'),
    childPages: DS.hasMany('page'),
    toppIndex: DS.attr('number'),
    route: DS.attr('string'),

    markdown: function() {
        if (this.get('content')) {
            var converter = new Showdown.converter();
            return new Handlebars.SafeString(converter.makeHtml(this.get('content')));
        } else {
            return "";
        }
    }.property('content')
});
Teknologihuset.Partner = DS.Model.extend({
    name: DS.attr('string'),
    pLogo: DS.belongsTo('upload', {async: true}),
    content: DS.attr('string'),
    http: DS.attr('string')
});
Teknologihuset.Quote = DS.Model.extend({
    quoteFrom: DS.attr('string'),
    content: DS.attr('string'),
    type: DS.attr('string')
});
Teknologihuset.RoomDay = DS.Model.extend({
    dayOfWeek: DS.attr('number'),
    roomWeek: DS.attr('number'),
    roomYear: DS.attr('number'),
    roomMonth: DS.attr('number'),
    dayOfMonth: DS.attr('number'),
    date: DS.attr('date'),
    room: DS.belongsTo('room', {async: true}),
    roomEvents: DS.hasMany('roomEvent'),
    halfdayEvents: DS.hasMany('roomEvent'),
    fulldayEvent: DS.belongsTo('roomEvent'),
    communityEvent: DS.belongsTo('roomEvent'),

    lessThanThreeAvailableHours: function() {
        return this.get('availableHours.length') < 3;
    }.property('availableHours'),

    availableHours: function() {
        var availableHours = [];

        this.get('sortedRoomEvents').forEach(function(roomEvent) {
            if (!roomEvent.get('googleCalId')) {
                availableHours.pushObject(roomEvent);
            }
        });

        return availableHours;
    }.property('h8', 'h9', 'h10', 'h11', 'h12', 'h13', 'h14', 'h15', 'h16', 'h17'),

    sortedRoomEvents: function() {
        var events = [];

        this.get('roomEvents').forEach(function(ev) {
            events.pushObject(ev);
        });

        var sortedEvents = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['formattedHour'] }
        );

        return sortedEvents;
    }.property('roomEvents'),

    dayLetter: function() {
        if (this.get('dayOfWeek') === 1) {
            return "M";
        } else if (this.get('dayOfWeek') === 2) {
            return "T";
        } else if (this.get('dayOfWeek') === 3) {
            return "O";
        } else if (this.get('dayOfWeek') === 4) {
            return "T";
        } else if (this.get('dayOfWeek') === 5) {
            return "F";
        } else if (this.get('dayOfWeek') === 6) {
            return "L";
        } else if (this.get('dayOfWeek') === 7) {
            return "S";
        }
    }.property('dayOfWeek'),

    delvisOpptatt: function() {
        return this.get('roomEvents').anyBy('opptatt', true);
    }.property('roomEvents.@each.googleCalId'),

    opptatt: function() {
        return this.get('roomEvents').everyBy('opptatt', true);
    }.property('roomEvents.@each.googleCalId'),

    ledig: function() {
        return this.get('roomEvents').anyBy('ledig', true);
    }.property('roomEvents.@each.googleCalId'),

    anyEventsSelected: function() {
        var selected = false;

        this.get('roomEvents').forEach(function(event) {
            if (event.get('selected')) {
                selected = true;
            }
        });

        return selected;
    }.property('roomEvents.@each.selected'),

    anyHalfdayEventsSelected: function() {
        var selected = false;

        this.get('halfdayEvents').forEach(function(event) {
            if (event.get('selected')) {
                selected = true;
            }
        });

        return selected;
    }.property('halfdayEvents.@each.selected'),

    fulldayEventSelected: function() {
        var selected = false;

        if (this.get('fulldayEvent.selected')) {
            selected = true;
        }

        return selected;
    }.property('fulldayEvent.@each.selected')
});
Teknologihuset.RoomEvent = DS.Model.extend({
    googleCalId: DS.attr('string'),
    name: DS.attr('string'),
    start: DS.attr('date'),
    end: DS.attr('date'),
    description: DS.attr('string'),
    hour: DS.attr('number'),
    endHour: DS.attr('number'),
    dayOfMonth: DS.attr('number'),
    month: DS.attr('number'),
    room: DS.belongsTo('room'),

    selected: false,
    bookingPrice: null,

    fromHour: function() {
        if (this.get('start')) {
            return this.get('start').getHours();
        }
    }.property('start'),

    toHour: function() {
        if (this.get('end')) {
            return this.get('end').getHours();
        }
    }.property('end'),

    formattedFromHour: function() {
        return ('0' + this.get('hour')).slice(-2);
    }.property('hour'),

    formattedToHour: function() {
        return ('0' + this.get('endHour')).slice(-2);
    }.property('endHour'),

    opptatt: function() {
        return this.get('googleCalId') !== null;
    }.property('googleCalId'),

    ledig: function() {
        return this.get('googleCalId') === null;
    }.property('googleCalId')
});
Teknologihuset.Room = DS.Model.extend({
    roomName: DS.attr('string'),
    kapasitet: DS.attr('string'),
    pris: DS.attr('number'),
    halvdagspris: DS.attr('number'),
    heldagspris: DS.attr('number'),
    sorteringsIndex: DS.attr('number'),
    content: DS.attr('string'),
    sprite: DS.attr('string'),
    smallImage: DS.belongsTo('upload', {async: true}),
    shortDescription: DS.attr('string'),

    markdown: function() {
        if (this.get('content')) {
            var converter = new Showdown.converter();
            return new Handlebars.SafeString(converter.makeHtml(this.get('content')));
        } else {
            return "";
        }
    }.property('content')
});
Teknologihuset.RoomWeek = DS.Model.extend({
    roomWeek: DS.attr('number'),
    roomYear: DS.attr('number'),
    roomMonth: DS.attr('number'),
    roomDays: DS.hasMany('roomDay'),
    room: DS.belongsTo('room'),

    weekdayRoomDays: function() {
        var weekdays = [];
        this.get('roomDays').forEach(function(roomDay) {
            if (roomDay.get('dayOfWeek') && roomDay.get('dayOfWeek') < 6 && roomDay.get('dayOfWeek') > 0) {
                weekdays.pushObject(roomDay);
            }
        });

        return weekdays;
    }.property('roomDays.@each.dayOfWeek'),

    isJuly: function() {
        return (this.get('roomMonth') === 7) || (this.get('roomMonth') === 6 && this.get('roomDays.lastObject.roomMonth') === 7);
    }.property('roomMonth', 'roomDays.length')
});
Teknologihuset.Week = DS.Model.extend({
    weeknum: DS.attr('number'),
    year: DS.attr('number'),
    roomWeeks: DS.hasMany('roomWeek', {async: true}),

    sortedRoomWeeks: function() {
        if (!this.get('isLoaded')) {
            return [];
        }

        var sorted = this.get('roomWeeks').toArray();
        return sorted.sort(function(lhs, rhs) {
            return lhs.get('room.sorteringsIndex') - rhs.get('room.sorteringsIndex');
        });

    }.property('roomWeeks.@each.room.sorteringsIndex'),

    thisWeek: function() {
        var now = new Date();
        var week = now.getWeek();
        var year = this.get('year');

        return Ember.Object.create({
            week: week,
            year: year
        });
    }.property('weeknum', 'year'),

    selectableWeeks: function() {
        var now = new Date();
        var week = now.getWeek() + 1;
        var year = this.get('year');

        var weeksToSelect = [];
        var endWeek = week + 10;
        for (var indexWeek = week; indexWeek <= endWeek; indexWeek++) {
            var date       = this.firstWeekOfYear(year),
                weekTime   = this.weeksToMilliseconds(week),
                targetTime = date.getTime() + weekTime;

            date.setTime(targetTime);

            weeksToSelect.pushObject(Ember.Object.create({
                week: indexWeek,
                year: year
            }));
        }


        /*if (endWeek > 52) {
            endWeek = endWeek - 52;
            year = year + 1;
        } else {
            var weeksToSelect = [];

            for (var indexWeek = week; indexWeek <= endWeek; indexWeek++) {
                var date       = this.firstWeekOfYear(year),
                    weekTime   = this.weeksToMilliseconds(week),
                    targetTime = date.getTime() + weekTime;

                date.setTime(targetTime);

            }
        }*/

        return weeksToSelect;

    }.property('weeknum', 'year'),

    firstDayOfWeek: function() {
        var week = this.get('weeknum');
        var year = this.get('year');

        if (year === null) {
            year = (new Date()).getFullYear();
        }

        var date       = this.firstWeekOfYear(year),
            weekTime   = this.weeksToMilliseconds(week),
            targetTime = date.getTime() + weekTime;

        date.setTime(targetTime);

        return date.getDate() + "/" + (date.getMonth() + 1);
    }.property('weeknum', 'year'),

    weeksToMilliseconds: function(weeks) {
        return 1000 * 60 * 60 * 24 * 7 * (weeks - 1);
    },

    lastDayOfWeek: function() {
        var week = this.get('weeknum');
        var year = this.get('year');

        if (year === null) {
            year = (new Date()).getFullYear();
        }

        var date       = this.firstWeekOfYear(year),
            weekTime   = this.weeksToMilliseconds(week) + (1000 * 60 * 60* 24 * 6),
            targetTime = date.getTime() + weekTime;

        date.setTime(targetTime);

        return date.getDate() + "/" + (date.getMonth() + 1);
    }.property('weeknum', 'year'),

    firstWeekOfYear: function (year) {
        var date = new Date();
        date = this.firstDayOfYear(date,year);
        date = this.firstWeekday(date);
        return date;
    },

    firstDayOfYear: function(date, year) {
        date.setYear(year);
        date.setDate(1);
        date.setMonth(0);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    },

    firstWeekday: function(firstOfJanuaryDate) {
        // 0 correspond au dimanche et 6 correspond au samedi.
        var FIRST_DAY_OF_WEEK = 1; // Monday, according to iso8601
        var WEEK_LENGTH = 7; // 7 days per week
        var day = firstOfJanuaryDate.getDay();
        day = (day === 0) ? 7 : day; // make the days monday-sunday equals to 1-7 instead of 0-6
        var dayOffset=-day+FIRST_DAY_OF_WEEK; // dayOffset will correct the date in order to get a Monday
        if (WEEK_LENGTH-day+1<4) {
            // the current week has not the minimum 4 days required by iso 8601 => add one week
            dayOffset += WEEK_LENGTH;
        }
        return new Date(firstOfJanuaryDate.getTime()+dayOffset*24*60*60*1000);
    }
});
Teknologihuset.PagesPageView = Ember.View.extend(Teknologihuset.AnimateInViewMixin, {

});
Teknologihuset.PartnereController = Ember.ObjectController.extend({
    currQuotePage: 0,

    sortProperties: ['name:asc'],
    sortedPartners: Ember.computed.sort('partners', 'sortProperties'),

    hasAtLeastTwoQuotes: function() {
        return this.get('currQuotes.length') >= 2;
    }.property('currQuotes.length'),

    currQuotes: function() {
        var currQ = [];

        if (this.get('quotes')) {
            this.get('quotes').forEach(function(quote) {
                if (quote.get('type') === 'partnere') {
                    currQ.pushObject(quote);
                }

                if (currQ.get('length') >= 2) {
                    return currQ;
                }
            });
        }

        return currQ;
    }.property('quotes.length', 'currQuotePage')
});
Teknologihuset.PartnereRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            partnere: this.store.find('page', 'partners'),
            bliPartner: this.store.find('page', 'bliPartner'),
            partners: this.store.find('partner'),
            quotes: this.store.find('quote')
        });
    }
});
Teknologihuset.PartnereView = Ember.View.extend(Teknologihuset.AnimateInViewMixin, {

});
Teknologihuset.RoomsController = Ember.ArrayController.extend({

});
Teknologihuset.RoomsIndexController = Ember.ArrayController.extend({
    sortProperties: ["sorteringsIndex"],
    sortAscending: true
});
Teknologihuset.RoomsIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('rooms');
    }
});
Teknologihuset.RoomsRoomRoute = Ember.Route.extend({
    model: function(room) {
        return this.store.find('room', room.room_id);
    }
});
Teknologihuset.RoomsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('room');
    }
});
Teknologihuset.Router.map(function() {
    this.resource('index', {path: "/"}, function() {
        this.resource('booking', {path: "/booking"}, function() {
            this.route('week', {path: "/week/:week_id"});
            this.route("day", {path: "/day/:day_id"});
            this.route('foresporsel');
            this.route('foresporselKvittering');
        });
        this.resource('rooms', {path: "/rooms"}, function() {
            this.route('room', {path: "/:room_id"});
        });
        this.resource('pages', {path: '/pages'}, function() {
            this.route('page', {path: "/:page_id"});
        });
        this.resource("partnere", {path: '/partnere'});
        this.resource("community", {path: '/community'});
        this.resource("viTilbyr", function() {
            this.route("2ndFloor", function() {
                this.route("lysningen");
                this.route("blikkfang");
                this.route("spillrommet");

            });
            this.route("3rdFloor", function() {
                this.route("fyrtaarnet");
                this.route("inspirasjon");
                this.route("innsikt");
            });
        });
    });
});
DS.RESTAdapter.reopen({
    namespace: 'json'
});

Teknologihuset.ApplicationStore = DS.Store.extend({
    adapter:  "DS.RESTAdapter"
});

Teknologihuset.RawTransform = DS.Transform.extend({
    deserialize: function(serialized) {
        return serialized;
    },
    serialize: function(deserialized) {
        return deserialized;
    }
});

Ember.Inflector.inflector.irregular('community', 'communities');

Teknologihuset.PageAdapter = DS.RESTAdapter.extend({
    namespace: 'json/data'
});

Teknologihuset.QuoteAdapter = DS.RESTAdapter.extend({
    namespace: 'json/data'
});

Teknologihuset.RoomAdapter = DS.RESTAdapter.extend({
    namespace: 'json/data'
});

Teknologihuset.UploadAdapter = DS.RESTAdapter.extend({
    namespace: 'json/data'
});

Teknologihuset.PartnerAdapter = DS.RESTAdapter.extend({
    namespace: 'json/data'
});

Teknologihuset.CommunityAdapter = DS.RESTAdapter.extend({
    namespace: 'json/data'
});
Teknologihuset.ForesporselTextfield = Ember.TextField.extend({
    minLength: null,

    classNameBindings: 'hasError',

    hasError: function() {
        var minLength = this.get('minLength');

        if (minLength && this.get('value') && this.get('value').length > 0 && this.get('value').length < minLength) {
            return true;
        }
        return false;
    }.property('value','minLength')
});
Teknologihuset.LiviconView = Ember.View.extend({
    tagName: 'i',
    attributeBindings: ["data-name", "data-color", "data-size", "data-hovercolor"],

    didInsertElement: function() {
        //$("#" + this.get('elementId')).addLivicon();
    }
});
Teknologihuset.RoomBookingDayView = Ember.View.extend({
    tagName: 'td',
    template: Ember.Handlebars.compile('{{roomDay.dayOfMonth}}<br />{{roomDay.dayLetter}}'),
    classNameBindings: ['opptatt', 'delvisOpptatt', 'selected', 'doubleSelected', 'nonSelected'],

    doubleSelected: function() {
        return this.get('parentView.selectedDay.id') === this.get('roomDay.id');
    }.property('roomDay.id', 'parentView.selectedDay.id', 'roomDay.selected', 'anyHourSelected'),

    anyHourSelected: function() {
        var selected = false;

        this.get('roomDay.roomEvents').forEach(function(event) {
            if (event.get('selected')) {
                selected = true;
            }
        });

        this.get('roomDay.halfdayEvents').forEach(function(event) {
            if (event.get('selected')) {
                selected = true;
            }
        });

        if (this.get('roomDay.fulldayEvent.selected')) {
            selected = true;
        }

        return selected;
    }.property('roomDay.roomEvents.@each.selected', 'roomDay.halfdayEvents.@each.selected', 'roomDay.fulldayEvent.selected'),

    selected: function() {
        var selected = false;

        if (this.get('parentView.selectedDay.id') === this.get('roomDay.id')) {
            selected = true;
        } else {
            selected = false;
        }

        return selected || this.get('anyHourSelected');
    }.property('roomDay.id', 'parentView.selectedDay.id', 'roomDay.selected', 'anyHourSelected'),

    opptatt: function() {
        var opptatt = false;

        if (!this.get('selected') && this.get('roomDay.opptatt')) {
            opptatt = true;
        }

        return opptatt;
    }.property('roomDay.opptatt', 'selected'),

    delvisOpptatt: function() {
        var delvisOpptatt = false;

        if (!this.get('selected') && !this.get('opptatt') && this.get('roomDay.delvisOpptatt')) {
            delvisOpptatt = true;
        }

        return delvisOpptatt;
    }.property('roomDay.delvisOpptatt', 'selected', 'opptatt'),

    nonSelected: function() {
        return !this.get('selected');
    }.property('selected'),

    click: function() {
        //toggle selected
        this.set('parentView.selectedDay', this.get('roomDay'));
    }
});
Teknologihuset.RoomBookingView = Ember.View.extend(Teknologihuset.AnimateInViewMixin, {
    spriteName: null,
    templateName: 'roomBooking',
    roomIsSelected: false,
    classNames: 'pointer, roomBooking',

    actions: {
        selectRoom: function() {
            this.toggleProperty('roomIsSelected');
        },

        selectDay: function(day) {
            var previousSelectedDay = this.get('selectedDay');
            if (previousSelectedDay) {
                previousSelectedDay.set('selected', false);
            }

            day.set('selected', true);
            this.set('selectedDay', day);
        }
    },

    selectedSprite: function() {
        console.log('selectedSprite!! ' + this.get('spriteName'));
        var name = this.get('spriteName');

        if (name) {
            name = name + "_a";
        }

        return "sprite " + name;
    }.property('spriteName'),

    availableSprite: function() {
        var name = this.get('spriteName');

        if (name) {
            name = name + "_b";
        }

        return "sprite " + name;
    }.property('spriteName'),

    occupiedSprite: function() {
        var name = this.get('spriteName');

        if (name) {
            name = name + "_c";
        }

        return "sprite " + name;
    }.property('spriteName'),



    hasSelectedSlots: function() {
        var selected = false;
        var view = this;

        console.log(this.get('room'));
        if (this.get('room')) {
            this.get('room.roomDays').forEach(function(roomDay) {
                var anyHourSelected = view.anyHourSelected(roomDay);
                if (anyHourSelected) {
                    selected = true;
                }
            });
        }

        console.log(this.get('id') + " selected: " + selected);
        return selected;
    }.property('room.roomDays.length', 'room.roomDays.@each.anyEventsSelected', 'room.roomDays.@each.anyHalfdayEventsSelected', 'room.roomDays.@each.fulldayEventSelected'),

    anyHourSelected: function(roomDay) {
        var selected = false;

        if (roomDay.get('anyEventsSelected')) {
            selected = true;
        }

        if (roomDay.get('anyHalfdayEventsSelected')) {
            selected = true;
        }

        if (roomDay.get('fulldayEventSelected')) {
            selected = true;
        }

        return selected;
    },

    canBeBooked: function() {
        var canbook = true;

        if (this.get('controller.isBookingHours') && !this.get('room.room.pris')) {
            canbook = false;
        }

        if (this.get('controller.isBookingHalfday') && !this.get('room.room.halvdagspris')) {
            canbook = false;
        }

        if (this.get('controller.isBookingFullday') && !this.get('room.room.heldagspris')) {
            canbook = false;
        }

        if (this.get('isJuly')) {
            canbook = false;
        }

        console.log('canBeBooked: ' + canbook + " type: " + this.get('controller.bookingType') + " && " + this.get('room.room.pris'));
        return canbook && !this.get('isInPast');
    }.property('controller.bookingType', 'room.room.pris', 'room.room.halvdagspris', 'room.room.heldagspris', 'isInPast'),

    isInPast: function() {
        var now = new Date();
        var weekNumber = now.getWeek();

        console.log(weekNumber);
        console.log(this.get('room.roomWeek'));

        return weekNumber > this.get('room.roomWeek');
    }.property('room.roomWeek'),

    isJuly: function() {
        return this.get('room.isJuly');
    }.property('room.isJuly')
});
Teknologihuset.ViTilbyr2ndFloorRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('viTilbyr.2ndFloor.lysningen');
    }
});
Teknologihuset.ViTlibyr2ndFloorView = Ember.View.extend(Teknologihuset.AnimateInViewMixin, {
    didInsertElement: function() {
        $('img[usemap]').rwdImageMaps();
    }
});
Teknologihuset.ViTilbyr2ndFloorBlikkfangRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('room', 'RegularRoom');
    }
});
Teknologihuset.ViTilbyr2ndFloorBlikkfangView = Ember.View.extend({
    didInsertElement: function() {
        this._super();
        Ember.run.schedule('afterRender', function() {
            $('map').imageMapResize();
        });

    }
});
Teknologihuset.ViTilbyr2ndFloorLysningenRoute = Ember.Route.extend({
    model: function() {
        console.log("TESTING");
        return this.store.find('room', 'GreenRoom');
    }
});
Teknologihuset.ViTilbyr2ndFloorLysningenView = Ember.View.extend({
    didInsertElement: function() {
        this._super();
        Ember.run.schedule('afterRender', function() {
            $('map').imageMapResize();
        });
    }
});
Teknologihuset.ViTilbyr2ndFloorSpillrommetRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('room', 'GameRoom');
    }
});
Teknologihuset.ViTilbyr2ndFloorSpillrommetView = Ember.View.extend({
    didInsertElement: function() {
        this._super();
        Ember.run.schedule('afterRender', function() {
            $('map').imageMapResize();
        });
    }
});
Teknologihuset.ViTilbyr3rdFloorRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('viTilbyr.3rdFloor.inspirasjon');
    }
});
Teknologihuset.ViTlibyr3rdFloorView = Ember.View.extend(Teknologihuset.AnimateInViewMixin, {
    didInsertElement: function() {
        Ember.run.schedule('afterRender', function() {
            $('map').imageMapResize();
        });
    }
});
Teknologihuset.ViTilbyr3rdFloorFyrtaarnetRoute = Ember.Route.extend({
    model: function() {
        console.log("TESTING");
        return this.store.find('room', 'BoardRoom');
    }
});
Teknologihuset.ViTilbyr3rdFloorFyrtaarnetView = Ember.View.extend({
    didInsertElement: function() {
        this._super();
        Ember.run.schedule('afterRender', function() {
            $('map').imageMapResize();
        });

    }
});
Teknologihuset.ViTilbyr3rdFloorInnsiktRoute = Ember.Route.extend({
    model: function() {
        console.log("TESTING");
        return this.store.find('room', 'Small Conference Room');
    }
});
Teknologihuset.ViTilbyr3rdFloorInnsiktView = Ember.View.extend({
    didInsertElement: function() {
        this._super();
        Ember.run.schedule('afterRender', function() {
            $('map').imageMapResize();
        });
    }
});
Teknologihuset.ViTilbyr3rdFloorInspirasjonRoute = Ember.Route.extend({
    model: function() {
        console.log("TESTING");
        return this.store.find('room', 'Big Conference Room');
    }
});
Teknologihuset.ViTilbyr3rdFloorInspirasjonView = Ember.View.extend({
    didInsertElement: function() {
        Ember.run.schedule('afterRender', function() {
            $('map').imageMapResize();
        });
    }
});
Teknologihuset.ViTilbyrRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            viTilbyr: this.store.find('page', 'viTilbyr')
        });
    }
});
Teknologihuset.ViTilbyrView = Ember.View.extend(Teknologihuset.AnimateInViewMixin, {
    didInsertElement: function() {
        this._super();

        //Pre-load images for a smoother experience
        (new Image()).src = '/uploads/plantegning_blikkfang.png';
        (new Image()).src = '/uploads/plantegning_fyrtarnet.png';
        (new Image()).src = '/uploads/plantegning_innsikt.png';
        (new Image()).src = '/uploads/plantegning_inspirasjon.png';
        (new Image()).src = '/uploads/plantegning_lysningen.png';
        (new Image()).src = '/uploads/plantegning_spillrommet.png';
    }
});
