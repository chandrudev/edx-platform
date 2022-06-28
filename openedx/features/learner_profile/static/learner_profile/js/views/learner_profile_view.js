<<<<<<< HEAD
(function(define) {
=======
(function (define){
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    'use strict';

    define(
        [
            'gettext', 'jquery', 'underscore', 'backbone', 'edx-ui-toolkit/js/utils/html-utils',
            'common/js/components/views/tabbed_view',
            'learner_profile/js/views/section_two_tab'
        ],
<<<<<<< HEAD
        function(gettext, $, _, Backbone, HtmlUtils, TabbedView, SectionTwoTab) {
            var LearnerProfileView = Backbone.View.extend({

                initialize: function(options) {
=======
        function (gettext, $, _, Backbone, HtmlUtils, TabbedView, SectionTwoTab){
            var LearnerProfileView = Backbone.View.extend({

                initialize: function (options){
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                    var Router;
                    this.options = _.extend({}, options);
                    _.bindAll(this, 'showFullProfile', 'render', 'renderFields', 'showLoadingError');
                    this.listenTo(this.options.preferencesModel, 'change:account_privacy', this.render);
                    Router = Backbone.Router.extend({
                        routes: {':about_me': 'loadTab', ':accomplishments': 'loadTab'}
                    });

                    this.router = new Router();
                    this.firstRender = true;
                },

<<<<<<< HEAD
                showFullProfile: function() {
=======
                showFullProfile: function () {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                    var isAboveMinimumAge = this.options.accountSettingsModel.isAboveMinimumAge();
                    if (this.options.ownProfile) {
                        return isAboveMinimumAge
                            && this.options.preferencesModel.get('account_privacy') === 'all_users';
                    } else {
                        return this.options.accountSettingsModel.get('profile_is_public');
                    }
                },

<<<<<<< HEAD
                setActiveTab: function(tab) {
=======
                setActiveTab: function (tab){
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                    // This tab may not actually exist.
                    if (this.tabbedView.getTabMeta(tab).tab) {
                        this.tabbedView.setActiveTab(tab);
                    }
                },

<<<<<<< HEAD
                render: function() {
=======
                render: function (){
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                    var tabs,
                        $tabbedViewElement,
                        $wrapperProfileBioElement = this.$el.find('.wrapper-profile-bio'),
                        self = this;

                    this.sectionTwoView = new SectionTwoTab({
                        viewList: this.options.sectionTwoFieldViews,
                        showFullProfile: this.showFullProfile,
                        ownProfile: this.options.ownProfile
                    });

                    this.renderFields();

                    // Reveal the profile and hide the loading indicator
                    $('.ui-loading-indicator').addClass('is-hidden');
                    $('.wrapper-profile-section-container-one').removeClass('is-hidden');
                    $('.wrapper-profile-section-container-two').removeClass('is-hidden');

                    // Only show accomplishments if this is a full profile
                    if (this.showFullProfile()) {
                        $('.learner-achievements').removeClass('is-hidden');
                    } else {
                        $('.learner-achievements').addClass('is-hidden');
                    }

                    if (this.showFullProfile() && (this.options.accountSettingsModel.get('accomplishments_shared'))) {
                        tabs = [
                            {view: this.sectionTwoView, title: gettext('About Me'), url: 'about_me'},
                            {
                                view: this.options.badgeListContainer,
                                title: gettext('Accomplishments'),
                                url: 'accomplishments'
                            }
                        ];

                        // Build the accomplishments Tab and fill with data
<<<<<<< HEAD
                        this.options.badgeListContainer.collection.fetch().done(function() {
                            self.options.badgeListContainer.render();
                        }).error(function() {
=======
                        this.options.badgeListContainer.collection.fetch().done(function (){
                            self.options.badgeListContainer.render();
                        }).error(function (){
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                            self.options.badgeListContainer.renderError();
                        });

                        this.tabbedView = new TabbedView({
                            tabs: tabs,
                            router: this.router,
                            viewLabel: gettext('Profile')
                        });

                        $tabbedViewElement = this.tabbedView.render().el;
                        HtmlUtils.setHtml(
                            $wrapperProfileBioElement,
                            HtmlUtils.HTML($tabbedViewElement)
                        );

                        if (this.firstRender) {
                            this.router.on('route:loadTab', _.bind(this.setActiveTab, this));
                            Backbone.history.start();
                            this.firstRender = false;
                            // Load from history.
                            this.router.navigate((Backbone.history.getFragment() || 'about_me'), {trigger: true});
                        } else {
                            // Restart the router so the tab will be brought up anew.
                            Backbone.history.stop();
                            Backbone.history.start();
                        }
                    } else {
<<<<<<< HEAD
                        // xss-lint: disable=javascript-jquery-html
                        $wrapperProfileBioElement.html(this.sectionTwoView.render().el);
=======
                        if (this.isCoppaCompliant()) {
                            // xss-lint: disable=javascript-jquery-html
                            $wrapperProfileBioElement.html(this.sectionTwoView.render().el);
                        }
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                    }
                    return this;
                },

<<<<<<< HEAD
                renderFields: function() {
=======
                isCoppaCompliant: function (){
                    var enableCoppaCompliance = this.options.accountSettingsModel.get('enable_coppa_compliance'),
                        isAboveAge = this.options.accountSettingsModel.isAboveMinimumAge();
                    return !enableCoppaCompliance || (enableCoppaCompliance && isAboveAge);
                },

                renderFields: function (){
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                    var view = this,
                        fieldView,
                        imageView,
                        settings;

<<<<<<< HEAD
                    if (this.options.ownProfile) {
=======
                    if (this.options.ownProfile && this.isCoppaCompliant()) {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                        fieldView = this.options.accountPrivacyFieldView;
                        settings = this.options.accountSettingsModel;
                        fieldView.profileIsPrivate = !settings.get('year_of_birth');
                        fieldView.requiresParentalConsent = settings.get('requires_parental_consent');
                        fieldView.isAboveMinimumAge = settings.isAboveMinimumAge();
                        fieldView.undelegateEvents();
                        this.$('.wrapper-profile-field-account-privacy').prepend(fieldView.render().el);
                        fieldView.delegateEvents();
                    }

                    // Clear existing content in user profile card
                    this.$('.profile-section-one-fields').html('');

                    // Do not show name when in limited mode or no name has been set
                    if (this.showFullProfile() && this.options.accountSettingsModel.get('name')) {
                        this.$('.profile-section-one-fields').append(this.options.nameFieldView.render().el);
                    }
                    this.$('.profile-section-one-fields').append(this.options.usernameFieldView.render().el);

                    imageView = this.options.profileImageFieldView;
                    this.$('.profile-image-field').append(imageView.render().el);

<<<<<<< HEAD
                    if (this.showFullProfile()) {
                        _.each(this.options.sectionOneFieldViews, function(childFieldView) {
=======
                    if (this.showFullProfile()){
                        _.each(this.options.sectionOneFieldViews, function (childFieldView) {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                            view.$('.profile-section-one-fields').append(childFieldView.render().el);
                        });
                    }
                },

<<<<<<< HEAD
                showLoadingError: function() {
=======
                showLoadingError: function (){
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                    this.$('.ui-loading-indicator').addClass('is-hidden');
                    this.$('.ui-loading-error').removeClass('is-hidden');
                }
            });

            return LearnerProfileView;
        });
}).call(this, define || RequireJS.define);
